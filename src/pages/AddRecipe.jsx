import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #00a98b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #008d76;
  }
`;

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    ingredients: "",
    steps: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recette soumise:", formData);
    // connect to your Flask API here
  };

  return (
    <FormContainer>
      <h2>Ajouter une Recette</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Nom de la recette"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Input
          type="url"
          name="image"
          placeholder="URL de l'image du plat"
          value={formData.image}
          onChange={handleChange}
        />
        <TextArea
          name="description"
          placeholder="Description rapide de la recette"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <TextArea
          name="ingredients"
          placeholder="Ingrédients (un par ligne ou séparés par des virgules)"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <TextArea
          name="steps"
          placeholder="Étapes de préparation"
          value={formData.steps}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="calories"
          placeholder="Calories (kcal)"
          value={formData.calories}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="protein"
          placeholder="Protéines (g)"
          value={formData.protein}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="carbs"
          placeholder="Glucides (g)"
          value={formData.carbs}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="fat"
          placeholder="Lipides (g)"
          value={formData.fat}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="category"
          placeholder="Catégorie (ex: petit déjeuner, dîner, collation)"
          value={formData.category}
          onChange={handleChange}
        />
        <Button type="submit">Ajouter la recette</Button>
      </Form>
    </FormContainer>
  );
};

export default AddRecipe;
