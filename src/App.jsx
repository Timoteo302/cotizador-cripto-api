import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

// Contenedor de lado izq y lado derecho
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

// imagen
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

// heading
const Heading = styled.h1`
  color: #FFF;
  text-align: center;
  font-weight: 900;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 130px;
    height: 6px;
    background-color: #66ADFE;
    display: block;  // cuando le ponemos esto aparece
    margin: 10px auto auto auto; // centra
  }
`

const App = () => {

  const [ monedas, setMonedas ] = useState({})
  const [ resultado, setResultado ] = useState({})

  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0){

      const cotizarCripto = async () => {

        // Spinner en true para mostrarlo
        setCargando(true)
        setResultado({}) // resetear el objeto para no mostrar info anterior

        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])

        // Una vez finalizada la consulta spinner en false
        setCargando(false)
      }

      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
        alt='Imagen de las criptomonedas'
      />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario 
          setMonedas={setMonedas}
        />

        {cargando && <Spinner /> }
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  )
}

export default App
