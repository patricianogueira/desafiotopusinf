import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import '../../global.css';
import logoImg from '../../assets/logo.svg';

export default function Inicio() {
    return(
            <div className="inicio-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="LogoTopos"/>
                        <br></br>
                        <h1>O que você deseja:</h1>
                        <br></br><br></br>
                        
                    </section>
                    <header>
                    <Link className="button" to="/CadastroFuncionario">Cadastrar novo Funcionario</Link>
                    <Link className="button" to="/ListagemFuncionario">Listar Funcionario</Link>
                    <Link className="button" to="/CadastroDependente">Cadastrar novo dependente</Link>
                    <Link className="button" to="/ListagemDependente">Listar dependente</Link>
                    </header>
                </div>
            </div>

    );
}



















