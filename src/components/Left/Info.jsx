import React from 'react'

function Info() {
    return (
        <div className='all'>
            <img className='photo' src="CURRICULUM VITAE\IMAGE\Foto_Perfil.jpeg" alt="" />
            <div className='profile-1'>
                Perfil
                <hr className='hr'/>
            </div>
            <div className='profile'>
                <p>Rua Expedicionário João de Carvalho, 106</p>
                <p>mtsschiavi@gmail.com</p>
                <p>+5511942642378</p>
                <p>Fecha de Nascimiento: 04.07.1998</p>
                <p>Licencia de Conducir: B</p>
            </div>
            <div className='habilidades'>
                Habilidades
                <hr className='hr'/>
            </div>
            <div className='idiomas'>
                Idiomas
                <hr className='hr'/>
            </div>
            <div className='intereses'>
                Intereses
                <hr className='hr'/>
            </div>
        </div>
    )
}

export default Info