import React from "react";
import styled from "styled-components";

const Span = styled.span`
  display: inline-block;
  // justify-content: center; 
  align-items: center;
  background-color: #FFF;
  outline: none;
  border: none;
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
  border-radius: 50px;
  cursor: pointer;
  margin: 0.2rem 0.3rem;
`;
const IconContainer = styled.span`
    font-size: 1rem;
`;
const TextContainer = styled.span`
    color: black;
    padding-left: 0.4rem
`;

const Pill = ({ text, icon }) => {
  return (
    
      <Span>
        <IconContainer>{icon}</IconContainer>
        <TextContainer>{text}</TextContainer>
      </Span>
  );
};

export default Pill;
