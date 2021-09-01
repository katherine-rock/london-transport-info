import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import Header from './Header';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Header', () => {

    it('should show the website description', () => {
        render(<Header />);
        const text = screen.getByText(/all the latest traffic incidents around London/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the header icon', () => {
        render(<Header />);
        const icon = screen.getByAltText(/right turn street sign/i);
        expect(icon).toBeInTheDocument();
    })
});