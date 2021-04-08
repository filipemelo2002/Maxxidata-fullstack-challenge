import styled from 'styled-components';

export const Container = styled.div`
  max-width: 8rem;
  height: 100vh;
  padding-top: 2rem;
  background: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }

  ul {
    display: flex;
    padding: 1rem;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      width: 5rem;
      height: 5rem;
      background: #1a1aa3;
      padding: 1.3rem;
      margin-top: 2rem;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease 200ms;

      :hover {
        transform: scale(1.1);
      }
    }
    li:last-child {
      margin-top: auto;
    }
  }
`;
