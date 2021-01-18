// Para generar el siguiente codigo escribir 
// "rafcp" + TAB
// El cual significa "(r) React (af)ArrowFunction (c) Component con (p) PropTypes"
import React from 'react'
import PropTypes from 'prop-types'
// Importar la libreria para mostrar texto
import Typography from '@material-ui/core/Typography'
// Agregar los parametros ciudad y pais
const CityInfo = ({ city, country}) => {
    return (
        <div>
            <Typography>{city}</Typography>
            <Typography>{country}</Typography>
        </div>
    )
}
// Agregar las validaciones
CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}
// Exportar el componente
export default CityInfo
