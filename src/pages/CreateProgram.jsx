import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f4f4f4;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 700px;
  margin: auto;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  font-size: 1rem;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConfirmButton = styled.button`
  position: sticky;
  bottom: 20px;
  background-color: #00a98b;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 2rem;
`;

const steps = ["Basic Details", "Preferences", "Workout Plan"];

const CreateProgram = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    mealsPerDay: "",
    snack: false,
    preference: "",
    illness: "",
    wantsWorkout: "",
    goal: "",
    activityLevel: "",
    workoutDays: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log("Form submitted 🚀:", formData);
    // ici tu peux envoyer les données à ton API ou afficher un résumé
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <InputGroup>
              <Label>Age</Label>
              <Input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </InputGroup>
            <InputGroup>
              <Label>Gender</Label>
              <RadioGroup>
                <label><input type="radio" name="gender" value="male" onChange={handleChange} required /> Male</label>
                <label><input type="radio" name="gender" value="female" onChange={handleChange} required /> Female</label>
              </RadioGroup>
            </InputGroup>
            <InputGroup>
              <Label>Height (cm)</Label>
              <Input type="number" name="height" value={formData.height} onChange={handleChange} required />
            </InputGroup>
            <InputGroup>
              <Label>Weight (kg)</Label>
              <Input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
            </InputGroup>
          </>
        );
      case 1:
        return (
          <>
            <InputGroup>
              <Label>Meals per Day</Label>
              <Select name="mealsPerDay" value={formData.mealsPerDay} onChange={handleChange} required>
                <option value="">--Select--</option>
                <option value="2">2 meals</option>
                <option value="3">3 meals</option>
                <option value="4">4 meals</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Label>
                <input type="checkbox" name="snack" checked={formData.snack} onChange={handleChange} />
                Include snack
              </Label>
            </InputGroup>
            <InputGroup>
              <Label>Preference</Label>
              <Select name="preference" value={formData.preference} onChange={handleChange}>
                <option value="">--Select--</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
              </Select>
            </InputGroup>
            <InputGroup>
              <Label>Any illness?</Label>
              <Input type="text" name="illness" value={formData.illness} onChange={handleChange} />
            </InputGroup>
          </>
        );
      case 2:
        return (
          <>
            <InputGroup>
              <Label>Do you want a workout plan?</Label>
              <RadioGroup>
                <label><input type="radio" name="wantsWorkout" value="yes" onChange={handleChange} required /> Yes</label>
                <label><input type="radio" name="wantsWorkout" value="no" onChange={handleChange} required /> No</label>
              </RadioGroup>
            </InputGroup>
            {formData.wantsWorkout === "yes" && (
              <>
                <InputGroup>
                  <Label>Goal</Label>
                  <Select name="goal" value={formData.goal} onChange={handleChange} required>
                    <option value="">--Select--</option>
                    <option value="gain">Gain weight</option>
                    <option value="lose">Lose weight</option>
                  </Select>
                </InputGroup>
                <InputGroup>
                  <Label>Activity level</Label>
                  <Select name="activityLevel" value={formData.activityLevel} onChange={handleChange} required>
                    <option value="">--Select--</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Select>
                </InputGroup>
                <InputGroup>
                  <Label>Workout days per week</Label>
                  <Select name="workoutDays" value={formData.workoutDays} onChange={handleChange} required>
                    <option value="">--Select--</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Select>
                </InputGroup>
              </>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Form onSubmit={handleConfirm}>
        {renderStepContent()}
        <ButtonGroup>
          {activeStep > 0 && <button type="button" onClick={handleBack}>Back</button>}
          {activeStep < steps.length - 1 && <button type="button" onClick={handleNext}>Next</button>}
        </ButtonGroup>
        {activeStep === steps.length - 1 && <ConfirmButton type="submit">Confirm</ConfirmButton>}
      </Form>
    </Container>
  );
};

export default CreateProgram;
