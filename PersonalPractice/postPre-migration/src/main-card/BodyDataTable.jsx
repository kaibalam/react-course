import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { RowDataClient } from "./RowDataClient"

export const BodyDataTable = () => {
    return (
        <div className="d-flex justify-align-content-center center-my-items">
            <br />
            <Container >
                <div className="alert alert-dark text-center">
                    Datos Cliente
                </div>
                <RowDataClient />
            </Container>
        </div>
    )
}
