import React, { useState, useEffect, useRef } from "react";
import s from "./my.module.css";
import "./my.css";
import { Link } from "react-router-dom";

function My() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [daysInMonth, setDaysInMonth] = useState(30);
  const [monthName, setMonthName] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    // Устанавливаем текущий месяц в selectedMonth
    const currentDate = new Date();
    const currentMonth = (currentDate.getMonth() + 1).toString();
    setSelectedMonth(currentMonth);

    // Запускаем функцию для обновления дней в месяце и других данных
    monthFunction(currentMonth.toString());

    // Устанавливаем фокус и прокручиваем к текущему дню после загрузки компонента
  }, []);

  const monthFunction = (month) => {
    let days = 30;
    let monthData = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    setMonthName(monthData[selectedMonth - 1]);

    // Преобразуйте selectedMonth в число для корректных сравнений
    const monthNumber = parseInt(month, 10);

    if (
      monthNumber === 1 ||
      monthNumber === 3 ||
      monthNumber === 5 ||
      monthNumber === 7 ||
      monthNumber === 8 ||
      monthNumber === 10 ||
      monthNumber === 12
    ) {
      days = 31;
    } else if (monthNumber === 2) {
      days = 29;
    }
    setDaysInMonth(days);
    if (month) {
      setMonthName(monthData[monthNumber - 1]);
    }
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    // alert(`Вы выбрали ${day}-е число`);
  };

  const getDayOfWeek = (date) => {
    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return daysOfWeek[date.getDay()];
  };

  const renderDays = () => {
    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );

    const firstDayOfMonth = new Date();
    firstDayOfMonth.setMonth(parseInt(selectedMonth, 10) - 1);
    // firstDayOfMonth.setMonth(selectedMonth - 1);
    firstDayOfMonth.setDate(1);
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const emptyCells = Array.from({ length: firstDayOfWeek }, (_, index) => (
      <div key={`empty-${index}`} className={s.emptyCell}></div>
    ));

    const daysCells = daysArray.map((day) => {
      const currentDate = new Date();
      currentDate.setMonth(selectedMonth - 1);
      currentDate.setDate(day);

      const isSelected = day === selectedDay;
      const isCurrentDay = day === new Date().getDate();
      const isCurrentWeekday = getDayOfWeek(currentDate) === "сб";
      let wotDay = getDayOfWeek(currentDate);
      return (
        <Link
          to={
            getDayOfWeek(currentDate) === "пн"
              ? "/hend"
              : "" || getDayOfWeek(currentDate) === "ср"
              ? "/back"
              : "" || getDayOfWeek(currentDate) === "пт"
              ? "/legs"
              : ""
          }
          key={day}
          onClick={() => handleDayClick(day)}
          className={`currentDay ${s.monthItem} ${
            isSelected ? s.selectedDay : ""
          } ${isCurrentDay ? s.currentDay : ""} ${
            isCurrentWeekday ? s.currentWeekday : ""
          }
          
        ${wotDay === "пн" ? s.heandImg : ""}
        ${wotDay === "ср" ? s.backImg : ""}
        ${wotDay === "пт" ? s.legsImg : ""}
        
        `}
        >
          <div className={s.day}>{day}</div>
          <div>{selectedMonth}</div>
          <div className={s.currentData}>{getDayOfWeek(currentDate)}</div>

          <div className={s.wotWork}>
            {getDayOfWeek(currentDate) === "пн" ? "Руки и грудь" : ""}
            {getDayOfWeek(currentDate) === "ср" ? "Спина" : ""}
            {getDayOfWeek(currentDate) === "пт" ? "Ноги" : ""}
          </div>
        </Link>
      );
    });

    return [...emptyCells, ...daysCells];
  };

  return (
    <main className={s.main}>
      {selectedMonth && (
        <>
          {monthName && <p>Месяц: {monthName}</p>}
          <p>
            Количество дней в {monthName}: {daysInMonth}
          </p>

          <div className={s.daysContainer}>{renderDays()}</div>
        </>
      )}
    </main>
  );
}

export default My;
