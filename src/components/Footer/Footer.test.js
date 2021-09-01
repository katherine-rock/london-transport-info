import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Footer from './Footer';

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

describe('Footer', () => {
    it('should show the API information', () => {
        render(<Footer/>);
        const text = screen.getByText(/Transport for London Unified API/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the API documentation link', () => {
        render(<Footer/>);
        const linkElement = screen.getByText(/api.tfl.gov.uk/);
        expect(linkElement).toBeInTheDocument();
    })

    it('should show the copyright statement', () => {
        render(<Footer/>);
        const text = screen.getByText(/copyright/i);
        expect(text).toBeInTheDocument();
    })
});
