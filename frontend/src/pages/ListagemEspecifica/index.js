import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiRefreshCw, FiEye } from 'react-icons/fi';
import api from '../../services/api';
import './style.css';
import '../../global.css'
import logoImg from '../../assets/logo.svg';

export default async function ListagemEspecificaDependente (cod_funcionario) {

const [dependente, setdependente] = useState([]);
useEffect(() => {
    api.get(`dependente/${cod_funcionario}`).then(response => {
        setdependente(response.data);
    })
}, []);
        /*try{
            await api.get(`dependente/${cod_funcionario}`);
            setdependente(dependente.filter(dependente => dependente.cod_funcionario === cod_funcionario));
        }catch(err) {
            alert('Erro listar dependente, tente novamente!');
        }*/
   
    return (
        <div className="listagem-container">
            <header>
                <img src={logoImg} alt="LogoTopos"/>
                <span>Nosso Time</span>

                <Link className="button" to="/CadastroDependente">Cadastrar novo dependente</Link>
                <Link className="button" to="/">Voltar para Home</Link>
           </header>
            <h1>Dependentes Cadastrados</h1>

            <ul>
                {dependente.map(dependente =>(
                    <li key={dependente.cod_dependente}>
                    <strong>Código do funcionario:</strong>
                        <p>{dependente.cod_funcionario}</p>
    
                        <strong>Nome:</strong>
                        <p>{dependente.nome}</p>
    
                        <strong>Data de nascimento</strong>
                        <p>{dependente.data_nascimento}</p>
    
                        <strong>Número do RG:</strong>
                        <p>{dependente.num_rg}</p>
    
                        <strong>Número do CPF:</strong>
                        <p>{dependente.num_cpf}</p>
    
                        <strong>Nome da mãe:</strong>
                        <p>{dependente.nome_mae}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}