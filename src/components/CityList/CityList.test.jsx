import React from 'react'
// fireEvent es parte de la libreria de testing
import { render, fireEvent } from '@testing-library/react'
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
    const { findAllByRole } = render(<CityList cities={cities} />)
    // Indicar el role listitem ya que li tiene dicho rol
    const items = await findAllByRole("listitem")
    // Comparamos si la cantidad de items es cuatro
    expect(items).toHaveLength(4)
})

test("CityList click on item ", async () => {
    // Debemos simular una accion del usuario: clic sobre un item
    // para eso vamos a utilizar una funcion "mock"
    const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)
    const items = await findAllByRole("listitem")
    // Para simular la accion click sobre un item, utilizar fireEvent
    fireEvent.click(items[0])
    // Ahora que tuvo que suceder? 
    // Se debio llamar a la funcion fnClickOnItem una unica vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(1) 
})