// Generar la estructura del componente "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
// Importar el componente Grid para ajustar tamaños de pantalla
import Grid from '@material-ui/core/Grid'
import CityInfo from './..//CityInfo'
import Weather from './../Weather'

// Crear una funcion renderizadora de ciudad y pais
// renderCityAndCountry se va convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    // Recibir city y country aplicando destructuring
    const { city, country } = cityAndCountry
    // Retornar el componente CityInfo y Weater
    // Adicionar el key con city
    // Adicionar Grid contenedor centrada
    // Agregar un tamaño de 8 col. cuando >= sm eoc 12 col 
    // Escuchar el evento click invocando a la funcion eventOnClickCity
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center">
                    <Grid item md={8} xs={12}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Weather temperature={10} state="sunny"/>
                    </Grid>
            </Grid>
        </li>
    )
}

// Adicionar una lista no ordenada ul
// cities: es un array y cada item tiene una ciudad y un pais
// Agregar un nuevo parametro para la funcion
const CityList = ({ cities, onClickCity }) => {
    return (
        <ul>
            { 
                // Convertir a renderCityAndCountry en una funcion que retorna otra funcion
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    // cities: escribir "ptar"+TAB
    cities: PropTypes.array.isRequired,
    // Agregar la validacion de la funcion "ptfr"
    onClickCity: PropTypes.func.isRequired,
}

export default CityList

