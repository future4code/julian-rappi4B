import React from 'react';


const ProfileCard = (props) => {
    const profile = props.profile

    return (  
        <div>
            <div>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
                <button onClick={()=>console.log("clicou ed perfil")}>Editar perfil</button>
            </div>
            <div>
                <p>Endereço cadastrado</p>
                <p>{profile.address}</p>
                <button onClick={()=>console.log("clicou ed address")}>Editar endereço</button>
            </div>
        </div>
    )
  
};
export default ProfileCard