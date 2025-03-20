import "./App.css";

const App = () => {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth() + 1;

  const text = import.meta.env.VITE_TEXT;

  if (day === 23 && month === 3) {
    return (
      <div>
        <div>С днем рождения!</div>
        <div>
          <button>Получить пожелание на день</button>
          <button>Прочитать поздравление</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>Настеньчик, доброго дня!</div>
      <div>{text}</div>
      <button>Получить пожелание на день</button>
    </div>
  );
};

export default App;
