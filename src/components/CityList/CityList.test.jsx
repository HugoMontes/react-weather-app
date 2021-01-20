import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList' // SUT

// Generar una constante de prueba
const cities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Bogota", country: "Colombia" },
    { city: "La Paz", country: "Bolivia" },
    { city: "Madrid", country: "España" },
]

test("CityList renders", async () => {
    // Regla de las tres AAA (Arrange Act Assert)
    // Destructurar la funcion findAllByRole
    const { findAllByRole } = render(<CityList cities={cities}/>)
    // Indicar el role listitem ya que li tiene dicho rol
    const items = await findAllByRole("listitem")
    // Comparamos si la cantidad de items es cuatro
    expect(items).toHaveLength(4)
})