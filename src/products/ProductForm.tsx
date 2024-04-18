import { useEffect, useState } from "react";
import {
  EMPTY_PRODUCT,
  ProductType,
  addProduct,
  getProduct,
} from "../_service/productsApi";
import "./ProductForm.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductForm() {
  const { state } = useLocation();
  const [isEditClicked, setIsEditClicked] = useState(state?.isEditClicked);
  const [chosenProductId] = useState(Number(state?.id));
  const [productFormData, setProductFormData] =
    useState<ProductType>(EMPTY_PRODUCT);
  const nav = useNavigate();

  useEffect(() => {
    if (isEditClicked) {
      const fetchProduct = async () => {
        try {
          const fetchProduct = await getProduct(chosenProductId);
          setProductFormData(fetchProduct);
        } catch (error) {
          console.error("Error fetching product: " + chosenProductId);
        }
      };
      fetchProduct();
    }
    setIsEditClicked(false);
  }, [isEditClicked, chosenProductId, setIsEditClicked]);

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
    if (newProduct) {
      alert(`Product added!: ${newProduct.name}`);
      nav("/products");
    } else {
      alert(`Error adding product`);
    }
  }

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={productFormData.name}
      />
      <label htmlFor="price">Price:</label>
      <input
        name="price"
        type="number"
        onChange={handleChange}
        value={productFormData.price}
      />
      <label htmlFor="weightInGrams">Weight in grams:</label>
      <input
        name="weightInGrams"
        type="number"
        onChange={handleChange}
        value={productFormData.weightInGrams}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
