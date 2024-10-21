import { toast } from "sonner";
import ThemeButton from "../../components/ThemeButton";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

function ResetPasswordView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = useAuth();

  const onSubmit = async (data) => {
    const { email } = data;
    try {
      await auth.resetPassword(email);
      toast.success("Enlace enviado", {
        description: "Se envio un enlace de recuperacion a " + email,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar el enlace", {
        description:
          "Intente de nuevo, si el problema sigue comuniquese para recuperar su acceso",
      });
    }
  };

  return (
    <>
      <header className="absolute top-5 right-5">
        <ThemeButton />
      </header>
      <main className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <section className="border dark:border-gray-700 rounded dark:text-gray-200 bg-white dark:bg-gray-800 shadow-2xl w-full max-w-lg px-5 py-7">
          <h2 className="font-semibold text-3xl pb-1">
            Restablece tu contraseña
          </h2>
          <span className="font-medium text-sm">
            Se te enviara un enlace a tu correo electronico para reestablecer
            <br /> tu contraseña
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 pt-5"
          >
            <article className="flex flex-col gap-2">
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
            <button className="w-full transition duration-300 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800">
              Enviar enlace
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
export default ResetPasswordView;
