import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid ${({ from }) => from === "login" ? "#3795BD" : "#4E6E81"};
  ${({ from }) => from === "register" && css`
    width: 350px;
  `}
`;

