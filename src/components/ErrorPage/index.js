import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    MainWrapper,
    GenText,
    GenButton
} from '../rappi4bUi/rappi4bUi';

const ErrorPage = () => {
    const history = useHistory();

    return (
        <MainWrapper>
            <GenText>Opa! Página não encontrada :(</GenText>
            <br />
            <GenButton onClick={() => { history.push('/home') }}>Voltar para Home</GenButton>
        </MainWrapper>
    );
}

export default ErrorPage;