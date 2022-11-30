import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 
    test('debe de cambiar la caja de texto', () => { 
        render(<AddCategory onNewCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        const inputValue = 'naruto';

        fireEvent.input(input, { target: {value: inputValue} });

        expect(input.value).toBe(inputValue);
        screen.debug();
     })

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
         
        const inputValue = 'naruto';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form)

        screen.debug();
        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);


    })

    test('No debe llamar el onNewcategory si el input esta vacio', () => { 
        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form)

        screen.debug();
        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
     })
     
 })