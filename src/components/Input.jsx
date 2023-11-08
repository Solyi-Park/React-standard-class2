import React from "react";

export default function Input({ handleFormSubmit, title, content, handleTitle, handleContent }) {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={title} onChange={handleTitle} />
        <input value={content} onChange={handleContent} />
        <button>추가하기</button>
      </form>
    </div>
  );
}
