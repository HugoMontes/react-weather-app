// Importar React "imr" + TAB
import React from 'react'
// Importar el componente Weather
import Weather from './Weather'
// Importar render mediante destructuring 
import { render } from '@testing-library/react'
// Importar otros comparadores o matchers 
// Se lo utilizara mas adelante
import '@testing-library/jest-dom/extend-expect'
// Armar el test
test("Weather render", async () => {
    // Preparar el test
    // Como se espera un unico elemento y no un array
    // usar findByRole
    const { findByRole } = render(<Weather temperature={10} />)
    // Generar una constante para esperar el resultado de findByRole
    // obtener los elementos del tipo heading
    const temp = await findByRole("heading")
    // Assert 
    expect(temp).toHaveTextContent("10")
})


