import Container from "react-bootstrap/Container";
import Product from "./components/Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const products = [
  {
    id: 1,
    title: "Moln",
    description: "Fint moln",
    rating: 4,
    price: 200,
    imageUrl:
      "https://www.vadvivet.se/content/images/2021/07/c-dustin-K-Iog-Bqf8E-unsplash.jpeg",
  },
  {
    id: 2,
    title: "Moln",
    description: "Fint moln",
    rating: 3,
    price: 250,
    imageUrl:
      "https://www.vadvivet.se/content/images/2021/07/c-dustin-K-Iog-Bqf8E-unsplash.jpeg",
  },
  {
    id: 3,
    title: "Moln",
    description: "Fint moln",
    rating: 2,
    price: 200,
    imageUrl:
      "https://www.vadvivet.se/content/images/2021/07/c-dustin-K-Iog-Bqf8E-unsplash.jpeg",
  },
  {
    id: 4,
    title: "Moln",
    description: "Fint moln",
    rating: 5,
    price: 200,
    imageUrl:
      "https://www.vadvivet.se/content/images/2021/07/c-dustin-K-Iog-Bqf8E-unsplash.jpeg",
  },
];

function Products() {
  return (
    <>
      <h2>Produkter</h2>
      <Container>
        <Row>
          {products &&
            products.map((product) => {
              return (
                <Col>
                  <Product product={product}></Product>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default Products;
