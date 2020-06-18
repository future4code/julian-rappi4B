import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    
  } from './styles';
  

const ProfileCard = (props) => {
    const profile = props.profile

    const history = useHistory()

    return (  
        <div>
            <div>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
                <button onClick={()=>history.push('/editar-perfil')}>Editar perfil</button>
            </div>
            <div>
                <p>Endereço cadastrado</p>
                <p>{profile.address}</p>
                <button onClick={()=>history.push('/editar-endereco')}>Editar endereço</button>
            </div>
        </div>
    )
  
};
export default ProfileCard