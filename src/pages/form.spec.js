import React from 'react';
import { render } from '@testing-library/react';
import Form from './form.js';
import { questions } from '../questions.js';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
}));

describe('Form component', () => {
    it('renders all questions', () => {
      const { getAllByTestId } = render(<Form />);
      const questionContainers = getAllByTestId('question-container');
      expect(questionContainers.length).toBe(questions.length);
    });
});



