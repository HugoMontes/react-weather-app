// Generar la estructura del componente
// "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
// Importar la libreria de iconos de clima
import { WiCloud } from 'react-icons/wi'
// Importar un proveedor de contexto para poner
// un tamaño al icono
import { IconContext } from 'react-icons'

const Weather = ({ temperature }) => {
    return (
        <div>
            <IconContext.Provider value={{ size: '5em'}}>
                <WiCloud></WiCloud>
            </IconContext.Provider>
            <Typography display="inline" variant="h3">{temperature}</Typography>
        </div>
    )
}
// Validar propiedades
Weather.propTypes = {   
    temperature: PropTypes.number.isRequired
}
// Exportar componente
export default Weather
