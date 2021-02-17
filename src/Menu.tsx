import React, { useState } from "react";
import { useSpring, animated as a, interpolate } from "react-spring";
import styled from "styled-components"
import {IoMdRepeat} from "react-icons/io"

const MenuButton = styled.div`
    border: none;
    background: transparent;
    transition: border-radius .1s linear, border-color .1s linear;
    color: lightgray;

    &:hover {
        cursor: pointer;
    }

    &:active {
        border-color: pink;
        border-radius: 50%;
    }

    &:active svg {
        fill: pink;
    }

    &:focus, &:active {
        outline: none;
    }
`

const Menu: React.FC<any> = (props: any) => {
    return <MenuButton {...props}>
        <h3>Restart</h3>
    </MenuButton>
}

export default Menu;
