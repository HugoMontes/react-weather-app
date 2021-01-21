// 1. Crear la estructura del componente con "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

// 2. Adicionar los parametros humedad y viento
const WeatherDetails = ({humidity, wind}) => {
    return (
        <div>
            <Typography>Humedad: {humidity}</Typography>
            <Typography>Viento: {wind}</Typography>            
        </div>
    )
}
// 3. Validar las propiedades
WeatherDetails.propTypes = {
    // Adicionar "ptnr" + TAB
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetails
