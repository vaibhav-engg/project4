import React, { useEffect, useState } from "react";
import { fetchBoards } from "../Components/services";
import ShowClasses from "../Components/showclasses";

const Dashboard = ({ token, codename }) => {
  const [boardsData, setBoardsData] = useState([]);
  const [boardId, setBoardId] = useState(0);

  useEffect(async () => {
    const data = await fetchBoards(token, codename);
    setBoardsData(data.slice(0, 7));
  }, []);

  const handleClick = (e, board) => {
    e.preventDefault();

    setBoardId(board.boardId);
  };

  if (boardId > 0) {
    return <ShowClasses boardId={boardId} token={token} codename={codename} />;
  }
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          backgroundColor: "yellowgreen",
        }}
      >
        ALL BOARDS
      </h1>
      <div
        style={{
          // border: "2px solid red",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {boardsData.map((singleBoard) => {
          return (
            <div
              key={singleBoard.boardId}
              onClick={(e) => handleClick(e, singleBoard)}
              style={{
                border: "2px solid black",
                margin: "2rem",
                padding: "1rem",
                backgroundColor: "turquoise",
                width: "70%",
                height: "20rem",
                borderRadius: ".8rem",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  border: "2px solid blue",
                  borderRadius: ".8rem",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  style={{ height: "70%" }}
                  src={singleBoard.boardIcon}
                  alt=""
                />
              </div>
              <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>
                {singleBoard.boardShortName}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
