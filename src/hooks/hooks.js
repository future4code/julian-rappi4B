import { useState, useEffect } from 'react';
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

export const usePrivatePage = () => {

  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (!token) {
      history.push('/');
    }
  }, [history]);
};