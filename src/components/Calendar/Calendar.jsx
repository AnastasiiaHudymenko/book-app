import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { BsCalendar4 } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { Formik, Form } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import {
  WrapCalendarInput,
  TitleInputCalendar,
  WrapContent,
  ContainerMainForm,
  WrapCalendarPosition,
  WrapSelect,
  TitleSelect,
  ListSelect,
  TitleList,
  ItemSelect,
} from "./Calendar.styled";
import { useSelector } from "react-redux";

const Calendar = () => {
  const [openStartCalendar, setOpenStartCalendar] = useState(false);
  const [openEndCalendar, setOpenEndCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectBook, setSelectBook] = useState(null);
  const [selectIdBook, setSelectIdBook] = useState(null);
  const books = useSelector((state) => state.userBook?.books?.goingToRead);

  console.log(books);

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

  const handleClickSelect = () => {
    if (selectBook) {
      setSelectBook(null);
    }
    setOpenSelect(true);
  };

  const handleClickBook = (book) => {
    setSelectBook(book.title);
    setSelectIdBook(book._id);
  };
  return (
    <Formik>
      <ContainerMainForm>
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
                minDate={new Date()}
              />
            </WrapCalendarPosition>
          )}
        </WrapCalendarInput>
        <WrapSelect onClick={handleClickSelect}>
          <TitleSelect>
            {!selectBook ? " Обрати книгу з біббліотеки" : selectBook}
          </TitleSelect>
          <BiSolidDownArrow />
          {openSelect && !selectBook && (
            <ListSelect>
              {books?.map((book) => (
                <ItemSelect
                  onClick={() => handleClickBook(book)}
                  key={book._id}
                >
                  <TitleList>{book.title}</TitleList>
                </ItemSelect>
              ))}
            </ListSelect>
          )}
        </WrapSelect>
      </ContainerMainForm>
    </Formik>
  );
};

export default Calendar;
