import {render ,screen} from "@testing-library/react";
import Greet from "./greet";

test('render component greet' , () => {
    render(<Greet/>)
    const text = screen.getByText("hello")
    expect(text).toBeInTheDocument()
})


test('render component greet' , () => {
    render(<Greet name="chohan"/>)
    const text = screen.getByText("hello chohan")
    expect(text).toBeInTheDocument()
})


