import React from 'react';

import styled from 'styled-components';

import OrderHistoryCard from './OrderHistoryCard';
import ProfileCard from './ProfileCard';

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProfilePage =()=>{
  
  return(
    <ProfilePageContainer>
      <ProfileCard/>
      <OrderHistoryCard/>
    </ProfilePageContainer>
  )
  
};
export default ProfilePage