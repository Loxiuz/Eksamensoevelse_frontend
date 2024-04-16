import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          nav("/products");
        }}
      >
        Products
      </button>
      <button
        onClick={() => {
          nav("/deliveries");
        }}
      >
        Deliveries
      </button>
    </>
  );
}
