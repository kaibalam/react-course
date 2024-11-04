import { Card, InputGroup, Row } from "react-bootstrap"
import { InputCard } from "../main-card/InputCard"
import { BodyDataTable } from "../main-card/BodyDataTable"
import { AlertMessage } from "../common-comps/AlertMessage"

export const MainCard = () => {
  
  return (
    <>
      <div className="d-flex justify-content-center center-my-items">
        <Card className="cardSize">
          <Card.Header>
            <div className="d-flex justify-content-center ">Migrar DN a prepago</div>
          </Card.Header>
          <Card.Body className="justify-content-center center-my-items">
            <div >
              <InputCard />
            </div>
            <div>
              <BodyDataTable />
            </div>

          </Card.Body>
        </Card>
      </div>
    </>
  )
}
