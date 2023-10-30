import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import NameInput from './NameInput';

describe('NameInput component tests', ()=>{
    let input;
    beforeEach(async ()=>{
        render(<NameInput/>);
        input = await screen.getByLabelText('Enter your name:')
    })
    test('NameInput component is defined in the document',()=>{
        expect(input).toBeDefined();
    })
    test('NameInput component has initial value ""', ()=>{
        expect(input).toHaveTextContent("")
    })
    test('NameInput component change the value to "fabian"', async ()=>{
        fireEvent.change(input, {target: {value: 'fabian'}})
        expect(input.value).toBe('fabian')
    })  
})

