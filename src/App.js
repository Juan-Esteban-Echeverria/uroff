
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Busqueda from './components/busqueda';
import Carta from './components/cartas'



function App() {
  return (
    <div className="App">

<Container>
  <Row>

    <Col className='text-center mt-5'>
      <Busqueda/>
    </Col>


    <Col> 
      <img src={require('./img/topping.png')} className='topping' alt='topping'/>
      <img src={require('./img/logo.png')} className='logo' alt='logo'/>
    </Col>

    <Col className='text-center mt-5'>
      <button className='botonR'>
          
      </button> 
          <p className='text-light'>Filtrar universos</p>
    </Col>

  </Row>


      <h1 className='text-center text-light'>Prueba del Dragón</h1>


  <Row>
        <Carta/>
  </Row>

</Container>


    </div>
  );
}



export default App;
