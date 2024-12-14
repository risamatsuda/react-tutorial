import {useState} from 'react';

const Order = () => {
  const orderObj = {item: 'apple', count: 10};
  const [order, setOrder] = useState(orderObj);

  const changeItem = (e) => {
    setOrder(order => ({...order, item: e.target.value}));


  const countUp = () => {
    setOrder(order => ({...order, count: order.count + 1}));
    // setOrder({...order, count: order.count + 1});
  }

  const countDown = () => {
    setOrder(order => ({...order, count: order.count - 1}));
  }

  return (
    <div>
      <p>{order.item}の数: {order.count}</p>
      <input type="text" value={order.item} onChange={changeItem}/>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
  };
};

export default Order;