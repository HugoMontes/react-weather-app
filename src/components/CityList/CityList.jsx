// Generar la estructura del componente "rafcp" + TAB
import React from 'react'
import PropTypes from 'prop-types'
// Importar el componente Grid para ajustar tamaños de pantalla
import Grid from '@material-ui/core/Grid'
import CityInfo from './..//CityInfo'
import Weather from './../Weather'

// Crear una funcion renderizadora de ciudad y pais
const renderCityAndCountry = cityAndCountry => {
    // Recibir city y country aplicando destructuring
    const { city, country } = cityAndCountry
    // Retornar el componente CityInfo y Weater
    // Adicionar el key con city
    // Adicionar Grid contenedor centrada
    // Agregar un tamaño de 8 col. cuando >= sm eoc 12 col 
    return (
        <li key={city}>
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

