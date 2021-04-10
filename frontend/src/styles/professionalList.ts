import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 2rem;
  width: 40%;
  padding-bottom: 3rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 56px 3px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 56px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 56px 3px rgba(0, 0, 0, 0.15);

  ul {
    width: 100%;
    li {
      width: 100%;
      h2 {
        margin-top: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
`;
export const Active = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1bb500;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
`;

export const Inactive = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b50000;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
`;
