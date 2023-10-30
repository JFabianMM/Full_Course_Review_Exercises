import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import IdInput from './IdInput';

describe('IdInput component tests', ()=>{
    let input;
    beforeEach(async ()=>{
        render(<IdInput/>);
        input = await screen.getByLabelText('Enter your id:')
    })
    test('IdInput component is defined in the document',()=>{
        expect(input).toBeDefined();
    })
    test('IdInput component has initial value ""', ()=>{
        expect(input).toHaveTextContent("")
    })
    test('IdInput component change the value to "23"', async ()=>{
        fireEvent.change(input, {target: {value: '23'}})
        expect(input.value).toBe('23')
    })  
})