import React from "react";

export const ProductInput = ({
  formData,
  fileRef,
  handleSubmit,
  getProducts,
}) => {
  const addProducts = (e) => {
    const { title, cost, image, category } = e.currentTarget;
    const payload = {
      title,
      cost,
      image,
      category,
    };
    return fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        return getProducts();
      })
      .catch((err) => console.log("error in posting"));
  };
  return (
    <div>
      <form onSubmit={() => console.log(formData)}>
        <div>
          <label>Enter name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleSubmit}
          />
        </div>
        <div>
          <label>Enter cost</label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleSubmit}
          />
        </div>
        <div>
          <label>Upload file</label>
          <input
            type="file"
            name="image"
            ref={fileRef}
            onChange={handleSubmit}
          />
        </div>
        <div>
          <label>Select category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleSubmit}
          >
            <option value=""></option>
            <option value="vegetables">vegetables</option>
            <option value="fruits">fruits</option>
            <option value="provisions">provisions</option>
          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <br />
      <button>prev</button>
      <button>currentpage</button>
      <button>Next</button>
    </div>
  );
};
