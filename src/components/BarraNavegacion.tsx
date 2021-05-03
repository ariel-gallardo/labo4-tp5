import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BarraNavegacion extends Component{

    render(){
        return <nav className="nav bg-dark">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/mapa">Donde Estamos</Link>
            <Link className="nav-link" to="/instrumentos">Productos</Link>
        </nav>
    }
}