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

// Configurar la autenticación con Google Calendar API
const getAuthClient = async () => {
  const credentials = JSON.parse(await fs.promises.readFile(CREDENTIALS_PATH, 'utf-8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  return auth.getClient();
};

// Función para crear el evento en Google Calendar
const createEvent = async (name, people, startDateTime, endDateTime, pagina, dialCode, phone) => {
  const authClient = await getAuthClient();
  const calendar = google.calendar({ version: 'v3', auth: authClient });
  const colorCalendar= (pagina==='Arena Negra')?'8':'4';

  const event = {
    summary: `${people} PAX ${name} en ${pagina}`,
    description: `Reserva para ${people} personas a nombre de ${name} Numero de contacto ${dialCode} ${phone}.`,
    start: {
      dateTime: startDateTime, // Fecha y hora en formato ISO
      timeZone: 'Atlantic/Canary', // Zona horaria de Canarias
    },
    end: {
      dateTime: endDateTime, // Fecha y hora en formato ISO
      timeZone: 'Atlantic/Canary', // Zona horaria de Canarias
    },
    colorId: colorCalendar, 
  };

  const response = await calendar.events.insert({
    calendarId: 'restarenanegra@gmail.com',
    resource: event,
  });
  
  return response.data;
};

// Manejo de la API Route en Next.js 14 con App Router
export async function POST(req) {
  const body = await req.json();
  const { name, people, date, time, pagina, dialCode, phone } = body;

  try {
    // Crear el evento en Google Calendar
    const event = await createEvent(name, people, date, time, pagina, dialCode, phone);

    // Enviar todos los datos necesarios para el popup en la respuesta
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          name,
          people,
          date,
          time,
          phone: `${dialCode} ${phone}`, // Incluye el número completo
          pagina
        }
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creando la reserva:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error creando la reserva' }), { status: 500 });
  }
}





