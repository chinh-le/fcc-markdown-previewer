import React, { useState } from 'react';
import {
  Container, Row, Col, Accordion, Card,
} from 'react-bootstrap';
import MarkdownIt from 'markdown-it';
import ReactHtmlParser from 'react-html-parser';

import './custom.scss';

const MarkdownComponent = () => {
  const [mark, setMark] = useState('');

  const md = new MarkdownIt();

  const changeHandler = (evt) => {
    setMark(evt.target.value);
  };

  return (
    <Container fluid>
      <h1>Markdown Previewer</h1>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>Editor</Card.Header>
              <Card.Body>
                <textarea onChange={changeHandler} />
              </Card.Body>
            </Card>
          </Accordion>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>Preview</Card.Header>
              <Card.Body>
                {ReactHtmlParser(md.render(mark))}
              </Card.Body>
            </Card>
          </Accordion>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>HTML</Card.Header>
              <Card.Body>
                {md.render(mark)}
              </Card.Body>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default MarkdownComponent;
