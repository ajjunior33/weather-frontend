import { Container } from "../../styles/Grid";
import { Button } from "../../styles/Buttons";
import { Title, Description } from "../../styles/Texts";
import { useNavigate } from "react-router-dom";
export function Home(){
  const navigate = useNavigate();
  return (
    <Container>
    <img src="./icon.svg" alt="logo" />
    <div>
      <Title>Discover the Weather in Your City</Title>
      <Description>
        Get to know your weather maps and radar preciptation forecast
      </Description>
    </div>
    <Button onClick={() => navigate("/weather")} colorScheme="primary">
      Get Started
    </Button>
  </Container>
  )
}