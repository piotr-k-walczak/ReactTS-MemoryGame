import React, { useState } from "react";
import { useSpring, animated as a, interpolate } from "react-spring";
import styled from "styled-components"

const Board = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2ch;
    margin: 10ch;
`

export default Board;