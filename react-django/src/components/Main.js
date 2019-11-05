import React from 'react';
import { Container} from 'react-bootstrap';

import MyNavBar from './TestNavBar.js';
import ImgLinks from './ImgLinks.js';

// main brings in all components together
function Main() {
  let helper = main_helper();
  return (
    <Container>
      {helper}
    </Container>
  );
}

function main_helper() {
  let my_classes = [MyNavBar(), ImgLinks()]
  let result = [];
  result.push(my_classes[0]); // push first element without horizontal line
  var i = 0;
  for(i = 1; i < my_classes.length; i++){
    result.push(my_classes[i]);
    result.push(<hr />);
  }
  return result;
}

export default Main;
