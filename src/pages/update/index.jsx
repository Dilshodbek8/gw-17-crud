import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../util/axios";
import { toast } from "react-toastify";

export default function UpdateProduct() {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    url.get(`/products/${id}`).then((res) => {
      reset(res.data);
    });
  }, []);

  const editPrd = (data) => {
    let { _id, ...others } = data;
    url.put(`/products/${id}`, others).then((res) => {
      toast.success("updated!");
      nav("/");
    });
  };

  return (
    <div>
      <h1>update product</h1>
      <form onSubmit={handleSubmit(editPrd)}>
        <input type="text" {...register("nomi")} />
        <input type="text" {...register("narxi")} />
        <input type="text" {...register("rangi")} />
        <button>update</button>
      </form>
    </div>
  );
}
