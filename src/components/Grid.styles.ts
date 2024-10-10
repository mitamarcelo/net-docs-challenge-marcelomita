import styled from "styled-components";

export const GridContainer = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, 20px);
  grid-auto-rows: 20px;
  gap: 1px;
  width: fit-content;
  height: fit-content;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden; // Changed from 'auto' to 'hidden'

  // Hide scrollbars
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // Internet Explorer 10+
  &::-webkit-scrollbar {
    display: none; // WebKit
  }
`;

export const CellDiv = styled.div<{ $isAlive: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.$isAlive ? "black" : "white")};
  border: 1px solid #ccc;
  cursor: pointer;
`;
