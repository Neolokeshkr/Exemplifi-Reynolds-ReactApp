import styled from "styled-components";

export const LongEl = styled.div`
 min-height: 100vh;
 width: 100%;
`;

export const StyledAppContainer = styled.div`
 min-height: 100vh;
 margin: 0;
 font-family: sans-serif;
 text-align: center;
 background: #242424;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Button = styled.button`
 background: #000;
 padding: 15px;
 border: 1px solid lightblue;
 border-radius: 8px;
 color: #fff;
 font-family: sans-serif;
 font-size: 0.8rem;
 font-weight: 500;
`;

export const Tooltip = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  position: relative;
  font-size: 0.8rem;
  max-width: 140px;
  visibility: hidden;

  &[data-show="true"] {
    visibility: visible;
  }

  &[to-red="true"] {
    background: tomato;
    color: white;
  }

  .arrow,
  .arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
    transition: top 0.3s ease-in, bottom 0.3s ease-in, left 0.3s ease-in,
      right 0.3s ease-in;
  }

  .arrow {
    visibility: hidden;
  }

  .arrow::before {
    visibility: hidden;
    content: "";
    transform: rotate(45deg);
  }

  &[data-popper-placement^="top"] > .arrow {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > .arrow {
    top: -4px;
  }

  &[data-popper-placement^="left"] > .arrow {
    right: -4px;
  }

  &[data-popper-placement^="right"] > .arrow {
    left: -4px;
  }

  .arrow[data-hide="true"]::before {
    visibility: hidden !important;
  }

  &[data-show] > .arrow::before {
    visibility: visible;
  }
`;