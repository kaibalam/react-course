import React from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'
import { useAxios } from '../../hooks/useAxios';

export const FormFind = ({ onNewTodo }) => {
  const { formState, onInputChange, onResetForm, prefix, msisdn } = useForm({
    prefix: '502',
    msisdn: '',
  });

  const { data, hasError, isLoading } = useAxios(`/all`);

  console.log(data, hasError, isLoading );
  const onFormSubmit = (event) => {
    event.preventDefault();
    if( msisdn.length <= 1) return;

    const newTodo = {
      prefix: '502',
      msisdn: msisdn,
    }

  }

  console.log(formState);
  return (
    <>
      
          <InputGroup className='mb-3'>
            <InputGroup.Text
              value={ prefix }
              name='prefix'
              onChange={ onInputChange }
            >+502</InputGroup.Text>
            <Form.Control
              placeholder='numero'
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              className='form-control'
              name='msisdn'
              value={ msisdn }
              onChange={ onInputChange }
            />
            <Button 
            variant='primary'
            onClick={ onFormSubmit }
            >
              Aceptar
            </Button >
            <Button variant='secondary'
              onClick={ onResetForm }
            >
              Cerrar
            </Button>
          </InputGroup>
    </>
  )
}
