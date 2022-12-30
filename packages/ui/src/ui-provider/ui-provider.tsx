import { FC, ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme, ThemingProps } from '@chakra-ui/react';

type UiProviderProps = {
  children: ReactNode | ReactNode[];
  theme?: ThemingProps;
};

const themeBase = extendTheme({});

export const UiProvider: FC<UiProviderProps> = ({ children, theme }) => {
  return <ChakraProvider theme={theme || themeBase}>{children}</ChakraProvider>;
};

export default UiProvider;
