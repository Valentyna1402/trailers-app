import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImage from "../../img/bg-home.jpg";

const Container = styled.div`
  width: 100%;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 200px 64px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 56px;
  margin-bottom: 50px;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 80px;
`;

const StyledLink = styled(Link)`
  border-radius: 200px;
  background-color: var(--main-white-color);
  padding: 32px 64px;
  font-size: 24px;
  font-weight: 500;
`;

export { Container, Title, Text, StyledLink };
