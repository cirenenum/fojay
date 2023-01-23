import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';
import Card from "../components/Card";

const Container = styled.div`
display: flex;
gap: 20px;
`;

const Content = styled.div`
flex:5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};  
`;

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};
`
const Recommendation = styled.div`
flex:2;
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; 

`;

const ChannelDetail = styled.div`
  display: flex; 
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.div`
  font-weight: 500;
`;

const ChannelCounter = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.div`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;



const Video = () => {
  return (
    <Container>
      <Content> <VideoWrapper>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XHawwct9TW4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </VideoWrapper>
      <Title> Test Video</Title>
      <Details>
        <Info> 5,200,000 views Jun 22, 2022</Info>
        <Buttons>
          <Button> <ThumbUpOutlinedIcon/> 123</Button>
          <Button> <ThumbDownOffAltOutlinedIcon/> Dislike</Button>
          <Button> <ReplyOutlinedIcon/> Share</Button>
          <Button> <AddTaskOutlinedIcon/> Save</Button>
        </Buttons>
      </Details>
      <Hr/>
      <Channel>
        <ChannelInfo>
          <Image src="//www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg"/>
          <ChannelDetail>
            <ChannelName> Nicole Mueni</ChannelName>
            <ChannelCounter> 200k Subscribers</ChannelCounter>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Description>
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
      </Channel>
      <Hr/>
      <Comments/>
      </Content>
      <Recommendation> 
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation>
    </Container>
  )
}

export default Video