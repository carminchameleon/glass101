import React from "react";

function Cart(props) {
  console.log('데이터 체크', props)
  const {cartItems, removeFromCart} = props;
  return <div>
    {cartItems.length === 0 ? "장바구니가 비었습니다." : <div> you have {cartItems.length} product in the basket</div> }

     <table>
        <tr>
          <th>checkbox</th>
          <th>상품 정보</th>
          <th>수량</th>
          <th>주문금액</th>
          </tr>
          {cartItems.map((item)=>{
            return (
              <tr key={item.id}>
          <td>뭐</td>
          <td>
          <div>{item.title}</div>
          <img style={{width: "50px;", height: '30px;'}}src={item.coverImage}></img>
          <button onClick={()=>{removeFromCart(item)}}>X</button>
          </td>
            <td>{item.count}</td>
            <td>{item.price * item.count }</td>
          </tr>
            )
          })}
          
     </table>
        <div>Total : {cartItems.reduce((acc,item) => acc + item.price * item.count, 0 )}</div>
  </div>;
}

export default Cart;
