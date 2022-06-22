import React from 'react';
import '../styles/Nav.css';

const Nav = ({state,send}) => {

    const goToWelcome = () => {
        send('CANCEL');
    }

    return (
       <nav className='nav'>
            <h1 className='Nav-logo'>Book a fly ✈</h1>
            {!state.matches('initial')&&
            <button onClick={goToWelcome} className='Nav-cancle button-secundary'>
                Cancelar
            </button>}
       </nav>
    );
}
export {Nav};