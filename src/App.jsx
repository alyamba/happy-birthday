import React from "react";
import "./App.css";
import { WISHES } from "./constants";
import Fireworks from "@fireworks-js/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import nastya from "../public/nastya.PNG";

const MySwal = withReactContent(Swal);

const App = () => {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth() + 1;

  const text = import.meta.env.VITE_TEXT;

  const wishIndex = Math.floor(Math.random() * WISHES.length);
  const wish = WISHES[wishIndex];

  const handleClickWish = () => {
    MySwal.fire({
      title: "Пожелание",
      text: `${wish}`,
      showConfirmButton: false,
    });
  };

  const handleClicCongratulation = () => {
    MySwal.fire({
      title: "С днем рождения!!!",
      text: `${text}`,
      showConfirmButton: true,
      imageUrl: `${nastya}`,
      imageWidth: 40,
      imageAlt: "nastya",
      confirmButtonText: 'Спасибо 😊'
    });
  };

  if (day === 23 && month === 3) {
    return (
      <div className="happy-birthday-container">
        <div className="fireworks-container">
          <Fireworks />
        </div>
        <h2>С днем рождения, Настюшка!</h2>
        <div className="btns-container">
          <button onClick={handleClickWish}>Получить пожелание на день</button>
          <button onClick={handleClicCongratulation}>
            Прочитать поздравление
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <h2>Настеньчик, доброго дня!</h2>
      <button onClick={handleClickWish}>Получить пожелание на день</button>
    </div>
  );
};

export default App;
