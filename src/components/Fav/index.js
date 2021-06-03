import React, { useState } from 'react'
import useUser from 'hooks/useUser'
import './styles.css'
import Modal from 'components/Modal'
import Login from 'components/Login'

export default function Fav({ id }) {

    const { isLogged, fav, favs } = useUser()
    const [showModal, setShowModal] = useState(false)
    const isFav = favs.some(favId => favId === id)

    const handleClick = () => {
        if (!isLogged) return setShowModal(true)
        fav({ id })
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleLogin = () => {
        setShowModal(false)
    }
    const [
        label,
        emoji
    ] = isFav
            ? [
                'Remove Gif from favorites',
                '❌'
            ]
            : [
                'Add Gif to favorites',
                '❤️'
            ]

    return (
        <>
            <button className="button-fav" onClick={handleClick}>
                <span aria-label={label} role='image'>{emoji}</span>
            </button>
            {showModal &&
                <Modal onClose={handleClose}>
                    <Login onLogin={handleLogin} />
                </Modal>
            }
        </>
    )
}