import React from "react";

export default function TodoList({cards, handleCompleteCancelBtn, handleDeleteBtn,listIsDone, }) {
  return (
    <div>
      <h2>{listIsDone ? "완료 목록" : "할 일 목록"}</h2>
      <div>
        {cards
          .filter((item) => item.isDone === listIsDone)
          .map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid #111",
                  padding: "15px",
                }}
              >
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <button onClick={() => handleCompleteCancelBtn(item)}>
                  완료취소
                </button>
                <button onClick={() => handleDeleteBtn(item)}>삭제</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
