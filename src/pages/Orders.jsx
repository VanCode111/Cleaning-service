import React from "react";
import { getBasket } from "../http/basketApi";
import { useSelector } from "react-redux";
import deleteImg from "../assets/img/delete.svg";
import { deleteFromBasket } from "../http/basketApi";

function Orders() {
  const { user } = useSelector(({ userStore }) => userStore);
  console.log(user);
  const [orders, setOrders] = React.useState([]);

  const deleteOrder = (orderId) => {
    console.log(orderId);
    setOrders(
      orders.filter(({ id }) => {
        return id != orderId;
      })
    );
    deleteFromBasket(user.id, orderId).then((orders) => {
      console.log(orders.filter((order) => order.id != orderId));
    });
  };
  React.useEffect(() => {
    getBasket(user.id)
      .then((orders) => {
        setOrders(orders.orders);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(orders);
  return (
    <div className="orders">
      <div className="container">
        <div className="orders__content">
          <h2 className="orders__title">Мои уборки</h2>
          <div className="orders__wrapper">
            {orders &&
              orders.map((order, index) => {
                return (
                  <div key={index} className="orders__card">
                    <p className="orders__price">{order.resultPrice}₽</p>
                    <img
                      onClick={() => deleteOrder(order.id)}
                      className="orders__button"
                      src={deleteImg}
                      alt="delete"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
