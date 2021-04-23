import React, { Component } from 'react';

interface Detalle{
    instrumento: string
    marca: string
    modelo: string
    imagen: string
    precio: string
    costoEnvio: string
    cantidadVendida: string
    descripcion: string
}

export default class Instrumento extends Component<Detalle>{

    constructor(props: Detalle){
        super(props)
    }

    render() {
        return<li>
            <ul>
                <li>{this.props.instrumento}</li>
                <li>{this.props.marca}</li>
                <li>{this.props.modelo}</li>
                <li>{this.props.imagen}</li>
                <li>{this.props.precio}</li>
                <li>{this.props.costoEnvio}</li>
                <li>{this.props.cantidadVendida}</li>
                <li>{this.props.descripcion}</li>
            </ul>
        </li>
    }
}