import React, {Component} from 'react';
import api from '../../services/api';
export default class Main extends Component{
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts =async() =>{
    const response = await api.get('/urls');
    console.log(response);
    };

    render(){
        return<h1>opa meu rapaz</h1>;

    }
}