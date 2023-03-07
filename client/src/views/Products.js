import Container from "react-bootstrap/Container";
import Product from "./components/Product";
import Row from "react-bootstrap/Row";

function Products() {
    return (
        <>
            <h2>Produkter</h2>
            <Container>
                <Row>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </Row>    
            </Container>
            
        </>
        
     );
}

export default Products;