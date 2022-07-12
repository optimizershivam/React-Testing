import { fireEvent, render,screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "../App";
import Button from "./Button";

describe("Button Tests",()=>{
    it("should have button in dom",()=>{
        render(<Button>Click Me</Button>)

        // screen.debug()

        let button=screen.getByText("Click Me")
        expect(button).toBeInTheDocument() 
    })
    it("should have button with text Click Me in App.js",()=>{
        render(<App></App>)

        let button=screen.getByTestId("cButton")
        expect(button).toBeInTheDocument() 
    })
    it("should render empty button",()=>{
        render(<Button></Button>)

        let button=screen.getByTestId("cButton")
        expect(button).toBeEmptyDOMElement() 
    })
    it("should change theme",()=>{
        render(<App></App>)

        let h3 = screen.getByText("Current Theme is light")
        expect(h3).toHaveTextContent("light") 

        let themeButton = screen.getByText("Change Theme")
        fireEvent.click(themeButton)
        expect(h3).toHaveTextContent("dark")
    })
    it("should call the given function",()=>{
        const mockfn=jest.fn()
        render(<Button onClick={mockfn}>Click Me</Button>)

        const btn=screen.getByTestId("cButton")
        fireEvent.click(btn)
        fireEvent.click(btn)

        expect(mockfn).toBeCalledTimes(2)
    })
})