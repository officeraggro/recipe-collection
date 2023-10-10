import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('As a Chef, I want to store my recipes so that I can keep track of them', () => {

    it('Should display a heading that reads "My Recipes" when the page loads.', () => {
  
      render(<App />)
      const recipeHeader = screen.getByRole('heading', {name: /my recipes/i})
      
      expect(recipeHeader).toBeInTheDocument()
    })
  
    it('Should display default text under the header that says "There are no recipes to list."', () => {
  
      render(<App />)
      const recipeList = screen.getByText(/there are no recipes to list\./i)
    
      expect(recipeList).toBeInTheDocument()
    })

    it('Displays the "My Recipes" header before the "There are no recipes to list." message', () => {

      render(<App />)
      const recipeHeader = screen.getByRole('heading', {name: /my recipes/i})
  
      const recipeList = screen.getByText(/there are no recipes to list\./i)
  
      expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
    })
  })
})