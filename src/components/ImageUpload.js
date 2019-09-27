import React, { useState } from "react";

export default function ImageUpload({ addImgUrl }) {
  const [imgUrl, setImgUrl] = useState("");

  function handleChange(e) {
    setImgUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addImgUrl(imgUrl);
    resetImgUrl();
  }

  function resetImgUrl() {
    setImgUrl("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={imgUrl} onChange={handleChange} />
      <input type="submit" value="Add image" />
    </form>
  );
}
