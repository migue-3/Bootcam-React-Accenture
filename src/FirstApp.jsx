import PropTypes from 'prop-types';

//const newMessage= 'Miguel!!!';
//const newMessage= true;
//const newMessage= 23 + 2;
//const newMessage= [1,2,3,4,5,6,7,8,9]
//const newMessage= 23 + 2;
//const newMessage = {
//    message: 'Hola mundo',
//    title: 'Miguel',
//}

const getResult = () => {
    return 4 * 4;
}

export const FirstApp = ({title, subTitle, name}) => {  //Pasando los valores title y subtitle a traves de los props.

    //console.log(props)
  return (
    <>
     <h1 data-testid="test-title"> {title} </h1>
     {/*<h1>Miguel!!</h1>*/} 
     {/*<h1>{getResult()}</h1>*/}
     {/*<code>{ JSON.stringify (newMessage) ---->> instruccion para mostrar un objeto con jsx }</code>*/} 
    {/*<p>Soy un Subtítulo. </p> */}
    <p>{subTitle} </p>
    <p>{name} </p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps={
    //title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Miguel escalante'
}
