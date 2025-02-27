import styled, { css } from "styled-components";

const baseInputStyles = css`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
  color: rgb(209, 213, 219);

  &::placeholder {
    color: rgb(209, 213, 219);
  }
`;

export const StyledInput = styled.input`
  ${baseInputStyles}
`;

export const StyledTextarea = styled.textarea`
  ${baseInputStyles}
  height: 150px;
  resize: vertical;
`;

export const Label = styled.label`
  color: rgb(55, 65, 81);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.25rem;
`;
