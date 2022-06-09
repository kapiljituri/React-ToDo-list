import {fireEvent, render} from "@testing-library/react";
import Input from './Input'

describe("Input Component", () => {
    it('rendered input', () => {
        const { getByTestId } = render(<Input showDiv={false}/>);
        expect(getByTestId('searchBar')).toBeTruthy();
    });

    it('rendered div', () => {
        const { getByTestId } = render(<Input showDiv={true}/>);
        expect(getByTestId('divWeWantToShow')).toBeTruthy();
    });

    it('not rendered div', () => {
        const { queryByTestId } = render(<Input showDiv={false}/>);
        expect(queryByTestId('divWeWantToShow')).toBeFalsy();
    });

    it('change on input changes header', async () => {
        const { getByTestId } = render(<Input showDiv={false}/>);
        const input = getByTestId('searchBar');
        const header = getByTestId('displaySearch');
        const inputLine = "Hello World";
        
        await fireEvent.change(input, {target: {value: inputLine}});
        expect(header.innerHTML).toBe(inputLine);
    });
});