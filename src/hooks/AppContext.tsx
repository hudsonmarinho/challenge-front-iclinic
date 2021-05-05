import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { ThemeProvider } from 'styled-components';

import {
  themeDefault,
  themeDarthVader,
  themeLukeSkywalker,
} from '../styles/themes';

import API from '../services/api';

import imgDarthVader from '../assets/images/darth-vader.png';
import imgLukeSkywalker from '../assets/images/luke-skywalker.png';

interface AppContextData {
  master: string | null;
  image: string | undefined;
  isLoading: boolean;
  location: string;
  getYourMaster(): Promise<void>;
  resetApp(): void;
}

interface ThemeProps {
  page: {
    background: string;
    text: string;
  };

  button: {
    background: string;
    text: string;
  };

  back: {
    color: string;
  };
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [masterName, setMasterName] = useState<string | null>(null);
  const [masterImage, setMasterImage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('/');
  const [theme, setTheme] = useState<ThemeProps>(themeDefault);

  useEffect(() => {
    const yourMasterIsLuke = masterName === 'Luke Skywalker';

    if (masterName) {
      setLocation('/master');
      setTheme(yourMasterIsLuke ? themeLukeSkywalker : themeDarthVader);
      setMasterImage(yourMasterIsLuke ? imgLukeSkywalker : imgDarthVader);
    } else {
      setTheme(themeDefault);
      setLocation('/');
    }
  }, [masterName]);

  const getYourMaster = useCallback(async () => {
    setIsLoading(true);

    try {
      const race = await Promise.race([
        API.get('people/1/'),
        API.get('people/4/'),
      ]);

      setMasterName(race.data.name);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }, []);

  const resetApp = useCallback(() => {
    setMasterName(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        master: masterName,
        image: masterImage,
        isLoading,
        location,
        getYourMaster,
        resetApp,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export function useApp(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
}
