import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  
`;
export const Button = styled.button`

  border: none;
  border-radius: 4px;
  background-color: purple;
  color: #fff;         
  padding: 14px;
  font-weight: bold;
  outline: none;
  position: fixed;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    opacity: .8; 
  }

`;