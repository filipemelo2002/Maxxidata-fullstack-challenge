import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
interface SignInProps {
  signup?: boolean;
}
export const SignIn = styled.div<SignInProps>`
  ${props => props.signup && `background: ${props.theme.primary};`}
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;

  img {
    width: 17rem;
    align-self: flex-start;
  }

  div {
    margin-top: 3rem;
    padding-left: 0.5rem;
    h1 {
      font-size: 2rem;
      color: ${props => (props.signup ? '#fff' : props.theme.black)};
    }

    p {
      margin-top: 1rem;
      font-weight: 100;
      ${props => props.signup && `color: #fff;`}
    }
  }

  form {
    padding-left: 0.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
      margin-top: 1.4rem;
      font-size: 1rem;
      color: ${props => (props.signup ? '#fff' : props.theme.black)};
    }

    input {
      margin-top: 0.4rem;
      border: 1px solid #b3b3b350;
      padding: 10px;
      border-radius: 0.5rem;
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
    }

    button {
      margin-top: 1.8rem;
      padding: 10px;
      background-color: ${props => props.theme.primary};
      color: #fff;
      border: 0;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: all 200ms;
      ${props => props.signup && 'border: 2px solid #fff;'}
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
    }
    button:hover {
      filter: brightness(0.9);
    }
  }
`;
