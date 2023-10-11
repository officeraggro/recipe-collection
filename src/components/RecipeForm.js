import {useContext} from 'react'
import { RecipeContext } from './RecipeContext'

const RecipeForm = ({ setRecipeSubmitted }) => {
    const { setRecipeList } = useContext(RecipeContext)

    let submitRecipe = (e) => {
        e.preventDefault()


        let newRecipeName = document.getElementById('recipe-name').value
        let newRecipeInstructions = document.getElementById('instructions').value

        setRecipeList(recipeList => [...recipeList, {
            name: newRecipeName,
            instructions: newRecipeInstructions
        }])

        setRecipeSubmitted(true)
    }

    return (
        <>
            <form id="recipe-form" name="recipe-form" onSubmit={submitRecipe}>
                <label for='recipe-name'>Recipe Name</label>
                <input type="text" id="recipe-name" />
                <label for='instructions'>Instructions</label>
                <textarea type='submit' id='instructions' placeholder='write recipe instructions here...'/>
                <input type='submit' />
            </form>
        </>
    )
}

export default RecipeForm