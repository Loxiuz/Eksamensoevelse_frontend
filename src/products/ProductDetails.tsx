import { NavigateFunction } from "react-router-dom";
import { ProductType } from "../_service/productsApi";
import "../DetailsDialog.css";

export default function ProductDetails(props: {
  product: ProductType;
  nav: NavigateFunction;
}) {
  const { product, nav } = props;

  if (product) {
    return (
      <dialog className="details-dialog" open={true}>
        <button
          onClick={() => {
            nav("/products", { state: { dialogActive: false } });
          }}
        >
          Close
        </button>
        <table className="details-table">
          <tbody>
            <tr>
              <td>
                <strong>Name:</strong>
              </td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>
                <strong>Price:</strong>
              </td>
              <td>{product.price} kr.</td>
            </tr>
            <tr>
              <td>
                <strong>Weigth in grams:</strong>
              </td>
              <td>{product.weightInGrams} g</td>
            </tr>
          </tbody>
        </table>
      </dialog>
    );
  }
}
