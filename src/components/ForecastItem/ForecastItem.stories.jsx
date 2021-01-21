// 1. Importar
import React from 'react'
import ForecastItem from './ForecastItem'
// 2. Exportar el titulo y el componente
export default {
    title: "ForecastItem",
    component: ForecastItem
}
// 3. Crear los ejemplos
export const LunesSoleado = () => (
    <ForecastItem hour={10} state="sunny" temperature={23} weekDay="Lunes" />
)

