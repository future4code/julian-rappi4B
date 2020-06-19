import React from 'react';
import { render } from '@testing-library/react';
import api from '../../services/api';
import HomePage from './index';

api.get = jest.fn().mockResolvedValue({restaurants: []})
api.post = jest.fn().mockResolvedValue()
const container = render(<HomePage />);

describe('Iniciando teste do teste', () => {
    test('Encontra o input de busca pelo texto do placeholder', () => {
        const { getByPlaceholderText } = container;
        const input = getByPlaceholderText('Restaurante')
        expect(input).toBeInTheDocument()
    })

    
})

