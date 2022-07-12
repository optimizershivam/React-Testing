import React from 'react';
import { render, cleanup ,fireEvent} from '@testing-library/react';
import Counter from './Counter'

afterEach(cleanup);

  it('should equal to 0', () => {
    const { getByTestId } = render(<Counter/>); 
    expect(getByTestId('counter')).toHaveTextContent(0)
   });

   it('should be enabled', () => {
    const { getByTestId } = render(<Counter/>);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<Counter/>); 
    expect(getByTestId('button-down')).toBeDisabled()
  });

  it('increments counter', () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('button-down'))

    expect(getByTestId('counter')).toHaveTextContent('-1')
  });


  