import React from 'react';

const ProfileCard =()=>{

    return (  
        <div>
            <h1>Meu perfil</h1>
            <div>
                <p>Nome</p>
                <p>Email</p>
                <p>CPF</p>
                <button>Editar perfil</button>
            </div>
            <div>
                <p>Endereço cadastrado</p>
                <p>Rua, 1 - Bairro </p>
                <button>Editar endereço</button>
            </div>
        </div>
    )
  
};
export default ProfileCard