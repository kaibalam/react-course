import { Col, Form, Row } from "react-bootstrap"

export const RowDataClient = () => {
    return (
        <>
            <Row>
                <Col>
                    <Form.Text>
                        <strong>Nombre:</strong>
                    </Form.Text>
                </Col>
                <Col >
                    <Form.Text>Nombre</Form.Text>
                </Col>
                <Col >
                    <Form.Text>
                        <strong>Fecha renovación:</strong>
                    </Form.Text>
                </Col>
                <Col >
                    <Form.Text>Fecha</Form.Text>
                </Col>
            </Row>
        </>

    )
}
