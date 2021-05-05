import styled from 'styled-components';
import { breakpoints, fonts } from '../../styles/tokens';

export const Container = styled.button`
  width: 260px;
  height: 50px;
  font-size: 12px;
  border: 0;
  border-radius: 10px;
  font-family: ${fonts.primary};
  font-weight: ${fonts.weights.bold};
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.theme.button.background};
  color: ${props => props.theme.button.text};

  @media (min-width: ${breakpoints.phone}) {
    width: 347px;
    height: 56px;
    font-size: 16px;
  }
`;
