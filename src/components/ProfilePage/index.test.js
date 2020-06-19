import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import api from '../../services/api';
import ProfilePage from './index';

api.post = jest.fn().mockResolvedValue()
api.get = jest.fn().mockResolvedValue()


describe('', () => {
    test('', () => {
        const {} = render(<ProfilePage/>)
        
    })
})
