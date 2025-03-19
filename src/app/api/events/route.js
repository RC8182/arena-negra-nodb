import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

// Ruta de las credenciales de la cuenta de servicio
const CREDENTIALS_PATH = path.join(process.cwd(), 'config', 'diedreicalendar-7ddc51b90e1a.json');

// Verificar si el archivo de credenciales existe
if (!fs.existsSync(CREDENTIALS_PATH)) {
  console.error('El archivo de credenciales no existe en la ruta especificada:', CREDENTIALS_PATH);
  process.exit(1);
}

// Función para obtener el cliente de autenticación
const getAuthClient = async () => {
  const credentials = JSON.parse(await fs.promises.readFile(CREDENTIALS_PATH, 'utf-8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  return auth.getClient();
};

// Expresiones y palabras clave para extraer los datos deseados
const DESCRIPTION_PAX_REGEX = /Reserva para\s+(\d+)\s+personas/i;
const RESTAURANT_KEYWORDS = ['cañita', 'paella', 'arena', 'niña'];

/**
 * parseEventData
 * Extrae el número de comensales (pax) de la descripción y determina
 * el restaurante a partir del summary, buscando entre las palabras clave.
 *
 * @param {Object} event - Objeto del evento obtenido de Google Calendar.
 * @returns {Object|null} - { pax: number, restaurant: string } o null si no se encuentran ambos.
 */
function parseEventData(event) {
    let pax = null;
    if (event.description) {
      const match = event.description.match(DESCRIPTION_PAX_REGEX);
      if (match) {
        pax = parseInt(match[1], 10);
        // Validar que pax sea un número razonable (por ejemplo, menor a 1000)
        if (isNaN(pax) || pax < 1 || pax > 100) {
          pax = null;
        }
      }
    }
  
    let restaurant = null;
    if (event.summary) {
      const lowerSummary = event.summary.toLowerCase();
      for (const keyword of RESTAURANT_KEYWORDS) {
        if (lowerSummary.includes(keyword)) {
          restaurant = keyword;
          break;
        }
      }
    }
  
    if (pax !== null && restaurant !== null) {
      return { pax, restaurant };
    }
    return null;
  }

// Exportamos la función GET para la ruta de la API
export async function GET(request) {
  try {
    // Obtenemos los parámetros de la URL (ejemplo: /api/events?year=2025&month=1)
    const { searchParams } = new URL(request.url);
    const year = parseInt(searchParams.get('year'), 10) || new Date().getFullYear();
    const month = parseInt(searchParams.get('month'), 10) || new Date().getMonth() + 1;

    // Definimos timeMin y timeMax para cubrir el mes completo
    const timeMin = new Date(year, month - 1, 1).toISOString();
    const timeMax = new Date(year, month, 0, 23, 59, 59).toISOString();

    // Obtenemos el cliente autenticado y la instancia de Calendar API
    const authClient = await getAuthClient();
    const calendar = google.calendar({ version: 'v3', auth: authClient });

    // Listamos los eventos del calendario
    const response = await calendar.events.list({
      calendarId: 'restarenanegra@gmail.com', // Reemplaza con tu Calendar ID si es necesario
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items || [];

    // Objeto para agrupar la información por restaurante
    const aggregatedData = {};

    // Recorremos cada evento para extraer los datos deseados
    events.forEach((event) => {
      const parsed = parseEventData(event);
      if (!parsed) return; // Se omiten los eventos que no tengan pax o restaurante válido

      const { pax, restaurant } = parsed;

      if (!aggregatedData[restaurant]) {
        aggregatedData[restaurant] = {
          reservations: 0,
          totalPax: 0,
        };
      }

      aggregatedData[restaurant].reservations += 1;
      aggregatedData[restaurant].totalPax += pax;
    });

    // Transformamos el objeto en un array para mayor facilidad de uso
    const totalByRestaurant = Object.entries(aggregatedData).map(([restaurant, data]) => ({
      restaurant,
      reservations: data.reservations,
      totalPax: data.totalPax,
    }));

    // Retornamos el JSON con los eventos y el resumen por restaurante
    return new Response(
      JSON.stringify({
        success: true,
        year,
        month,
        events,
        totalByRestaurant,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Error obteniendo los eventos:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Error obteniendo los eventos' }),
      { status: 500 }
    );
  }
}
