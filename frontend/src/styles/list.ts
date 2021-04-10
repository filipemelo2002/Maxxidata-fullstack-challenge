import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  padding: 3rem 5rem 3rem 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    align-self: flex-start;
    font-size: 2.5rem;
    color: ${props => props.theme.secondary};
  }
  div {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
