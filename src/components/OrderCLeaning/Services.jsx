import React from "react";
import CardService from "./CardService";
import { useSelector } from "react-redux";

function Services({ addService, servicesOrder, removeService }) {
  const { services } = useSelector(({ cleaning }) => cleaning);
  console.log(servicesOrder);
  return (
    <div className="services">
      {services.map(({ name, img, price, id }) => {
        return (
          <CardService
            amout={servicesOrder[id] ? servicesOrder[id] : 0}
            addService={addService}
            removeService={removeService}
            name={name}
            id={id}
            price={price}
            img={img}
          />
        );
      })}
    </div>
  );
}

export default Services;
