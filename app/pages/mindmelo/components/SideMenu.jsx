import React, { useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  AiFillHome,
  AiFillGithub,
  AiFillClockCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
const SideMenu = (props) => {
  const {
    setAboutModal,
    setTodoModalActive,
    todoModalActive,
    aboutModal,
    modalActive,
    setModalActive,
    focusActive,
    setFocusActive,
  } = props;

  return (
    <div className="MindMeloWebapp-sidemenu">
      {/* pomodoro-btn */}
      <button
        alt="pomodoro-btn"
        className={focusActive ? "sidemenu-btn btn active" : "sidemenu-btn btn"}
        onClick={() => {
          setFocusActive(!focusActive);
        }}
      >
        <span className="sidemenu-btn-name">Pomodoro</span>
        <AiFillClockCircle className="sidemenu-btn-icon" />
        <span className="sidemenu-btn-name-mobile">Pomodoro</span>
      </button>
      {/* Todo-btn */}
      <button
        alt="todo-btn"
        className={
          todoModalActive ? "sidemenu-btn btn active" : "sidemenu-btn btn"
        }
        onClick={() => {
          setTodoModalActive(!todoModalActive);
          setAboutModal(false);
          setModalActive(false);
        }}
      >
        <span className="sidemenu-btn-name">ToDo</span>
        <BsListCheck className="sidemenu-btn-icon" />
        <span className="sidemenu-btn-name-mobile">Todo</span>
      </button>
      
      
      {/* tally form widget */}
      <Script async src="https://tally.so/widgets/embed.js"></Script>
    </div>
  );
};

export default SideMenu;
