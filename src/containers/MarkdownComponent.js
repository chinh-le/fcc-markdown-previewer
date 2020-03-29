import React, { useState } from 'react';
import {
  Container, Row, Col, Accordion, Card,
} from 'react-bootstrap';
import MarkdownIt from 'markdown-it';
import GoogleFontLoader from 'react-google-font-loader';

import PreviewComponent from '../components/PreviewComponent';
import HtmlComponent from '../components/HtmlComponent';

// import 'bootstrap/dist/css/bootstrap.min.css'; // not required if using Sass
import './MarkdownComponent.scss';

import { MD } from '../const';

const MarkdownComponent = () => {
  const initialMds = MD.join('\n');
  const [mark, setMark] = useState(initialMds);

  const mdi = new MarkdownIt();

  const changeHandler = (evt) => {
    setMark(evt.target.value);
  };

  return (
    <Container fluid>
      <GoogleFontLoader fonts={[
        {
          font: 'Roboto',
          weights: [ 400, '400i']
        }
      ]} />
      <h1 className="text-center py-4" style={{fontFamily: 'Roboto, Helvetica, sans-serif'}}>Markdown Previewer</h1>
      <Row>
        <Col sm={12} md={6} className="mb-4">
          <Accordion className="mb-4" defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} className="font-weight-bold mb-0" style={{fontFamily: 'Roboto, Helvetica, sans-serif'}} eventKey="0">Editor</Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <textarea onChange={changeHandler} value={mark} className="w-100 border-0" rows="10" placeholder="Mark it Down!" id="editor" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <HtmlComponent mark={mdi.render(mark)} />
        </Col>
        <Col sm={12} md={6} className="mb-4">
          <PreviewComponent mark={mdi.render(mark)} />
        </Col>
      </Row>
    </Container>
  );
};

export default MarkdownComponent;
