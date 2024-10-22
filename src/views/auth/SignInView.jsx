import { useForm } from "react-hook-form";
import SideBar from "../../components/SideBar";
import { useAuth } from "../../context/AuthContext";
import SuccessNotification from "../../components/notifications/SuccessNotification";
import ErrorNotification from "../../components/notifications/ErrorNotification";

function SignInView() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const auth = useAuth();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await auth.register(email, password);
      SuccessNotification(
        "Usuario registrado",
        "Estas en la nueva cuenta, proporciona las credenciales para dar acceso al nuevo usuario"
      );
    } catch (error) {
      ErrorNotification(
        "Error al crear usuario",
        "Intente de nuevo, si el problema persiste llame a soporte"
      );
    }
  };

  return (
    <>
      <SideBar />
      <main className="h-screen pl-52 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <section className="border dark:border-gray-700 rounded dark:text-gray-200 bg-white dark:bg-gray-800 shadow-2xl w-full max-w-2xl px-5 py-7">
          <h2 className="font-semibold text-3xl pb-4">Registrar usuario</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <article>
              <label className="font-semibold text-sm">
                Correo electronico
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Campo obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "Ingresa un correo Gmail",
                  },
                })}
                className={`border rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.email && "ring-2 ring-red-500"
                }`}
              />
              {errors.email && (
                <span className="text-red-600 text-sm font-bold">
                  {errors.email.message}
                </span>
              )}
            </article>
            <article>
              <label className="font-semibold text-sm">Contraseña</label>
              <input
                type="password"
                {...register("password", {
                  required: "Campo requerido",
                  minLength: {
                    value: 6,
                    message: "Ingresa al menos 6 caracteres",
                  },
                })}
                className={`border rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.password && "ring-2 ring-red-500"
                }`}
              />
              {errors.password && (
                <span className="text-red-600 text-sm font-bold">
                  {errors.password.message}
                </span>
              )}
            </article>
            <button className="w-full mt-1 transition duration-300 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800">
              Registrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
export default SignInView;
