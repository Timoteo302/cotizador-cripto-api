import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #dcdcdc;

    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

    @media (min-width: 992px){
        flex-direction: row;
    }
`

const Texto = styled.p`
    font-size: 18px;
    span{
        color: #fff;
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
        color:  #9497FF;
    }
`

const Imagen = styled.img`
    display: block;
    width: 110px;
`

const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="imagen cripto"
            />

            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado
