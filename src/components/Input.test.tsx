import {render} from "@testing-library/react";
import Input from './Input'

describe("Input Component", () => {
    it('rendered input', () => {
        const {} = render(<Input showDiv={false}/>);
    });
});