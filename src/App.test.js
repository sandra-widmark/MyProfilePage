import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import App from './App';
import { act } from "react-dom/test-utils";
import UserThemeSection from "./compositions/UserThemeSection";

let container = null; 

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  ReactDOM.render(<App />, container);
});

it("Form has a disabled button before input values are chosen", () => {
  act(() => {
    render(<UserThemeSection />, container);
  });

  const button = container.querySelector("button");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(button.hasAttribute('disabled'));
});
