import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: #333;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
`;

export const GridWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  max-height: calc(100vh - 150px);
`;
