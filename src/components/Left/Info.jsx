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
                <p>Habilidades</p>
                <hr className='hr'/>
                <p>Trabajo en equipo</p>
                <p>Matemática</p>
                <p>Programación</p>
                <p>Raciocinio lógico</p>
            </div>
            <div className='idiomas'>
                <p>Idiomas</p>
                <hr className='hr'/>
                <p>Inglés</p>
                <p>Español</p>
                <p>Italiano</p>
                <p>Alemán</p>
                <p>Japonés</p>
                <p>Coreano</p>
            </div>
            <div className='intereses'>
                Intereses
                <hr className='hr'/>
                <p>Desarollo Web</p>
                <p>Front-end</p>
                <p>Back-end</p>
                <p>Full-Stack</p>
            </div>
        </div>
    )
}

export default Info