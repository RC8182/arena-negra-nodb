import { Box } from '@chakra-ui/react';


export const Llamar = ({phone, idioma}) => {

    return (
      <Box textColor={'white'}>
        {(idioma === 'en') ?
          <a href={`tel:${phone}`} ><span style={{whiteSpace: 'nowrap'}}>Call Now</span></a>
          : <a href={`tel:${phone}`} >Llamar</a>
        }
      </Box>
    )
      }    