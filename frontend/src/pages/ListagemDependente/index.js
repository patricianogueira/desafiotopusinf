import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiRefreshCw, FiEye } from 'react-icons/fi';
import api from '../../services/api';
import './style.css';
import '../../global.css'
import logoImg from '../../assets/logo.svg';

export default function ListagemDependente () {

const [dependente, setdependente] = useState([]);


/*----------------------------- LISTA OS DEPENDENTES ------------------------------------- */

    useEffect(() => {
        api.get('dependente').then(response => {
            setdependente(response.data);
        })
    }, []);

/*----------------------------- DELETA OS CADASTROS DE DEPENDENTES ------------------------------------- */

    async function handleDeletedependente(cod_dependente) {
        try{
            await api.delete(`dependente/${cod_dependente}`);
            setdependente(dependente.filter(dependente => dependente.cod_dependente !== cod_dependente));
        }catch(err) {
            alert('Erro ao remover dependente, tente novamente!');
        }
    }

    return (
        <div className="listagem-container">
            <header>
                <img src={logoImg} alt="LogoTopos"/>
                
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
    
                        <button onClick={() => handleDeletedependente(dependente.cod_dependente)} class="botao0" type="button">
                            <FiTrash2 size={20} color="#fff"/>
                        </button>
    
                        <button class="botao0" type="button">
                            <FiRefreshCw size={20} color="#fff"/>
                        </button>
    
                    </li>
                ))}
            </ul>
        </div>
    );
}