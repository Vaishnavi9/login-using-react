import styled, { css } from 'styled-components'

export const FormDiv = styled.div `
    display: flex;
    flex-direction: column;

    `;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;