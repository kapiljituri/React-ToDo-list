import {render} from "@testing-library/react";
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
});