import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsStar, BsStarFill} from 'react-icons/bs';

const title = "Cumulonimbus";
const description = "Detta vackra moln kan bli ditt för endast 299:-"
const rating = 3;

function Product() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.vadvivet.se/content/images/2021/07/c-dustin-K-Iog-Bqf8E-unsplash.jpeg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {getRating()}
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Detaljer</Button>
        <Button variant="success">Lägg till i kundvagn</Button>
      </Card.Body>
    </Card>
  );
}

function getRating() {
    let stars = [];
    for(let i = 1; i <= 5; i++) {
        if(rating >= i) {
            stars.push(<BsStarFill />);
        }
        else {
            stars.push(<BsStar />);
        }
    }

    return stars;
}

export default Product;