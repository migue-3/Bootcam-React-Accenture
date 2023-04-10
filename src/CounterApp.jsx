import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({title, value}) => {  

  const [ counter, setCounter ] = useState ( value );

  const handleAdd = () => {
    //console.log(event)
    setCounter( counter + 1 );
    //setCounter((c) => c + 1);
  }
  const handleResta = () => setCounter( counter - 1 );

  const handleReset = () => setCounter( value );

  return (
    <>
     <h1>{title}</h1>
     <h2>{counter} </h2>
     <button onClick={ handleAdd }> +1 </button>
     <button onClick={ handleResta }> -1 </button>
     <button onClick={ handleReset }> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}
