import React,{useState} from 'react';
import '../styles/Search.css';

const Search = ({state,send}) => {

    const [flight, setFlight] = useState('');
    const options = state.context.countries;

    const goToPassengers = () => {
        
        send('CONTINUE',{selected: flight})
    }
    
    const handleSelectChange = (e) => {
        setFlight(e.target.value);
    }

    return(
        <div className='Search'>
            <p className='Search-title title'>
                Busca tu destino
            </p>
            <select 
                id='country'
                className='Search-select'
                value={flight}
                onChange={handleSelectChange}
            >
                <option 
                    value=""
                    disabled
                    defaultValue
                >
                    Escoge un Pais 
                </option>
                {options.map((option) => 
                    <option value={option.name.common} key={option.name.common}>
                        {option.name.common}
                    </option>)}
            </select>
            <button 
                onClick={goToPassengers}
                disabled={flight===''}
                className='Search-continue button'
            >
                Continuar
            </button>
        </div>
    );
}
export {Search};