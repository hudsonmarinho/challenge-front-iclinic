import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import { useApp } from '../../hooks/AppContext';

import { Container, Content, Header } from './styles';

interface MasterProps extends RouteComponentProps<void> {
  master?: string | null;
}

const Master: React.FC<MasterProps> = ({ history }) => {
  const { isLoading, getYourMaster, master, image, resetApp } = useApp();

  useEffect(() => {
    if (!master) {
      history.push('/');
    }
  }, [master, history]);

  return (
    <Container>
      <Header>
        <button type="button" onClick={() => resetApp()}>
          <FiArrowLeft /> Voltar
        </button>
      </Header>

      <Content>
        <Button onClick={() => getYourMaster()} loading={isLoading}>
          choose your path again, Padawan
        </Button>

        {!isLoading && !!master && (
          <>
            <div className="avatar">
              <img src={image} alt={master} />
            </div>

            <h2>
              Your master is <strong>{master}</strong>
            </h2>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Master;
