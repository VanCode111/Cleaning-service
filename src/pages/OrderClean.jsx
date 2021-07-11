import React from "react";
import ResultCard from "../components/OrderCLeaning/ResultCard";
import orderRoutes from "../orderRoutes";
import { useHistory } from "react-router-dom";
import { getServices } from "../http/serviceApi";
import { getRooms } from "../http/roomsApi";
import setServices from "../redux/actionCreators/setServices";
import setRooms from "../redux/actionCreators/setRooms";
import { useDispatch, useSelector } from "react-redux";
import Rooms from "../components/OrderCLeaning/Rooms";
import Services from "../components/OrderCLeaning/Services";
import { addToBasket } from "../http/basketApi";

function OrderClean() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [order, setOrder] = React.useState({});
  const [servicesOrder, setServicesOrder] = React.useState({});
  const [roomsOrder, setRoomsOrder] = React.useState({});
  const [resultPrice, setResultPrice] = React.useState(0);
  const history = useHistory();
  const { user } = useSelector(({ userStore }) => userStore);
  const dispatch = useDispatch();

  const addService = (price, id) => {
    setResultPrice(resultPrice + price);
    setServicesOrder({
      ...servicesOrder,
      [id]: servicesOrder[id] ? servicesOrder[id] + 1 : 1,
    });
  };
  const removeService = (price, id) => {
    if (servicesOrder[id] === 0) {
      return;
    }
    setResultPrice(resultPrice - price);
    setServicesOrder({
      ...servicesOrder,
      [id]: servicesOrder[id] - 1,
    });
  };

  const addRoom = (id) => {
    setResultPrice(resultPrice + 100);
    setRoomsOrder({
      ...roomsOrder,
      [id]: roomsOrder[id] ? roomsOrder[id] + 1 : 1,
    });
  };
  const removeRoom = (id) => {
    if (roomsOrder[id] === 0) {
      return;
    }
    setResultPrice(resultPrice - 100);
    setRoomsOrder({
      ...roomsOrder,
      [id]: roomsOrder[id] - 1,
    });
  };

  React.useEffect(() => {
    getServices()
      .then((data) => {
        console.log(data);
        dispatch(setServices(data));
      })
      .catch((e) => {
        console.log(e);
      });
    getRooms()
      .then((data) => {
        console.log(data);
        dispatch(setRooms(data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const nextStep = async () => {
    if (currentPage === orderRoutes.length) {
      try {
        console.log(user);
        const res = await addToBasket(
          user.id,
          servicesOrder,
          roomsOrder,
          resultPrice
        );
        console.log(res);
      } catch (e) {
        console.log(e);
      }

      history.push("/orders");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="order-clean">
      <div className="container">
        <div className="order-clean__wrapper">
          <h2 className="order-clean__title">Заказать уборку</h2>
          <div className="order-clean__content">
            <div className="order-clean__left">
              {currentPage === 1 && (
                <Rooms
                  addRoom={addRoom}
                  removeRoom={removeRoom}
                  roomsOrder={roomsOrder}
                />
              )}
              {currentPage === 2 && (
                <Services
                  servicesOrder={servicesOrder}
                  addService={addService}
                  removeService={removeService}
                />
              )}
            </div>

            <ResultCard
              resultPrice={resultPrice}
              next={nextStep}
              text={
                currentPage === orderRoutes.length ? "Оформить заказ" : "Далее"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderClean;
