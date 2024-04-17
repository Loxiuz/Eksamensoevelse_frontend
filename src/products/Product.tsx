import { ProductType } from "../_service/productsApi";

export default function Product(product: ProductType) {
  return (
    <tr key={product.id}>
      <td>
        <button value={`${product.id}`}>Details</button>
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.weightInGrams}</td>
      <td>
        <button value={`${product.id}`}>Edit</button>
      </td>
      <td>
        <button value={`${product.id}`}>Delete</button>
      </td>
    </tr>
  );
}
