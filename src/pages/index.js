import React from "react"
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from "../components/layout"
import ImagenTorta from "../components/imagentorta"
import ContenidoInicio from "../components/contenidoinicio"
import useTortas from "../hooks/use-tortas";
import Minitorta from "../components/minitorta";


const ListadoTortas = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem
  }
`

const IndexPage = () =>{
  
  
  const tortas=useTortas();
  console.log(tortas);

  return(
    <Layout>
    <ImagenTorta/>
    <ContenidoInicio/>
    <h2 css={css`
            text-align: center;
            margin-top: 5rem;
            font-size: 3rem;
          `}  >Nuetras Especialidades</h2>

    <ListadoTortas>
      {tortas.map(tortas=>(
        <Minitorta
          key={tortas.id}
          tortas={tortas}
        />
      ))}
    </ListadoTortas>

  </Layout>
  )
}
export default IndexPage
