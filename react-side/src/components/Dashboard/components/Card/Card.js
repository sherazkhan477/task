import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { id, title, date, tasks, labels } = props.card;

  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (!date) return "";

    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    return day + " " + month;
  };

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )}
      <div
        className="p-2 flex flex-col gap-2 bg-white rounded-xl"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-start">
          <div className="flex-3 flex flex-wrap gap-1 text-sm leading-5">
            {labels?.map((item, index) => (
              <label
                key={index}
                className="rounded-full px-3 py-1 text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.text}
              </label>
            ))}
          </div>
          <div
            className="w-[30px] h-[20px] translate-x-[15px] flex-1 cursor-pointer opacity-0 transition-opacity duration-200 hover:opacity-100"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board_dropdown"
                onClose={() => setShowDropdown(false)}
              >
                <p onClick={() => props.removeCard(props.boardId, id)}>
                  Delete Card
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="flex-1 font-bold text-base leading-7">{title}</div>
        <div className="flex justify-between items-center">
          {date && (
            <p className="rounded-full px-3 py-1 bg-gray-100 text-black text-sm leading-5 flex gap-1 items-center">
              <Clock className="h-[13px] w-[13px]" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="rounded-full px-3 py-1 bg-gray-100 text-black text-sm leading-5 flex gap-1 items-center">
              <CheckSquare className="h-[13px] w-[13px]" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
