// Generar la estructura del componente
// "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
// - Importar la libreria de iconos de clima
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
// Importar un proveedor de contexto para poner
// un tamaño al icono
import { IconContext } from 'react-icons'
// - Crear una constante objeto con distintas propiedades
const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}
// - Generar una funcion que renderiza 
// unicamente el icono del clima
// Se podria crear un componente pero no es necesario
const renderState = state => {
    /* 1 ERA VERSION
    *Retornando un objeto
    *switch(state){
    *    case "cloud":
    *        return <WiCloud />
    *    case "cloudy":
    *        return <WiDayCloudy />
    *    case "fog":
    *        return <WiDayFog />
    *    case "sunny":
    *        return <WiDaySunny />
    *    case "Rain":
    *        return <WiRain />
    *    default:
    *        return <WiDaySunny />
    *}
    */
   /* 2 DA VERSION
    *Accediendo a la propiedad de un objeto
    *switch(state){
    *    case "cloud": {
    *        return <stateByName["cloud"] />
    *    }
    *    case "cloudy": {
    *        return <stateByName["cloudy"] />
    *    }
    *    case "fog": {
    *        return <stateByName["fog"] />
    *    }
    *    case "sunny": {
    *        return <stateByName["sunny"] />
    *    }
    *    case "Rain": {
    *        return <stateByName["rain"] />
    *    }
    *    default: {
    *        return <stateByName["sunny"] />
    *    }
    *}
    */
    // 3 ERA VERSION
    // Simplificando la 2 da version
    const IconState = stateByName[state]
    return <IconState />
}
// - Adicionar el parametro state
const Weather = ({ temperature ,state }) => {
    return (
        <div>
            <IconContext.Provider value={{ size: '5em'}}>
                { renderState(state) }
            </IconContext.Provider>
            <Typography display="inline" variant="h3">{temperature}</Typography>
        </div>
    )
}
// Validar propiedades
Weather.propTypes = {   
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired
}
// Exportar componente
export default Weather
