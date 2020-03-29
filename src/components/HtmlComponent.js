import React from 'react';
import { Accordion, Card } from 'react-bootstrap';


const HtmlComponent = (props) => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} className="font-weight-bold mb-0" style={{fontFamily: 'Roboto, Helvetica, sans-serif'}} eventKey="1">HTML</Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="bg-light"><pre>{props.mark}</pre></Card.Body>
              </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default HtmlComponent;