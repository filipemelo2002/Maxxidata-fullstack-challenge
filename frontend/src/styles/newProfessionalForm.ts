import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 2rem;
  padding-bottom: 3rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 56px 3px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 56px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 56px 3px rgba(0, 0, 0, 0.15);
  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1rem;
      margin-top: 1rem;
    }

    input {
      padding: 10px;
      width: 500px;
      margin: 0.1rem;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid #b3b3b350;
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
    }
    section {
      #status {
        width: auto;
        margin-top: 1rem;
      }
      label {
        margin-left: 0.5rem;
      }
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
      -webkit-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      -moz-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
      box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.51);
    }
    button:hover {
      filter: brightness(0.9);
    }
  }
`;
