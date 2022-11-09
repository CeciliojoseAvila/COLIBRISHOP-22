import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/Dashboard"><i className="fa fa-tachometer"></i> <h5>Administración</h5></Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i><h5>Productos</h5> </a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/ProductList"><i className="fa fa-clipboard"></i> Todos</Link>
                            </li>

                            <li>
                                <Link to="/nuevoProducto"><i className="fa fa-plus"></i> Crear</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/admon/orders"><i className="fa fa-shopping-basket"></i> <h4>Pedidos</h4></Link>
                    </li>

                    <li>
                        <Link to="/admon/users"><i className="fa fa-users"></i> <h4>Usuarios</h4></Link>
                    </li>

                    <li>
                        <Link to="/admon/reviews"><i className="fa fa-star"></i> <h4>Usuarios</h4>Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar