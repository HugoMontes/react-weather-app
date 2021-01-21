import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async() => {
    // findByText: Permite encontrar un componente por el texto que muestra
    const { findByText } = render(<WeatherDetails wind={10} humidity={80} />)
    // Unsar REGEXP para buscar el texto 10
    const wind = await findByText(/10/)
    // Unsar REGEXP para buscar el texto 80    
    const humidity = await findByText(/80/)
    // Agregar las condiciones
    expect(wind).toHaveTextContent("Viento: 10 km/h")
    expect(humidity).toHaveTextContent("Humedad: 80%")
})