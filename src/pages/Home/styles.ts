import styled from 'styled-components';
import { breakpoints, colors, fonts } from '../../styles/tokens';

export const Container = styled.div`
  min-height: 350px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${colors.primary};

  h5 {
    font-weight: ${fonts.weights.normal};
    font-size: 12px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    transition: font-size 0.2s;
    animation: fadeInDown;
    animation-duration: 0.9s;

    @media (min-width: ${breakpoints.mobile}) {
      font-size: 14px;
    }
  }

  button {
    width: 189px;
    height: 56px;
    margin-top: 60px;
    letter-spacing: 6px;
    text-transform: uppercase;
    font-size: 14px;
    animation: fadeInDown;
    animation-duration: 1s;

    @media (min-width: ${breakpoints.mobile}) {
      margin-top: 162px;
      font-size: 18px;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 7px;
  font-size: 40px;
  font-weight: ${fonts.weights.normal};
  animation: fadeInDown;
  animation-duration: 0.8s;
  transition: font-size 0.2s;

  @media (min-width: ${breakpoints.phone}) {
    font-size: 58px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 72px;
  }

  strong {
    font-weight: ${fonts.weights.bold};
  }
`;
