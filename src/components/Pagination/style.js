import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin: 15px;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 8px;
`;

export const PageButtons = styled.div`
  background-color: white;
  border-radius: 8px;
  max-width: 300px;
  height: 40px;
  display: grid;
  overflow: hidden;
  grid-template-columns: ${({ repeat }) =>
    repeat ? `repeat(${repeat}, 1fr)` : 'repeat(7, 1fr)'};
`;

export const Button = styled.button`
  border: none;
  border-radius: 0;
  background: white;
  color: black;
  font-size: 16px;
  min-width: calc(300px / 7);
  cursor: pointer;
  &:hover {
    color: ${({ active }) => !active && '#2563eb'};
  }
  &:focus {
    outline: none;
  }
  ${({ active }) => active && 'color: #2563eb;'}
`;

export const ChangeButtons = styled.div`
  width: 90px;
  height: 43px;
  border-radius: 8px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

export const ChangeButton = styled.button`
  background: transparent;
  width: 30px;
  color: ${({ color }) => color};
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* border: none; */
  border: 1px solid rgba(47, 46, 46, 0.65);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:not(:disabled):hover {
    background: #e8e8e8;
  }
  /* &:disabled {
    background: #e8e8e8;
  } */
`;
