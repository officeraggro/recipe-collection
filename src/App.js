import React, { useState } from 'react'
import RecipeForm from './components/RecipeForm'
import { RecipeContext } from './components/RecipeContext'
import RecipeList from './components/RecipeList'

const App = () => {
  const [recipeFormShown, showRecipeForm] = useState(false)
  const [recipeList, setRecipeList] = useState([])
  const [recipeSubmitted, setRecipeSubmitted] = useState(false)

  return (
    <>
    <RecipeContext.Provider value={{recipeList, setRecipeList}}>
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          recipeSubmitted ? 
          <RecipeList /> :
          <p>There are no recipes to list.</p>
          
        }
        {
          recipeFormShown ? 
          <RecipeForm setRecipeSubmitted={setRecipeSubmitted}/> :

          <button className="addRecipe-button" onClick={() => showRecipeForm(!recipeFormShown)}>
            Add Recipe
          </button>

        }
      </div>
    </RecipeContext.Provider>
    </>
  )
}

export default App
