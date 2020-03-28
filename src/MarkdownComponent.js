import React, { useState } from 'react';
import {
  Container, Row, Col, Accordion, Card,
} from 'react-bootstrap';
import MarkdownIt from 'markdown-it';
import ReactHtmlParser from 'react-html-parser';

// import 'bootstrap/dist/css/bootstrap.min.css'; // not required if using Sass
import './MarkdownComponent.scss';

import { MD } from './CONST';

const MarkdownComponent = () => {
  const initialMds = MD.join('\n');
  const [mark, setMark] = useState(initialMds);

  const mdi = new MarkdownIt();

  const changeHandler = (evt) => {
    setMark(evt.target.value);
  };

  return (
    <Container fluid>
      <h1>Markdown Previewer</h1>
      <Row>
        <Col sm={12} md={6} className="mb-4">
          <Accordion className="mb-4" defaultActiveKey="0">
            <Card>
              <Card.Header>Editor</Card.Header>
              <Card.Body>
                <textarea onChange={changeHandler} className="w-100 border-0" rows="10" placeholder="Mark it Down!" id="editor" />
              </Card.Body>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>HTML</Card.Header>
              <Card.Body>
                {mdi.render(mark)}
              </Card.Body>
            </Card>
          </Accordion>
        </Col>
        <Col sm={12} md={6} className="mb-4">
          <Accordion defaultActiveKey="0">
            <Card id="preview">
              <Card.Header>Preview</Card.Header>
              <Card.Body>
                {ReactHtmlParser(mdi.render(mark))}
              </Card.Body>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default MarkdownComponent;
