import React from "react";
import styled from "styled-components";

const FavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;
const ImageAndName = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center; 
`;
const Dots = styled.div`
    color: black;
    display: flex; 
    align-items: center
`;
const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: flex-start;
    padding-left: 0.5rem;
`;
const H5 = styled.h5`
    margin: 0.1rem;
    font-size: 0.75rem;
`;
const P = styled.p`
    margin: 0.08rem;
    font-size: 0.75rem;
    color: gray;
`;
const H2 = styled.h2`
    font-size: 1.6rem;
    margin: 0 0.1rem;
`;
const ImgContainer = styled.div`
    display: flex;
    height: 2.1rem;
    width: 2.1rem;
    border-radius: 50%;
    overflow: hidden;
`;

const FavArtist = ({ imgSrc, name, numsongs }) => {
  return (
    
      <FavContainer>
        <ImageAndName>
            <ImgContainer>
                <img src={imgSrc} alt="artist"/>
            </ImgContainer>
            <DetailsContainer>
                <H5>{name}</H5>
                <P>{numsongs} songs in library</P>
            </DetailsContainer>
        </ImageAndName>
        <Dots>
            <H2>.</H2>
            <H2>.</H2>
        </Dots>
      </FavContainer>
  );
};

export default FavArtist;
