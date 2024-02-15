import {useState, useEffect } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"


const FetchComponent = () => {

    const [spaceflight, setSpaceflight] = useState([])

    const fetchSpaceflight = async() => {
        try {
          const response = await  fetch("https://api.spaceflightnewsapi.net/v4/articles" )
          if(response.ok) {
            const arrayOfSpaceglight = await response.json()
            console.log(arrayOfSpaceglight)
            setSpaceflight(arrayOfSpaceglight)
          } else {
            throw new Error ("errore nel recupero fetch")
          }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSpaceflight()

    },[])



    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="text-center">
                <h2>Voli nello spazio dsponibili:</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                { spaceflight.map((spaceflight) => (
                <Col xs={12} md={4} className="text-center">
                     <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
                </Col>

                    ))
                }
            </Row>

        </Container>
    )
}

export default FetchComponent