// Importar React
import React from 'react'
// Importar el componente a testear o SUT
// Subject Under Testing (Objeto de testeo)
import CityInfo from './CityInfo'
//Importar la herramienta para poder renderizar el componente
import { render } from '@testing-library/react'
// Crear la estructura del test
test("CityInfo render", async () => {
    // Mediante destructuring obtener todos los componentes
    // Render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso usamos "findAllByRole" para "consultar" a nuestro componente CityInfo
    const {findAllByRole} = render(<CityInfo city="La Paz" country="Bolivia" />)
    // findAllByRole va buscar (en este caso) todos los componentes que sean
    // "heading" => h1, h2, h3,... etc
    // Como tenemos mas de un heading retorna un array de coponentes (city y countries)
    const cityAndCountryComponents = await findAllByRole("heading")
    // Assert: cuando el test sera correcto
    // Definicion:
    // Cuando el primer elemento (heading) se encuentre la ciudad "La Paz"
    // y cuando en el segundo elemento se encuentre el pais "Bolivia" el test sera correcto
    expect(cityAndCountryComponents[0]).toHaveTextContent("La Paz")
    expect(cityAndCountryComponents[1]).toHaveTextContent("Bolivia")
    // Si estas condiciones se cumplen (expect), el test esta "OK"    
})