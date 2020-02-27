import { graphql, useStaticQuery } from "gatsby";
const useTortas = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsTorta
        {
          nodes{
            titulo
            id
            slug
            contenido
            imagen {
              fluid(maxWidth: 1200){
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
      `);
      return data.allDatoCmsTorta.nodes.map(tortas=>({
          titulo:tortas.titulo,
          id:tortas.id,
          contenido:tortas.contenido,
          imagen:tortas.imagen,
          slug:tortas.slug
      }))
}
 

export default useTortas;