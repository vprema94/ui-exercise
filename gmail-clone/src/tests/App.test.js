import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import { render, screen, fireEvent } from './test-utils';

test('messages populate email container', async () => {
   render(<App />)
   const rows = await screen.findAllByTestId('emailRow')
   expect(rows).toHaveLength(10)
})  

test('messages are deleted after select all and trash icon selection', async () => {
   render(<App />)
   fireEvent.click(screen.getByTestId('selectAllCheckbox'))
   fireEvent.click(screen.getByTestId('trashIcon'))
   const rows = screen.queryAllByTestId('emailRow')
   expect(rows).toHaveLength(0)
})  

test('messages are filtered based on tag - work', async () => {
   render(<App />)
   fireEvent.click(screen.getByTestId('workTag'))
   const rows = await screen.findAllByTestId('emailRow')
   expect(rows).toHaveLength(5)
})  