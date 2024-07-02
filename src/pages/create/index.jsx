import { useForm } from "react-hook-form";
import { url } from "../../util/axios";
import { toast } from "react-toastify";

export default function CreateProduct() {
  const { register, handleSubmit, reset } = useForm();

  const addProd = (data) => {
    url
      .post("/products", data)
      .then((res) => {
        reset();
        toast.success("created product");
      })
      .catch((e) => {
        reset();
        toast.error("sometinh went wrong");
      });
  };

  return (
    <div>
      <h1>new product</h1>
      <form onSubmit={handleSubmit(addProd)}>
        <input type="text" {...register("nomi")} placeholder="name" />
        <input type="text" {...register("narxi")} placeholder="price" />
        <input type="text" {...register("rangi")} placeholder="color" />
        <button>add</button>
      </form>
    </div>
  );
}
