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

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    shortDescription: "",
    content: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog submitted:", formData);
    // connect to your Flask API here
  };

  return (
    <FormContainer>
      <h2>Ajouter un Blog</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Titre du blog"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="author"
          placeholder="Auteur"
          value={formData.author}
          onChange={handleChange}
        />
        <Input
          type="url"
          name="image"
          placeholder="URL de l'image principale"
          value={formData.image}
          onChange={handleChange}
        />
        <TextArea
          name="shortDescription"
          placeholder="Brève description (introduction du blog)"
          value={formData.shortDescription}
          onChange={handleChange}
          required
        />
        <TextArea
          name="content"
          placeholder="Contenu complet du blog"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="tags"
          placeholder="Tags (séparés par des virgules, ex: nutrition, sport, santé)"
          value={formData.tags}
          onChange={handleChange}
        />
        <Button type="submit">Publier</Button>
      </Form>
    </FormContainer>
  );
};

export default AddBlog;