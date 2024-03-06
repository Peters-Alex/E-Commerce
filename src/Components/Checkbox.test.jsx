import React from "react";
import { fireEvent, render, screen, expect, } from "@testing-library/react";
import Checkbox from "./Checkbox";

// test("Checkbox initially renders as off", () => {
//     const { queryByLabelText } = render(<Checkbox labelOn="On" labelOff="Off" />);
//     expect(queryByLabelText(/off/i)).toBeTruthy();
//   });
  
//   // TODO: Complete this test!
//   test("Checkbox toggles between labels when clicked", () => {
//     // 1. Render the component with "On" and "Off" as the labels.
//     const { queryByLabelText, getByLabelText } = render(
//       <Checkbox labelOn="On" labelOff="Off" />
//     );
//   });

test("Checkbox should be checked after click", () => {
    render(<Checkbox/>);
    const checkbox = screen.getByTestId("myCheckbox");

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    
});

// afterEach(cleanup);

// it('home changes the text after click', () => {
//     const {queryByLabelText, getByLabelText} = render(
//         <Home labelOn="On" labelOff="Off" />,
//     );
//     expect(queryByLabelText(off/i)).toBeTruthy();

//     fireEvent.click(getByLabelText(/off/i));

//     expect(queryByLabelText(/on/i)).toBeTruthy();
// });