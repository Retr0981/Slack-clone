import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Header({ user, signOut }) {
    return (
      <Container>
      <Main>
      <AccessTimeIcon />
      <SearchContainer>
      <Search>
      <input type="text" placeholder="Search..." /> 
      </Search>
      </SearchContainer>

      <HelpOutlineIcon />
      </Main>
      <UserContainer>
      <Name>
      {user.name}
      </Name>
      <UserImage onClick={signOut}>
      <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png" } />
      </UserImage>
      </UserContainer>
      </Container>
        );
}