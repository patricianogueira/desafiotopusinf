import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiRefreshCw, FiEye } from 'react-icons/fi';
import api from '../../services/api';
import './style.css';
import '../../global.css'
import logoImg from '../../assets/logo.svg';

export default function ListagemFuncionario () {

const [funcionario, setfuncionario] = useState([]);

/*----------------------------- LISTA OS FUNCIONÁRIOS ------------------------------------- */

    useEffect(() => {
        api.get('funcionario').then(response => {
            setfuncionario(response.data);
        })
    }, []);

/*----------------------------- DELETA OS CADASTROS DE FUNCIONÁRIOS E DOS DEPENDENTES VINCULADOS ------------------------------------- */

    async function handleDeleteFuncionario(cod_funcionario) {
        try{
            await api.delete(`funcionario/${cod_funcionario}`);
            setfuncionario(funcionario.filter(funcionario => funcionario.cod_funcionario !== cod_funcionario));
        }catch(err) {
            alert('Erro ao remover funcionário, tente novamente!');
        }
    }

    return (
        <div className="listagem-container">
            <header>
                <img src={logoImg} alt="LogoTopos"/>
                <span>Nosso Time</span>

                <Link className="button" to="/CadastroFuncionario">Cadastrar novo funcionário</Link>
                <Link className="button" to="/">Voltar para Home</Link>
           </header>
            <h1>Funcionários Cadastrados</h1>

            <ul>
                {funcionario.map(funcionario =>(
                    <li key={funcionario.cod_funcionario}>
                    <strong>Código:</strong>
                        <p>{funcionario.cod_funcionario}</p>
    
                        <strong>Nome:</strong>
                        <p>{funcionario.nome}</p>
    
                        <strong>Data de nascimento</strong>
                        <p>{funcionario.data_nascimento}</p>
    
                        <strong>Número do RG:</strong>
                        <p>{funcionario.num_rg}</p>
    
                        <strong>Número do CPF:</strong>
                        <p>{funcionario.num_cpf}</p>
    
                        <strong>Nome da mãe:</strong>
                        <p>{funcionario.nome_mae}</p>
    
                        <button onClick={() => handleDeleteFuncionario(funcionario.cod_funcionario)} class="botao0" type="button">
                            <FiTrash2 size={20} color="#fff"/>
                        </button>
    
                        <button class="botao0" type="button">
                            <FiRefreshCw size={20} color="#fff"/>
                        </button>
    
                        <button onClick = {(`http://localhost:3000/ListagemEspecifica/${funcionario.cod_funcionario}`)} class="botao0" type="button">
                            <FiEye size={20} color="#fff"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}