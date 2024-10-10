import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 60px;
  padding: 5px;
  margin-right: 5px;
  font-size: 14px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-right: 10px;
  padding: 5px 0;
  display: inline-block;
  vertical-align: middle;
`;
