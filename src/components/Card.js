import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://media3.giphy.com/media/EVj2CXe1UZc31jxmeR/giphy.webp" />
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go votesomewhere</Button>
          </Card.Body>
      </Card> </>
  );
}

export default BasicExample;