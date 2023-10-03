import React, { useState } from 'react';

function Info({ title, elementos }) {
    const [informationVisible, setInformationVisible] = useState(true);

    // Función para alternar la visibilidad de la información
    const toggleInformation = () => {
        setInformationVisible(!informationVisible);
    };

    return (
        <div className='all'>
            <div className="button-wrapper">
                <button onClick={toggleInformation} className="profile-button">
                    {informationVisible ? 'Ocultar' : 'Mostrar'}
                </button>
            </div>
            {/* La imagen está fuera de la lógica condicional y se muestra siempre */}
            <img className='photo' src="CURRICULUM VITAE\IMAGE\Foto_Perfil.jpeg" alt="" />
            {informationVisible && (
                <>
                    <div className='perfil'>Perfil</div>
                    <hr />
                    <div className='profile'>
                        <p>Rua Expedicionário João de Carvalho, 106</p>
                        <p>mtsschiavi@gmail.com</p>
                        <p>+5511942642378</p>
                        <p>Fecha de Nacimiento: 04.07.1998</p>
                        <p>Licencia de Conducir: B</p>
                    </div>
                    <div className='habilidades'>
                        <p>Habilidades</p>
                        <hr className='hr' />
                        <p>Trabajo en equipo</p>
                        <p>Matemática</p>
                        <p>Programación</p>
                        <p>Razonamiento lógico</p>
                    </div>
                    <div className='idiomas'>
                        <p>Idiomas</p>
                        <hr className='hr' />
                        <p>Inglés</p>
                        <p>Español</p>
                        <p>Italiano</p>
                        <p>Alemán</p>
                        <p>Japonés</p>
                        <p>Coreano</p>
                    </div>
                    <div className='intereses'>
                        <p>Intereses</p>
                        <hr className='hr' />
                        <p>Desarrollo Web</p>
                        <p>Front-end</p>
                        <p>Back-end</p>
                        <p>Full-Stack</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Info;
