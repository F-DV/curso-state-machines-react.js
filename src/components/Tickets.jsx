import React from 'react';
import '../styles/Tickets.css';

const Tickets = ({send,context}) => {

    const finish = () => {
        send('FINISH');
    };

    return(
        <div className='Tickets'>
            <p className='Tickets-description description'>
                Gracias por volar con book a Fly💚
            </p>
            <div className='Tickets-tickets'>
                <div className='Tickets-country'>
                    Colombia
                </div>
                <div className='Tickets-passengers'>
                    <span>
                        ✈
                    </span>
                </div>
            </div>
            <button onClick={finish} className='Tickets-finalizar button'>
                Finalizar
            </button>
        </div>
    );
};
export {Tickets};