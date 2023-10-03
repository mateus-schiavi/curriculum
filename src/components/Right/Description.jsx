import React from 'react'

function Description() {
    return (
        <div>
            <div className='nombre'>
                Schiavi, Mateus de Sousa
                <p>Empleo</p>
                <p className='busca'>Estoy buscando una oportunidad de empleo en el campo de la programación full-stack.
                Tengo un nivel avanzado de inglés y español, y actualmente estoy aprendiendo japonés, italiano, alemán y coreano.</p>
            </div>
            <div className='profession'>
                <p>EXPERIENCIA PROFISIONAL</p>
                <hr />
                <div className='data'>
                    <p>Julio/2014 - Octubre/2014</p>
                    <p>Agosto/2021 - Octubre/2021</p>
                    <p>Enero/2022 - Febrero/2022</p>
                    <p>Febrero/2023 - Actualmente</p>
                </div>
            </div>
        </div>
    )
}

export default Description