// importar react "imr" + TAB
import React from 'react'
import CityList from './CityList'
// importar el addon action para visualizar el evento
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

// Cargar con datos
const cities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Bogota", country: "Colombia" },
    { city: "La Paz", country: "Bolivia" },
    { city: "Madrid", country: "España" },
]
// Pasar action al manejador de evento onClickCity
// pasar un texto descriptivo para mostrar en la consola
export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />

