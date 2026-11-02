export default function RecipeList({ recipes, selectedRecipeId, onSelectRecipe, onToggleFavorite }) {
  return (
    <div>
      <h2>Saved Recipes</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {recipes.map(recipe => (
          <li 
            key={recipe.id} 
            onClick={() => onSelectRecipe(recipe.id === selectedRecipeId ? null : recipe.id)}
            style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '5px', cursor: 'pointer' }}
          >
            <strong>{recipe.title}</strong>
            <button 
              onClick={(e) => onToggleFavorite(recipe.id, e)}
              style={{ marginLeft: '10px' }}
            >
              {recipe.isFavorite ? '★ Favorited' : '☆ Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}