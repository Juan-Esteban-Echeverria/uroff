import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import llamada from './api'


llamada()


function Ficha() {
  return (
    <div>
      <Card.Title id='titulo' className='fw-bold'></Card.Title>
      <Card.Text id='universo'></Card.Text>
      <Card.Img id='imagen' variant="top" src="" className='luchador'/>
      <Button variant="light" className='fw-bold'>Ver Ficha</Button>
    </div>
  )
}


function Carta() {
  return (
    <Col  id='contenido'>
    <Card style={{ width: '18rem' }} className=' mb-5'>

      <Card.Body className='body-carta border border-white border-3 text-light text-center rounded'>

      <Ficha/>

      </Card.Body>
    </Card>
    </Col>
  );
}







export default Carta;