import { toast } from "sonner";
import { useForm } from "react-hook-form";
import SideBar from "../../../components/SideBar";

function EstadoCobranzaCreateView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { nombre, descripcion } = data;
    try {
      toast.success("Estado de cobranza registrado");
    } catch (error) {
      console.error(error);
      toast.error("Error al agregar estado de cobranza");
    }
  };

  return (
    <>
      <SideBar />
      <main className="min-h-screen pl-52 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <section className="border dark:border-gray-700 rounded dark:text-gray-200 bg-white dark:bg-gray-800 shadow-2xl w-full max-w-2xl px-5 py-7">
          <h2 className="font-semibold text-3xl pb-4">
            Nuevo estado de cobranza
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <article>
              <label className="font-semibold text-sm">ID</label>
              <input
                type="text"
                defaultValue={"******"}
                disabled
                className="border rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </article>
            <article>
              <label>Nombre</label>
              <input
                type="text"
                {...register("nombre", {
                  required: "Campo obligatorio",
                })}
                className={`border rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.nombre && "ring-2 ring-red-500"
                }`}
              />
              {errors.nombre && (
                <span className="text-red-600 text-sm font-bold">
                  {errors.nombre.message}
                </span>
              )}
            </article>
            <article>
              <label>Descripcion</label>
              <textarea className="border rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
            </article>
            <button className="w-full mt-1 transition duration-300 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800">
              Registrar estado de cobranza
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
export default EstadoCobranzaCreateView;
