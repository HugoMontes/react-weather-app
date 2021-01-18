// importar el componente React "imr" + TAB
import React from 'react'
// importar la fuente roboto
import 'typeface-roboto'
// Importar el componente CityInfo
import CityInfo from './CityInfo'
// Exportar el componente enviando un titulo y el coponente
export default CityInfo = {
    title: "CityInfo",
    component: CityInfo
}
// Agregar los subitems, diferentes formas
// en las que el componente se puede visualizar
export const CityExample = () => <CityInfo city={"La Paz"} country={"Bolivia"}></CityInfo>