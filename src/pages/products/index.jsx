import { useEffect, useState } from "react";
import { url } from "../../util/axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Products() {
  const [tvarlar, setTvarlar] = useState([]);

  useEffect(() => {
    url.get("/products").then((res) => setTvarlar(res.data));
  }, []);

  const del = (soni) => {
    url.delete(`/products/${soni}`).then((res) => toast.success("deleted"));
  };

  return (
    <div>
      <h1>all products</h1>
      <div className="tvars">
        {tvarlar.map((t) => (
          <div key={t._id}>
            <h2>{t.nomi}</h2>
            <h3>{t.narxi}</h3>
            <p>{t.rangi}</p>
            <Link to={`/update/${t._id}`}>edit</Link>
            <button onClick={() => del(t._id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
