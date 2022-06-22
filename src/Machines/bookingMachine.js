import {assign, createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "initial",
  context: {
    passengers: [],
    selectedCountry: '',
  },
  states: {
    initial: {
      on: {
        START: {
          target:"search",
          actions: 'imprimirInicio',
        }
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: 'passengers',
          actions: assign({
            selectedCountry: (context, event) => event.selected
          })
        },
        CANCEL: "initial",
      },
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: {
          target: "initial",
          actions: 'cleanContext',
        },
        ADD: {
          target: 'passengers',
          actions: assign(
            (context,event) => context.passengers.push(event.newPassenger)
          )
        }
      },
    },
  },
},
{
  actions: {
    imprimirInicio: () => console.log('imprimir Inicio'),
    cleanContext: assign({
      selectedCountry: '',
      passengers: [],
    })
    
  },

}
);

export default bookingMachine;