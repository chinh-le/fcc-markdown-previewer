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
      <h1 className="text-center py-4">Markdown Previewer</h1>
      <Row>
        <Col sm={12} md={6} className="mb-4">
          <Accordion className="mb-4" defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} className="font-weight-bold mb-0" eventKey="0">Editor</Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <textarea onChange={changeHandler} value={mark} className="w-100 border-0" rows="10" placeholder="Mark it Down!" id="editor" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} className="font-weight-bold mb-0" eventKey="1">HTML</Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="bg-light"><pre>{mdi.render(mark)}</pre></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col sm={12} md={6} className="mb-4">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} className="font-weight-bold mb-0" eventKey="0">Preview</Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="bg-light" id="preview">{ReactHtmlParser(mdi.render(mark))}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default MarkdownComponent;
