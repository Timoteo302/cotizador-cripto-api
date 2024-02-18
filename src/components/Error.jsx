import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #cf433c;
    border-radius: 7px;
    color: #fff;
    padding: 8px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
