// Generar la estructura del componente
// "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
// Importar la libreria de iconos de clima
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
// Importar un proveedor de contexto para poner
// un tamaño al icono
import { IconContext } from 'react-icons'
// Crear una constante objeto con distintas propiedades
const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}
// Generar una funcion que renderiza 
// unicamente el icono del clima
// Se podria crear un componente pero no es necesario
const renderState = state => {
    const Icon = stateByName[state]
    return <Icon />
}
// Adicionar el parametro state
const Weather = ({ temperature ,state }) => {
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
