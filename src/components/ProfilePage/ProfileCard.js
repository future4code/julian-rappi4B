import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    ViewProfileCard, ViewAdressCard, MainWrapper
  } from '../rappi4bUi/rappi4bUi';
  

const ProfileCard = (props) => {
    const profile = props.profile

    const history = useHistory()

    return (  
        <MainWrapper>
            <ViewProfileCard
                userName={profile.name}
                userEmail={profile.email}
                userCpf={profile.cpf}
                editInfo={()=>history.push('/editar-perfil')}
            />
            <ViewAdressCard 
                userAddress={profile.address}
                editInfo ={()=>history.push('/editar-endereco')}
                
            />
        </MainWrapper>
    )
  
};
export default ProfileCard