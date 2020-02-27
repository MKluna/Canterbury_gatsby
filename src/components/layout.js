import React from "react";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import {Global,css} from '@emotion/core';
import useSeo from "../hooks/use-seo";


const Layout = ({ children }) => 
{
  
   const seo = useSeo();
   const {fallbackSeo:{description,title},facebookPageUrl} = seo;



  return (
    <>
   <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'Raleway', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Cherry Cream Soda', serif;
                    }
                    h3 {
                        font-family: 'Raleway', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding:0;
                    }
                `}
            />
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Cherry+Cream+Soda|Raleway:700&display=swap" rel="stylesheet"/>
    </Helmet>


      <Header/>  
      {children}
      <Footer
        title={title}
        facebook={facebookPageUrl}
      />
    </>
  )
}

export default Layout
