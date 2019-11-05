import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MyNavBar from './TestNavBar.js';
import ImgLinks from './ImgLinks.js';

// main brings in all components together
function Main() {
  let id = "img-links";
  let helper = main_helper();
  return (
    <Container>
      {helper}
    </Container>
  );
}

function main_helper() {
  let result = [];
  result.push(MyNavBar());
  result.push(ImgLinks());
  result.push(<hr />);
  return result;
}

export default Main;
