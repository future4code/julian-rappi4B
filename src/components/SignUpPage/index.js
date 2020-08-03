import React from 'react';
import api from '../../services/api';
import LogoRappi from '../../assets/logo-rappi4-salmon.png';
import { MainWrapper, GenInput, GenText, GenForm, GenButton } from '../rappi4bUi/rappi4bUi'

import { useForm } from '../../hooks/hooks';
import { useHistory } from 'react-router-dom'


const SignUpPage = () => {
  const { form, onChange, resetForm } = useForm({
    clientname: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: ''

  });

  const { name, email, password, cpf, confirmPassword } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();

  const goToPrivateArea = (event) => {
    const body = { name, email, password, cpf, confirmPassword }
    event.preventDefault();
    api.post('signup', body)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        history.push('/cadastro-endereco');
        resetForm();
      })
      .catch(err => {
        console.error(err);
        window.alert('Não foi possível realizar seu cadastro')
      })
  }

  return (
    <MainWrapper>
      <img src={LogoRappi} />
      <GenText>Cadastrar</GenText>
      <GenForm autoComplete onSubmit={goToPrivateArea}>
        <GenInput
          minLength={3}
          name='name'
          value={name}
          inputLabel={'Nome *'}
          onChange={handleInputChange}
          type='text'
          placeholder="Nome e sobrenome"
          pattern="[A-Az-z]{3, }"
          title="O nome deve conter 3 letras no mínimo."
          required
          
        />
        <GenInput
          name='email'
          value={email}
          inputLabel={'E-mail *'}
          onChange={handleInputChange}
          placeholder="e-mail@email.com"
          type='text'
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="O e-mail deve obedecer o formato exigido."
          required
        />
        <GenInput
          name='cpf'
          value={cpf}
          inputLabel={'CPF *'}
          onChange={handleInputChange}
          type='text'
          placeholder="000.000.000-00"
          pattern="^\d{3}\.\d{3}\.\d{3}\-\d{2}$"
          title="O CPF deve obedecer o formato exigido."
          required
        />
        <GenInput
          name='password'
          value={password}
          inputLabel={'Senha *'}
          onChange={handleInputChange}
          type='password'
          placeholder="Mínimo 6 caracteres"
          pattern="[0-9a-zA-Z]{6,}"
          title="A senha deve conter no mínimo 6 caracteres."
          required
        />

        <GenInput
          name='confirmPassword'
          value={confirmPassword}
          inputLabel={'Confirmar *'}
          onChange={handleInputChange}
          type='password'
          placeholder="Confirme a senha anterior"
          pattern="[0-9a-zA-Z]{6,}"
          title="A senha deve conter no mínimo 6 caracteres."
          required
        />

        <GenButton type='submit'>Cadastrar</GenButton>
      </GenForm>
      <GenText salmon onClick={()=> history.goBack()}>Voltar</GenText>
    </MainWrapper>
  )

};
export default SignUpPage