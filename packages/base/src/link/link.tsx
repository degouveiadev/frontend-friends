import { FC } from 'react';
import { Link as LinkBase, LinkProps } from '@chakra-ui/react';

export const Link: FC<LinkProps> = ({ children }) => {
  return <LinkBase>{children}</LinkBase>;
};
