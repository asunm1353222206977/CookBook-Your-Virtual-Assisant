import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      {recipe.youtubeLink && (
        <p>
          <a href={recipe.youtubeLink} target="_blank" rel="noopener noreferrer">
            Watch on YouTube for more details
          </a>
        </p>
      )}
    </div>
  );
};

export default RecipeDetail;
