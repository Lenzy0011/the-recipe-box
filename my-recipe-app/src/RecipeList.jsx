import './RecipeList.css';

export default function RecipeList({ recipes, selectedRecipeId, onSelectRecipe, onToggleFavorite }) {
  return (
    <div className="recipe-list">
      <h2>Saved Recipes</h2>
      <ul className="recipe-list__items">
        {recipes.map((recipe, index) => (
          <li
            key={recipe.id}
            className={`recipe-item${recipe.id === selectedRecipeId ? ' is-selected' : ''}`}
            style={{ animationDelay: `${Math.min(index * 80, 400)}ms` }}
            onClick={() => onSelectRecipe(recipe.id === selectedRecipeId ? null : recipe.id)}
          >
            <strong className="recipe-item__title">{recipe.title}</strong>
            <button
              type="button"
              className="recipe-item__fav"
              aria-pressed={recipe.isFavorite}
              onClick={(e) => onToggleFavorite(recipe.id, e)}
            >
              {recipe.isFavorite ? '★ Favorited' : '☆ Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
