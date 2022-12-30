import { FC } from 'react';
import { Button as ButtonBase, ButtonProps } from '@chakra-ui/react';

export const Button: FC<ButtonProps> = ({ children }) => {
  return <ButtonBase>{children}</ButtonBase>;
};
