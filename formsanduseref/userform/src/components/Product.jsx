import React from "react";
import { ProductInput } from "./ProductInput";

export const Product = () => {
  const [show, setShow] = React.useState([]);
  const [formData, setFormData] = React.useState({});
  const fileRef = React.useRef();

  //   React.useEffect(() => {
  //     getProducts();
  //   }, []);

  const handleSubmit = (e) => {
    const { name, value, type } = e.currentTarget;
    if (name === "files") {
      setFormData({
        ...formData,
        [name]: fileRef.current.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const getProducts = () => {
    return fetch("http://localhost:3000/posts_page=4&_limit=2")
      .then((res) => res.json())
      .then((res) => {
        setShow(res);
      })
      .catch((err) => console.log("error in getting"));
  };

  return (
    <div>
      <ProductInput
        formData={formData}
        fileRef={fileRef}
        handleSubmit={handleSubmit}
        getProducts={getProducts}
      />
      {show}
    </div>
  );
};
