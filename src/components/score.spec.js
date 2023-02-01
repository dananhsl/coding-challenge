import React from 'react';
import { render } from '@testing-library/react';
import Score from './score.js';
import useStore from '../hooks/useStore.js';

beforeEach(() => {
    useStore.setState({
        answers: [
            {
                id: 1,
                answer: 'wenn man mir etwas durch die Blume sagt.'
            },
            {
                id: 2,
                answer: 'Ich denke manchmal lange nach und sage dann trotzdem nichts.'
            },
        ]
    });
});

describe('Score component', () => {
    it('calculates the score based on the answers', () => {
        const { getByText } = render(<Score />);
        expect(getByText('ISFW')).toBeInTheDocument();
    });
});


