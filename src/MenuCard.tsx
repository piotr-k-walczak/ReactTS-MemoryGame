import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  linksTo: string;
  text: string;
};

type StylingProps = {
  readonly backgroundColor: string;
};

const MenuCardStyle = styled(Link)<StylingProps>`
  width: 30vh;
  height: 30vh;
  min-width: 200px;
  text-align: center;
  background: ${(props) => props.backgroundColor || "aquamarine"};
  font-size: 2em;
  font-weight: 600;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.1s linear, font-size 0.1s linear;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    width: 40vh;
    font-size: 2.5em;
  }
`;

function MenuCard(props: Props & StylingProps) {
  return (
    <MenuCardStyle {...props} to={props.linksTo}>
      <div>{props.text}</div>
    </MenuCardStyle>
  );
}

export default MenuCard;
