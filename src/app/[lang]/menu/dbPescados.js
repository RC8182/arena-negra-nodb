import tablaPescado from '/public/arena/uploads/menu/pescados/tablaPescado.png'
import mixtoTapas from '/public/arena/uploads/menu/pescados/mixtoTapas.png'
import pescadoDia from '/public/arena/uploads/menu/pescados/pescadoDia.png'
export const pescados={
    es:{
        title:'Pescados',
        products:[
            {
                name:'Consulte con Nuestros Camareros',
                description:'Estamos trabajando para terminar nuestro menu virtual lo antes posible. Gracias por su comprensión!',
                price:'',
                src:'',
                alt:'',
            },
           
            {
                name:'Parrillada de Pescado y Mariscos',
                price:'15',
                description:'Mínimo 2 personas',
                src: tablaPescado,
                alt:'Imagen de una parrillada de pescado',
            },
            {
                name:'Mixto de Tapas y Pescado',
                price:'15',
                description:'Mínimo 2 personas',
                src: mixtoTapas,
                alt:'Imagen de plato mixto tapas de Arena Negra Restaurante',
            },
            {
                name:'Pescado del día',
                price:'30',
                description:'Precio por kg',
                src: pescadoDia,
                alt:'Imagen del pescado del día de Arena Negra Restaurante',
            },

        ]
    },
    en:{
        title:'Fish',
        products:[
            {
                name: 'Check with Our Waiters',
                description: 'We are working to finish our virtual menu as soon as possible. Thank you for your understanding!',
                price: '',
                src: '',
                alt: '',
            },
            {
                name: 'Grilled Fish and Seafood',
                price: '15',
                description: 'Minimum 2 people',
                src: tablaPescado,
                alt: 'Image of a grilled fish platter',
            },
            {
                name: 'Mixed Tapas and Fish',
                price: '15',
                description: 'Minimum 2 people',
                src: mixtoTapas,
                alt: 'Image of mixed tapas plate from Arena Negra Restaurant',
            },
            {
                name: 'Fish of the Day',
                price: '30',
                description: 'Price per kg',
                src: pescadoDia,
                alt: 'Image of the fish of the day from Arena Negra Restaurant',
            },
        ]
    }
}