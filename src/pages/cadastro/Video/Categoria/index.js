import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../../components/PageDefault';
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handlerSubmit(infOfEvent) {
    infOfEvent.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValue(valoresIniciais);
  }

  function handlerChange(infOfEvent) {
    setValue(
      infOfEvent.target.getAttribute('name'),
      infOfEvent.target.value,
    );
  }
  useEffect(() => {
    const URL = 'https://asmr-flix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
        setCategorias([
          ...resposta,
        ]);
      });
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handlerSubmit}>
        <FormField label="Nome da Categoria" value={values.nome} onChange={handlerChange} type="text" name="nome" />
        <FormField label="Descrição" value={values.descricao} onChange={handlerChange} type="textarea" name="descricao" />
        <FormField label="cor" value={values.cor} onChange={handlerChange} type="color" name="cor" />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
