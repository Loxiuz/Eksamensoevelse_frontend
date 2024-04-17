import { useState } from "react";
import { ProductType, addProduct } from "../_service/productsApi";
import "./ProductForm.css";

const EMPTY_PRODUCT = {
  id: null,
  name: "",
  price: 0,
  weightInGrams: 0,
};

export default function ProductForm() {
  const [productFormData, setProductFormData] =
    useState<ProductType>(EMPTY_PRODUCT);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    setProductFormData((prevFormData) => ({
      ...prevFormData,
      [target.name]: target.value,
    }));
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newProduct = await addProduct(productFormData);
    console.log(newProduct);
  }

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" onChange={handleChange} />
      <label htmlFor="price">Price:</label>
      <input name="price" type="number" onChange={handleChange} />
      <label htmlFor="weightInGrams">Weight in grams:</label>
      <input name="weightInGrams" type="number" onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
