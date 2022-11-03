import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title={"computador Dieser hp" }></MetaData>
        <div className='row d-flex justify-content-around'>
          <div className='col-12 col-lg-5 img-fluid' id="imagen_producto"> 
          <img  src="../images/productos/natural-venta.jpg" alt='imagen_producto' height="450" width="450" ></img>
          </div>

            <div className='col-12 col-lg-5 mt-5'> <h3> CAFE NATURAL </h3>
            <p >PRESENTACION: 500 GR</p>
            <p >TIPO DE CAFE: EN GRANO</p>
            <p >TUESTE: MEDIO</p>
            <p id="product_id"></p>
            </div>

          </div> 
    </Fragment>
  )
}

