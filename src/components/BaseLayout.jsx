import React from 'react';
import { useMachine, interpret } from '@xstate/react';
import bookingMachine from '../Machines/bookingMachine';



const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);

  //console.log('nuestra maquina', state);
  return (
    <div>Hola</div>
  );
}
export {BaseLayout};