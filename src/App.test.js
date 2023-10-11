import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import userEvent from '@testing-library/user-event'

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

    describe('As a Chef, I want to be able to add recipes to my collection so that I may have a record of them', () => {

        it('Should have a button that says "Add Recipe" beneath the "My Recipes heading"', () => {
    
          render(<App />)
          const recipeHeader = screen.getByRole('heading', {name: /my recipes/i})
          const addRecipeButton = screen.getByRole('button', {name: /add recipe/i})
    
          expect(addRecipeButton).toBeInTheDocument()
          expect(recipeHeader.compareDocumentPosition(addRecipeButton)).toBe(4)
        })
    
        it('Opens a form when the "Add Recipe" button is clicked', async () => {
          render(<App />)
    
          let button = screen.getByRole('button', {name: /add recipe/i})
          userEvent.click(button)
    
          let form = await screen.findByRole('form', undefined, {timeour: 3000})
    
          expect(form).toBeInTheDocument()
    
          expect(screen.getByRole('textbox', {name: /recipe name/i})).toBeInTheDocument()
    
          expect(screen.getByRole('textbox', {name: /instructions/i})).toBeInTheDocument()
    
          button = screen.queryByRole('button', {name: /add recipe/i})
          expect(button).toBeNull()
        })
      }
    );

    describe('As a Chef, I want to be able to see a recipe that I have added show up under "My Recipes', () => {

      it('Should display a recipe\'s name in a list under the "My Recipes" heading once I have entered the details of a recipe in the form and clicked the submit button', async () => {

        render(<App />)
        let button = screen.getByRole('button', {name: /add recipe/i})
        userEvent.click(button)

        let recipeNameBox = await screen.findByRole('textbox', {name: /recipe name/i})
        let recipeInstructionBox = screen.getByRole('textbox', {name: /instructions/i})

        const recipeName = 'Spam & Eggs'
        const recipeInstructions = '1. Get underpants 2. ??? 3. Profit!'
        
        userEvent.type(recipeNameBox, recipeName)
        userEvent.type(recipeInstructionBox, recipeInstructions)

        let submitButton = screen.getByRole('button')
        userEvent.click(submitButton)

        let recipe = await screen.findByText(/name: spam & eggs/i)

        expect(recipe).toBeInTheDocument()
      })
    }
    );
  })
})