import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
        <h3 className="recipe-name">{recipe.name}</h3>
      </Link>
      <button className="favorite-button" onClick={toggleFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default RecipeCard;
