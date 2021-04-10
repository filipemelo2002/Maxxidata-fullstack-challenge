import styled from 'styled-components';

export const Container = styled.div`
  width: 7rem;
  height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;

  img {
    margin: 0.3rem;
    width: 4rem;
    height: 4rem;
  }

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    li a {
      width: 4rem;
      height: 4rem;
      background: #1a1aa3;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease 200ms;
      padding: 0.1rem;
      :hover {
        transform: scale(1.1);
      }
    }
    li:last-child {
      margin-top: auto;
    }
  }
`;
