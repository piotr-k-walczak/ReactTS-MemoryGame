import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import styled from "styled-components"
import StyledLink, { StyledButton } from "./StyledText";

const StyledLogoLink = styled(StyledLink)<{length:number}>`
  background: -webkit-linear-gradient( 92deg, #95d7e3, #eb76ff );
  background-size:600vw 600vw;
  font-weigth: 900;
  font-size: 120px;
  font-family: 'Josefin Sans', sans-serif;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textAnimate ${p => p.length}s linear infinite alternate;
  @keyframes textAnimate {
    from {
      filter: hue-rotate(0deg);
      background-position-x: 0%;
      
    }
    to {
      filter: hue-rotate(360deg);
      background-position-x: 600vw;
      
    }
  }
`

const MainPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width:"100%",
        alignItems:"center",
        justifyContent: "center",
        padding: "0 10vh",
        boxSizing: "border-box",
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.5) 100%)",
        flexWrap:"wrap"
      }}
    >
      <StyledLink to="#" style={{fontSize: "50px", marginBottom: "20px", fontFamily:"'Josefin Sans', sans-serif"}}>Memory</StyledLink>
      <StyledLogoLink to="/cards_8" style={{animationDelay:"2s"}} length={4}>8 PIECES</StyledLogoLink>
      <StyledLogoLink to="/cards_15" style={{animationDelay:"4s"}} length={3}>15 PIECES</StyledLogoLink>
    </div>
  );
};

export default MainPage;
