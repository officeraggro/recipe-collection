import { useContext } from "react"
import { RecipeContext } from "./RecipeContext"

const RecipeList = () => {
    const { recipeList } = useContext(RecipeContext)

    return (
        <>
            <ul>
                {
                    recipeList.map((recipe, index) => (
                        <li key={index}>Name: {recipe.name} Instructions: {recipe.instructions}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default RecipeList