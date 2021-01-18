// Generar la estructura del componente
// "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Weather = ({ temperature }) => {
    return (
        <div>
            <Typography variant="h2">{temperature}</Typography>
        </div>
    )
}
// Validar propiedades
Weather.propTypes = {   
    temperature: PropTypes.number.isRequired
}
// Exportar componente
export default Weather
