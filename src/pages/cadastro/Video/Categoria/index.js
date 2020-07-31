import React, { useState } from 'react';
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
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
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
