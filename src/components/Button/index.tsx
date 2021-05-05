import React, { useContext, ButtonHTMLAttributes } from 'react';
import { ThemeContext } from 'styled-components';
import { PulseLoader } from 'react-spinners';

import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<Props> = ({ loading = false, children, ...rest }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container type="button" disabled={loading} {...rest}>
      {!loading ? (
        children
      ) : (
        <PulseLoader color={theme?.button.text || '#000'} size={10} />
      )}
    </Container>
  );
};

export default Button;
