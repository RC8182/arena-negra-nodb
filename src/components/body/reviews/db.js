import trip from '/public/images/tripad.png'
import google from '/public/images/goo.png'
import face from '/public/images/face.png'
import guru from '/public/images/restguru.png'

export const datos=
{
    es:{

        reviews:{
            titulo:'Opiniones de Nuestros Clientes',
            subtitulo:'Descubre cómo valoran nuestros servicios los usuarios de diferentes plataformas',
            sites:[
                {
                logo: trip,
                alt:'Logo Trip Advisor',    
                name:'Trip Advisor',
                activity:160,
                points:5,
                link:'https://www.tripadvisor.com/reviews?locationId=23657993&screen=allreviews'
            },
            {
                logo:face,
                alt:'Logo Facebook',      
                name:'Facebook',
                activity:16,
                points:4.8,
                link:'https://www.facebook.com/ArenaNegraRestaurant/?locale=es_ES'
            },
            {
                logo:guru, 
                alt:'Logo Restaurant Guru',     
                name:'Restaurant Guru',
                activity:240,
                points:5,
                link:'https://es.restaurantguru.com/Restaurante-Arena-Negra-Taberna-Marinera-Bbq-Los-Abrigos'
            },
            {
                logo:google, 
                alt:'Logo Google',     
                name:'Google My Business',
                activity:275,
                points:4.7,
                link:'https://www.google.com/search?q=Arena+Negra+Restaurante&stick=H4sIAAAAAAAA_-NgU1IxqEg2S7RMS7M0tkwztUw1T7EyqDAxTTEwNk41MjFOM0pMTDFYxCruWJSal6jgl5pelKgQlFpcklhalJhXkgoA6LSjsEIAAAA&hl=es&mat=CbKUqWc3KFV5ElYB7PxHsf4_j_k-WQAYjcX875D7ZlfcMfBOCxjARvqnHvLPFhl3l3HXiabv6TAUpQjLwjvse-yhYDdUDEXjBCocXKNRMvl7ksAxwCUdNoeM1f_8scdohg&authuser=0#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,1'
            },

            ] 
        },
        

    },

    en:{

        reviews:{
            titulo:'Customer Reviews',
            subtitulo:'Discover how users from different platforms rate our services',
            sites:[
                {
                logo: trip,
                alt:'Trip Advisor Logo',    
                name:'Trip Advisor',
                activity:160,
                points:5,
                link:'https://www.tripadvisor.com/reviews?locationId=23657993&screen=allreviews'
            },
            {
                logo:face,
                alt:'Logo Facebook',      
                name:'Facebook',
                activity:16,
                points:4.8,
                link:'https://www.facebook.com/ArenaNegraRestaurant/?locale=en_EN'
            },
            {
                logo:guru, 
                alt:'Restaurant Guru Logo',     
                name:'Restaurant Guru',
                activity:240,
                points:5,
                link:'https://es.restaurantguru.com/Restaurante-Arena-Negra-Taberna-Marinera-Bbq-Los-Abrigos'
            },
            {
                logo:google, 
                alt:'Google Logo',     
                name:'Google My Business',
                activity:275,
                points:4.7,
                link:'https://www.google.com/search?q=Arena+Negra+Restaurante&stick=H4sIAAAAAAAA_-NgU1IxqEg2S7RMS7M0tkwztUw1T7EyqDAxTTEwNk41MjFOM0pMTDFYxCruWJSal6jgl5pelKgQlFpcklhalJhXkgoA6LSjsEIAAAA&hl=es&mat=CbKUqWc3KFV5ElYB7PxHsf4_j_k-WQAYjcX875D7ZlfcMfBOCxjARvqnHvLPFhl3l3HXiabv6TAUpQjLwjvse-yhYDdUDEXjBCocXKNRMvl7ksAxwCUdNoeM1f_8scdohg&authuser=0#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,1'
            },

            ] 
        },
    }
}