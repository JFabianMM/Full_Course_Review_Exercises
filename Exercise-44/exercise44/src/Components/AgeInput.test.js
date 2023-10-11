import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import AgeInput from './AgeInput';

describe('AgeInput component tests', ()=>{
    let input;
    beforeEach(async ()=>{
        render(<AgeInput/>);
        input = await screen.getByLabelText('Enter your Age:')
    })
    test('AgeInput component is defined in the document',()=>{
        expect(input).toBeDefined();
    })
    test('AgeInput component has initial value ""', ()=>{
        expect(input).toHaveTextContent("")
    })
    test('AgeInput component change the value to "25"', async ()=>{
        fireEvent.change(input, {target: {value: '25'}})
        expect(input.value).toBe('25')
    })  
})