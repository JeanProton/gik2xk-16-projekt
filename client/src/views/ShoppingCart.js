import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { CartContext } from "../App";

function ShoppingCart() {
  // eslint-disable-next-line
  const { cart, setCart } = useContext(CartContext);

  let totalPrice = 0;

  return (
    <>
      <h2>Kundvagn</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Produkt</th>
            <th>Pris</th>
            <th>Antal</th>
            <th>Sammanlagt pris</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.length > 0 ? (
            cart.map((product, i) => {
              totalPrice += product.price;
              return (
                <>
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{product.title}</td>
                    <td>{product.price} kr</td>
                    <td>####</td>
                    <td>{product.price} kr</td>
                  </tr>
                </>
              );
            })
          ) : (
            <></>
          )}
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td>{totalPrice} kr</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ShoppingCart;
