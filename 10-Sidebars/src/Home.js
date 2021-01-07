import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    return (
        <main>
            <button className='sidebar-toggle' onClick={openSidebar} >
                <FaBars />
            </button>
            <button className='btn' onClick={openModal}>
                show openModal
            </button>
        </main>
    )
}

export default Home
