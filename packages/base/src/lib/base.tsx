import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BaseProps {}

const StyledBase = styled.div`
  color: pink;
`;

export function Base(props: BaseProps) {
  return (
    <StyledBase>
      <h1>Welcome to Base!</h1>
    </StyledBase>
  );
}

export default Base;
