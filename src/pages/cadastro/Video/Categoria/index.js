import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../../components/PageDefault';
import FormField from '../../../../components/FormField';

function CadastroCategoria(){

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([])

    const [values, setValues] = useState(valoresIniciais)

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handlerSubmit(infOfEvent) {
        infOfEvent.preventDefault()
        setCategorias([
            ...categorias,
            values
        ])
        setValue(valoresIniciais)
    }
    function handlerChange(infOfEvent){
        const {getAttribute, value} = infOfEvent.target
        setValue(getAttribute('name'), value)
    }
    
    return(
    <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={handlerSubmit}>
            <FormField label='Nome da Categoria:'value={values.nome} onChange={handlerChange} type='text' name='nome' />
            <FormField label='Descrição:' value={values.descricao} onChange={handlerChange} type='text' name='descricao' />
            <FormField label='cor:' value={values.cor} onChange={handlerChange} type='color' name='nome' />
            
            <button>
                Cadastrar
            </button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return(
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                )
            })}
        </ul>

        <Link to='/'>
            Ir para home
        </Link>
    </PageDefault>
    )
}

export default CadastroCategoria;