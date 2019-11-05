// Displays URLS with backgrounds
import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import shop_button from '../assets/08 Web/2019-02-25 Website Buttons-shop.jpg';
import ttatf_button from '../assets/08 Web/2019-02-25 Website Buttons-TTATF-3.jpg';
import patreon_button from '../assets/08 Web/2019-02-25 Website Buttons-Patreon.jpg';

function ImgLinks() {
  let id = "img-links";
  let helper = img_links_helper();
  return (
    <div id={id}>
      {helper}
    </div>
  );
}

// TODO: Dynamically reference all texts
function img_links_helper() {
  return (
    <CardGroup>
      <Card style={{margin: '0.5rem'}}>
        <Card.Link href="/projects">
          <Card.Img src={ttatf_button} alt="projects image" />
        </Card.Link>
      </Card>
      <Card style={{margin: '0.5rem'}}>
        <Card.Link href="/shop">
          <Card.Img src={shop_button} alt="shop image" />
        </Card.Link>
      </Card>
      <Card style={{margin: '0.5rem'}}>
        <Card.Link href="/patreon">
          <Card.Img src={patreon_button} alt="patreon image" />
        </Card.Link>
      </Card>
    </CardGroup>
  );
}
export default ImgLinks;