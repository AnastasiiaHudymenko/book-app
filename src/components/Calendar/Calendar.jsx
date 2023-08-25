import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { BsCalendar4 } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import {
  WrapCalendarInput,
  TitleInputCalendar,
  WrapContent,
  ContainerMain,
  WrapCalendarPosition,
} from "./Calendar.styled";

const Calendar = () => {
  const [openStartCalendar, setOpenStartCalendar] = useState(false);
  const [openEndCalendar, setOpenEndCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClickStart = () => {
    if (startDate) {
      setStartDate(null);
    }
    setOpenStartCalendar(true);
  };

  const handleClickEnd = () => {
    if (endDate) {
      setEndDate(null);
    }

    setOpenEndCalendar(true);
  };
  return (
    <ContainerMain>
      <WrapCalendarInput onClick={handleClickStart}>
        <WrapContent>
          <BsCalendar4 size={20} fill="#a6abb9" />
          <TitleInputCalendar>
            {!startDate ? "Початок" : startDate}
          </TitleInputCalendar>
        </WrapContent>

        <BiSolidDownArrow />
        {openStartCalendar && !startDate && (
          <WrapCalendarPosition>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(format(new Date(date), "yyyy-MM-dd"));
              }}
              inline
              minDate={new Date()}
            />
          </WrapCalendarPosition>
        )}
      </WrapCalendarInput>

      <WrapCalendarInput onClick={handleClickEnd}>
        <WrapContent>
          <BsCalendar4 size={20} fill="#a6abb9" />
          <TitleInputCalendar>
            {!endDate ? "Завершення" : endDate}
          </TitleInputCalendar>
        </WrapContent>

        <BiSolidDownArrow />
        {openEndCalendar && !endDate && (
          <WrapCalendarPosition>
            <DatePicker
              selected={endDate}
              onChange={(date) =>
                setEndDate(format(new Date(date), "yyyy-MM-dd"))
              }
              inline
            />
          </WrapCalendarPosition>
        )}
      </WrapCalendarInput>
    </ContainerMain>
  );
};

export default Calendar;
