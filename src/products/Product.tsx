import { useNavigate } from "react-router-dom";
import { ProductType, deleteProduct } from "../_service/productsApi";

export default function Product(product: ProductType) {
  const nav = useNavigate();

  function handleDetailsClicked(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
  function handleEditClicked(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const productId = e.currentTarget.value;
    nav("/products/add", {
      state: { id: productId, isEditClicked: true },
    });
  }

  async function handleDeleteClicked(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const productId = e.currentTarget.value;
    try {
      const deleteRes = await deleteProduct(Number(productId));
      if (deleteRes) {
        alert(`Product deleted!: ${productId}`);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  }

  return (
    <tr key={product.id}>
      <td>
        <button onClick={handleDetailsClicked} value={`${product.id}`}>
          +
        </button>
      </td>
      <td>{product.name}</td>
      <td>{product.price} kr.</td>
      <td>
        <button onClick={handleEditClicked} value={`${product.id}`}>
          Edit
        </button>
      </td>
      <td>
        <button onClick={handleDeleteClicked} value={`${product.id}`}>
          Delete
        </button>
      </td>
    </tr>
  );
}
