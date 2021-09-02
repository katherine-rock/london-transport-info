import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import SearchBar from './SearchBar';

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

describe('SearchBar', () => {
    it('should display the "show all" button', () => {
        render(<SearchBar/>);
        const text = screen.getByText(/Show all traffic incidents/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the "search by road" input field', () => {
        render(<SearchBar/>);
        const inputNode = screen.getByPlaceholderText('Enter road number')
        expect(inputNode).toBeInTheDocument();
    })

    it('should display the "search" button', () => {
        render(<SearchBar/>);
        const text = screen.getByText('Search by road', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should display the user instructions', () => {
        render(<SearchBar/>);
        const text = screen.getByText(/like "A2, A406"/i);
        expect(text).toBeInTheDocument();
    })
});
