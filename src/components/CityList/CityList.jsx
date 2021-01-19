// Generar la estructura del componente "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './..//CityInfo/CityInfo'
import Weather from './../Weather/Weather'

// Crear una funcion renderizadora de ciudad y pais
const renderCityAndCountry = cityAndCountry => {
    // Recibir city y country aplicando destructuring
    const { city, country } = cityAndCountry
    // Retornar el componente CityInfo y Weater
    return (
        <li>
            <CityInfo city={city} country={country} />
            <Weather temperature={10} state="sunny"/>
        </li>
    )
}

// Adicionar una lista no ordenada ul
// cities: es un array y cada item tiene una ciudad y un pais
const CityList = ({ cities }) => {
    return (
        <ul>
            { 
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    // cities: escribir "ptar"+TAB
    cities: PropTypes.array.isRequired,
}

export default CityList

