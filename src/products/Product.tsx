import { ProductType } from "../_service/productsApi";

export default function Product(product: ProductType) {
  return (
    <tr key={product.id}>
      <td>
        <button value={`${product.id}`}>+</button>
      </td>
      <td>{product.name}</td>
      <td>{product.price} kr.</td>
      <td>
        <button value={`${product.id}`}>Edit</button>
      </td>
      <td>
        <button value={`${product.id}`}>Delete</button>
      </td>
    </tr>
  );
}
