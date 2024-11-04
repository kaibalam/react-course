import React from 'react'
import { Card } from 'react-bootstrap'
import { FormFind } from '../forms/FormFind'

export const CardMain = () => {
    return (
        <div className='justify-content-center'>
            <div className='col col-lg-12'>
                <div className='d-flex justify-content-center center-my-items'>
                    <Card className='sombra'>
                        <div className='text-center'>
                            <Card.Header>Control planes familia</Card.Header>
                        </div>
                        <div className='card-container'>
                            <div className='card-body '>
                                <Card.Body className='mr-2 ml-2'>
                                    <FormFind />
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
        </div>

    )
}
