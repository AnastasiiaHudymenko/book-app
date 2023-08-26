import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { BsCalendar4 } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import BtnAdd from "../BtnAdd/BtnAdd";
import { postPlanningBook } from "../../redux/planningApi/operations";
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

const Calendar = () => {
  const [openStartCalendar, setOpenStartCalendar] = useState(false);
  const [openEndCalendar, setOpenEndCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectBook, setSelectBook] = useState(null);
  const [selectIdBook, setSelectIdBook] = useState(null);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.userBook?.books?.goingToRead);

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

  const handleSubmit = async () => {
    if (!startDate) {
      toast.error("Вкажітть дату початку!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }
    if (!endDate) {
      toast.error("Вкажітть дату завершення!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }
    if (!selectBook) {
      toast.error("Оберіть книгу!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }
    try {
      await dispatch(
        postPlanningBook({
          startDate: startDate,
          endDate: endDate,
          books: [selectIdBook],
        })
      );
    } catch (error) {
      console.log(error);
    }
    setStartDate("Початок");
    setEndDate("Завершення");
    setSelectBook("Обрати книгу з біббліотеки");
  };
  return (
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
          {!selectBook ? "Обрати книгу з біббліотеки" : selectBook}
        </TitleSelect>
        <BiSolidDownArrow />
        {openSelect && !selectBook && (
          <ListSelect>
            {books?.map((book) => (
              <ItemSelect onClick={() => handleClickBook(book)} key={book._id}>
                <TitleList>{book.title}</TitleList>
              </ItemSelect>
            ))}
          </ListSelect>
        )}
      </WrapSelect>

      <BtnAdd openForm={handleSubmit} type={"submit"} />
    </ContainerMainForm>
  );
};

export default Calendar;
