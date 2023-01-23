import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`;
const Text = styled.span`
    font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src="//www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg"/>
        <Details>
            <Name>John Doe <Date> 1 day ago</Date></Name>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </Details>
    </Container>
  )
}

export default Comment