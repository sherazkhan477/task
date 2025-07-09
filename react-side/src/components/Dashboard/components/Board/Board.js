import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-w-[290px] w-[290px] max-h-full flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="font-bold text-base flex gap-1 items-center">
          {props.board?.title}
          <span className="text-gray-500">{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="cursor-pointer relative"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <p
                className="border-b border-gray-100 cursor-pointer"
                onClick={() => props.removeBoard()}
              >
                Delete Board
              </p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="bg-[#070F2B] p-2 rounded-md flex flex-col gap-2 overflow-y-auto custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="bg-white text-black rounded-xl shadow-sm w-full text-center"
          editClass="bg-white rounded-xl p-2"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default Board;
