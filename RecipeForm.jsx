import { useState } from 'react';

export default function RecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; 
    
    onAddRecipe({
      id: crypto.randomUUID(),
      title: title.trim(),
      ingredients: ingredients.split(',').map(item => item.trim()).filter(Boolean),
      isFavorite: false
    });
    
    setTitle('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text"
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Recipe Title (Required)" 
      />
      <input 
        type="text"
        value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)} 
        placeholder="Ingredients (comma-separated)" 
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}