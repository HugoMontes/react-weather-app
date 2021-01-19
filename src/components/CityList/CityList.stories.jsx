// importar react "imr" + TAB
import React from 'react'
import CityList from './CityList'

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

export const CityListExample = () => <CityList cities={cities} />

