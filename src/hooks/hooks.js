import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

export const useForm = (initialValues) => {

  const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  }

  const resetForm = () => {
    setForm(initialValues);
  }

  return { form, onChange, resetForm }
};

export const usePrivatePage = (context) => {

  const history = useHistory();

  useEffect(() => {
    const localToken = window.localStorage.getItem('rappi4BToken');
    const globalToken = context.userInfos;

    if (globalToken === null && !localToken && localToken === ''){
      window.alert('A sessão expirou. Faça login novamente.')
      history.replace('/');
    }
  }, [history]);
};

