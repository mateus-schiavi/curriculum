import React, { useState } from 'react'

function Description() {
    const [showEmpleo, setShowEmpleo] = useState(true);
    const [showExperience, setShowExperience] = useState(true);
    const [showEducacion, setShowEducacion] = useState(true);
    return (
        <div>
            <button onClick={() => setShowEmpleo(!showEmpleo)}>
                {showEmpleo ? 'Ocultar Empleo' : 'Mostrar Empleo'}
            </button>
            {showEmpleo && (
                <div className='nombre'>
                    Schiavi, Mateus de Sousa
                    <p>Empleo</p>
                    <p className='busca'>Estoy buscando una oportunidad de empleo en el campo de la programación full-stack.
                        Tengo un nivel avanzado de inglés y español, y actualmente estoy aprendiendo japonés, italiano, alemán y coreano.</p>
                </div>
            )}

            <button onClick={() => setShowExperience(!showExperience)}>
                {showExperience ? 'Ocultar Experiencia' : 'Mostrar Experiencia'}
            </button>
            {showExperience && (
            <div className='profession'>
                <p>EXPERIENCIA PROFISIONAL</p>
                <hr />
                <div className='data'>
                    <p>Julio/2014 - Octubre/2014</p>
                    <p className='resumo'>
                        Ayudante de Maestro de matemática
                        y portugués en Kumon de Suzano
                    </p>
                    <p>Agosto/2021 - Octubre/2021</p>
                    <p className='resumo'>
                        Ayudante de producción en
                        la empresa Itaquá Resistencias
                    </p>
                    <p>Febrero/2023 - Actualmente</p>
                    <p className='resumo'>
                        Maestro de Inglés en
                        Aliança América Idiomas
                    </p>
                </div>
            </div>
            )}
            <button onClick={() => setShowEducacion(!showEducacion)}>
                {showEducacion ? 'Ocultar Educación' : 'Mostrar Educación'}
            </button>
            {showEducacion && (
            <div className='education'>
                <p>EDUCACIÓN</p>
                <hr />
                <div className='curso'>
                    <p>
                        electricista de mantenimiento electronico - SENAI SUZANO
                    </p>
                    <p>
                        Fecha de Inicio: Julio/2019
                        Fecha de cierre: Julio/2021
                    </p>
                    <p>
                        Inglés - CCAA Suzano
                    </p>
                    <p>
                        Fecha de Inicio: Octube/2006
                        Fecha de cierre: Deciembre/2016
                    </p>
                    <p>
                        Español - CCAA Suzano
                    </p>
                    <p>
                        Fecha de Inicio: Julio/2012
                        Fecha de cierre: Deciembre/2015
                    </p>
                    <p>
                        Desarrollo Web - FUNVAL Internacional</p>
                    <p>
                        Julio/2023 - Actualmente
                    </p>
                    <p>
                        Diseño grafico - Smart People Suzano
                    </p>
                    <p>
                        Fecha de Inicio: Julio/2014
                        Fecha de cierre: Julio/2015
                    </p>
                    <p>
                        Ingeniería en Computación - UNIVESP Suzano
                    </p>
                    <p>
                        Julio/2022 - Actualmente
                    </p>
                    <p>
                        Applied Technology - BYU Idaho
                    </p>
                    <p>
                        Marzo/2022 - Actualmente
                    </p>
                </div>
            </div>
            )}
        </div>
    )
}

export default Description