exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsTorta {
        nodes {
          slug
        }
      }
    }
  `)

  //   console.log(resultado.data.allDatoCmsTorta.nodes);
  if (resultado.errors) {
    reporter.panic("No hubo resultados ", resultado.errors)
  }

  //Si hay paginas crear archivos
  const tortas = resultado.data.allDatoCmsTorta.nodes
  console.log(tortas)


  tortas.forEach(torta => {
    actions.createPage({
      path: torta.slug,
      component: require.resolve("./src/components/tortas.js"),
      context: {
        slug: torta.slug,
      },
    })
  })
}
