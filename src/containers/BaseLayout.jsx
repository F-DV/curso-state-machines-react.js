import React from 'react';
import { useMachine } from '@xstate/react';
import bookingMachine from '../Machines/bookingMachine';
import '../styles/BaseLayout.css';
import { Nav } from '../components/Nav';
import { StepsLayout } from './StepsLayout';

const BaseLayout = () => {

    const [state, send] = useMachine(bookingMachine);

  /*
  console.log('nuestra maquina', state);
  console.log('matches true', state.matches('initial'));//empeze con initial?
  console.log('matches false', state.matches('tickets'));//empeze con tickets?
  console.log('matches true', state.can('START'));// siguiente ejecucion valida
*/
  console.log('Nuestra Maquina',state.value,state.context);
  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send}/>
      <StepsLayout state={state} send={send}/>
    </div>
  );
}
export {BaseLayout};

