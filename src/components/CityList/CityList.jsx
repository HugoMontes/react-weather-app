// Generar la estructura del componente "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'

const CityList = ({ cities }) => {
    return (
        <div>
            CityList
        </div>
    )
}

CityList.propTypes = {
    // cities: escribir "ptar"+TAB
    cities: PropTypes.array.isRequired,
}

export default CityList

