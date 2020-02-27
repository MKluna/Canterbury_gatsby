import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = ({title,facebook}) => {

  const year = new Date().getFullYear();  

  return (
    <>  
    <footer
      css={css`
        background-color: rgba(0, 255, 202, 1);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        
        <EnlaceHome to="/">
          <h1>Canterbury Tortas Heladas</h1>
        </EnlaceHome>

       
      </div>
    </footer>
    <p
     css={css`
     text-align: center;
     color: black;
     background-color: rgba(11, 23, 0, 0.4);
     margin: 0;
     padding: 1rem;
 `}
    >{title},Todos los derechos reservados {year} &copy; Facebook: <a href={facebook}>Canterbury Tortas Heladas</a> </p>
    <p
     css={css`
     text-align: center;
     color: black;
     background-color: rgba(11, 23, 0, 0.4);
     margin: 0;
     padding: 1rem;
 `}
    >Website Created by the programmer <a href="https://github.com/MKluna">Luna Matias</a></p>        
    </>      
  )
}

export default Footer
