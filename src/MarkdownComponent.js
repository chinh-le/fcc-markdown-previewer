import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';

import './custom.scss';
 

const MarkdownComponent = () => {
    return(
        <Container fluid>
            <Row><h1>Markdown Previewer</h1></Row>
            <Row>
                <Col sm={12} md={6}>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>Editor</Card.Header>
                            <Card.Body>
                                <textarea></textarea>
                            </Card.Body>
                        </Card>
                    </Accordion>
                </Col>
                <Col sm={12} md={6}>
                    <Accordion defaultActiveKey="0">
                        <Card.Header>Previewer</Card.Header>
                        <Card.Body>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default MarkdownComponent;