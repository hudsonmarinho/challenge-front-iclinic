import styled from 'styled-components';
import { breakpoints, fonts } from '../../styles/tokens';

export const Container = styled.div`
  padding: 35px 0px 0 0px;
  color: ${props => props.theme.page.text};

  @media (min-width: ${breakpoints.phone}) {
    padding: 35px 32px 0 32px;
  }
`;

export const Header = styled.div`
  button {
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    font-family: ${fonts.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.back.color};

    svg {
      font-size: 30px;
      margin-right: 16px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}) {
    margin-top: 93px;
  }

  button {
    order: 3;
    margin-bottom: 0;

    @media (min-width: ${breakpoints.mobile}) {
      order: 1;
      margin-bottom: 91px;
    }
  }

  .avatar {
    width: 180px;
    height: 180px;
    display: block;
    margin-bottom: 34px;
    border-radius: 50%;
    overflow: hidden;
    order: 1;

    @media (min-width: ${breakpoints.phone}) {
      width: 302px;
      height: 302px;
    }

    @media (min-width: ${breakpoints.mobile}) {
      width: 380px;
      height: 380px;
      margin-bottom: 50px;
      order: 2;
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  h2 {
    margin-bottom: 36px;
    font-size: 22px;
    font-family: ${fonts.primary};
    font-weight: 400;
    text-align: center;
    order: 2;

    @media (min-width: ${breakpoints.phone}) {
      font-size: 36px;
    }

    @media (min-width: ${breakpoints.mobile}) {
      margin-bottom: 0;
      order: 3;
    }

    strong {
      font-weight: 700;
    }
  }
`;
