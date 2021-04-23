import React, { Component } from 'react';
import Instrumento from '@componente/detalle';
import InstrumentosJSON from '@datos/instrumentos.json';

interface IProps{

}

interface IDetalle{
    instrumentos : any[]
}

export default class Instrumentos extends Component<IProps,IDetalle>{

    constructor(props : IProps){
        super(props)
        this.state = {
            instrumentos : InstrumentosJSON.instrumentos
        };
    }

    render(){
        return <div>
            <ul>
                { 
                    this.state.instrumentos.map( i =>{
                        let { id, marca, modelo, instrumento, imagen, precio, costoEnvio, cantidadVendida, descripcion } = i; 
                        return <Instrumento key={id}
                            marca = {marca}
                            modelo = {modelo}
                            instrumento = {instrumento}
                            imagen = {imagen}
                            precio = {precio}
                            costoEnvio = {costoEnvio}
                            cantidadVendida = {cantidadVendida}
                            descripcion = {descripcion}
                        />
                    })
                }
            </ul>
        </div>
    }
}