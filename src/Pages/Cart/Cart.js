import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/index";

function Cart(props) {
  console.log("데이터 체크", props);
  const { cartItems, removeFromCart } = props;
  return (
    <div>
      {cartItems.length === 0 ? (
        "장바구니가 비었습니다."
      ) : (
        <div> you have {cartItems.length} product in the basket</div>
      )}

      <table>
          <thead>
          <tr>
          <td>checkbox</td>
          <td>상품 정보</td>
          <td>수량</td>
          <td>주문금액</td>
          </tr>
          </thead>
        {cartItems.map((item) => {
          return (
            <tr key={item.id}>
              <tbody>
              <td>뭐</td>
              <td>
                <div>{item.title}</div>
                <img
                  style={{ width: '50px;', height: '30px;' }}
                  src={item.coverImage}
                ></img>
                <button
                  onClick={() => {
                    removeFromCart(cartItems, item);
                  }}
                >
                  X
                </button>
              </td>
              <td>{item.count}</td>
              <td>{item.price * item.count}</td>
              </tbody>
            </tr>
          );
        })}
      </table>
      <div>
        Total :
        {cartItems.reduce((acc, item) => acc + item.price * item.count, 0)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems : state.cart.items
})


export default connect( mapStateToProps, { removeFromCart })(Cart);
