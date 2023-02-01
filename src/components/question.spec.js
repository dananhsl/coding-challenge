import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Question from './question.js';

describe('Question component', () => {
    it('renders the question and answer options', () => {
        const props = {
            id: 1,
            question: 'What is your favorite color?',
            answers: ['Red', 'Blue']
        };
        const { getByText } = render(<Question {...props} />);
        expect(getByText(`1. ${props.question}`)).toBeInTheDocument();
        props.answers.forEach(answer => {
            expect(getByText(answer)).toBeInTheDocument();
        });
    });

    it('checks the radio button when the answer is selected', () => {
        const props = {
            id: 1,
            question: 'What is your favorite color?',
            answers: ['Red', 'Blue']
        };
        const { getByLabelText } = render(<Question {...props} />);
        const answer = getByLabelText('Red');
        fireEvent.click(answer);
        expect(answer.checked).toBe(true);
    }
    );
});