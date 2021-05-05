import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
}
