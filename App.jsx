import { useState, useEffect } from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';

export default function App() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); 
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation(); 
    setRecipes(recipes.map(recipe => 
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    ));
  };

  const selectedRecipe = recipes.find(r => r.id === selectedRecipeId);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>The Recipe Box</h1>
      
      <RecipeForm onAddRecipe={handleAddRecipe} />
      
      <RecipeList 
        recipes={recipes} 
        selectedRecipeId={selectedRecipeId}
        onSelectRecipe={setSelectedRecipeId}
        onToggleFavorite={toggleFavorite}
      />

      {selectedRecipe && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9' }}>
          <h2>{selectedRecipe.title} - Ingredients</h2>
          <ul>
            {selectedRecipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li> 
            ))}
          </ul>
          <button onClick={() => setSelectedRecipeId(null)}>Close Details</button>
        </div>
      )}
    </div>
  );
}