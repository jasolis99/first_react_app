import React from 'react'
import './styles.css'

export default function error404() {
    return (
        <>
            <div className="text-wrapper">
                <div className="title" data-content="404">
                    404
                </div>

                <div className="subtitle" data-content="Oops, parece ser que algo ha salido como no debía">
                    Oops, parece ser que algo ha salido como no debía.
                 </div>

                <div className="buttons">
                    <a className="button" href="http://www.ajerez.es">Volver</a>
                </div>
            </div>
        </>
    )
}