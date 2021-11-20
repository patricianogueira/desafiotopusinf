import React, { useState } from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";

import './style.css';
import '../../global.css'
import logoImg from '../../assets/logo.svg';

export default function CadastroDependente() {

    const [cod_funcionario, setcod_funcionario] = useState('');
    const [nome, setnome] = useState(''); //armazena os valores dos inputs
    const [data_nascimento, setdata_nascimento] = useState('');
    const [num_rg, setnum_rg] = useState('');
    const [num_cpf, setnum_cpf] = useState('');
    const [nome_mae, setnome_mae] = useState('');


    /*Integração com o banco de dados*/ 
    async function handleRegister(e) {
        e.preventDefault(); //para página não recarregar

        const data = {
            cod_funcionario,
            nome,
            data_nascimento,
            num_rg,
            num_cpf,
            nome_mae
        };

        try{
            const response = await api.post('dependente', data);

            alert('Cadastro realizado com sucesso!');
        }catch (err){
            alert('CPF já cadastrado ou código de funcionário inexistente, tente novamente!');
        }
    }  

    return (
        <div className="cadastro-container">
            <div className="content">
            <section>
                <img src={logoImg} alt="LogoTopos"/>

                <h1>Cadastro de Dependentes</h1>
                <p>Realize o cadastro do dependente inserindo as informações solicitadas.</p><br/><br/>
                <Link className="button" to="/">Voltar para Home</Link>
            </section>
        
            <form onSubmit={handleRegister}>
                <label>Código do funcionário:</label>
                <input
                    placeholder="Somente números" 
                    value={cod_funcionario}
                    onChange={e => setcod_funcionario(e.target.value)}
                />
                <label>Nome do dependente:</label>  
                <input
                    placeholder="Nome completo" 
                    value={nome}
                    onChange={e => setnome(e.target.value)}
                />
                <label>Data de nascimento:</label>  
                <input
                    type="date"
                    value={data_nascimento}
                    onChange={e => setdata_nascimento(e.target.value)}
                />
                <label>Número do RG:</label>
                <input
                    placeholder="Somente números" 
                    value={num_rg}
                    onChange={e => setnum_rg(e.target.value)}
                />
                <label>Número do CPF:</label>
                <input
                    placeholder="Somente números" 
                    value={num_cpf}
                    onChange={e => setnum_cpf(e.target.value)}
                />
                <label>Nome da mãe:</label>
                <input 
                    placeholder="Nome completo" 
                    value={nome_mae}
                    onChange={e => setnome_mae(e.target.value)}
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
        </div>
    );
}