import React from 'react';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import CadastroFuncionario from './pages/CadastroFuncionario';
import CadastroDependente from './pages/CadastroDependente';
import ListagemFuncionario from './pages/ListagemFuncionario';
import ListagemDependente from './pages/ListagemDependente';
import ListagemEspecifica from './pages/ListagemEspecifica';

import Inicio from './pages/Inicio'

export default function Rota() {
    return(
        <Routes>
                
                <Route  path="/CadastroFuncionario" element={<CadastroFuncionario/>}/>
                <Route path="/CadastroDependente" element={<CadastroDependente/>}/>
                <Route path="/ListagemFuncionario" element={<ListagemFuncionario/>}/>
                <Route path="/ListagemDependente" element={<ListagemDependente/>}/>
                <Route path="/ListagemEspecifica" element={<ListagemEspecifica/>}/>
                <Route path="/" element={<Inicio/>}/>
                
        </Routes>
    );
}



