import ErrorNotification from "../../components/notifications/ErrorNotification";
import SuccessNotification from "../../components/notifications/SuccessNotification";
import SideBar from "../../components/SideBar";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";

function UpdateProfile() {
  const auth = useAuth();
  const { displayName, photoURL, email } = auth.user || {};
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { userName, photo } = data;
    try {
      await auth.updateUserProfile(userName, photo);
      SuccessNotification("Informacion actualizada");
    } catch (error) {
      console.log(error);
      ErrorNotification("Error al actualizar informacion", "Intente mas tarde");
    }
  };

  return (
    <>
      <SideBar />
      <main className="h-screen pl-52 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <section className="border dark:border-gray-700 rounded dark:text-gray-200 bg-white dark:bg-gray-800 shadow-2xl w-full max-w-2xl px-5 py-7">
          <h2 className="font-semibold text-3xl pb-4">Actualizar perfil</h2>
          <article className="flex items-center gap-5 pb-2">
            <img
              src={photoURL}
              alt="Foto de usuario"
              className="size-24 rounded-full"
            />
            <article>
              <span className="font-semibold text-xl">{displayName}</span>
              <br />
              <span className="text-lg">{email}</span>
            </article>
          </article>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <article className="flex flex-col gap-2">
              <label className="font-semibold text-sm">Nombre de usuario</label>
              <input
                type="text"
                defaultValue={displayName}
                {...register("userName", {
                  required: "Campo requerido",
                })}
                className={`border rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.userName && "ring-2 ring-red-500"
                }`}
              />
              {errors.userName && (
                <span className="text-red-600 text-sm font-bold">
                  {errors.userName.message}
                </span>
              )}
            </article>
            <article>
              <label className="font-semibold text-sm">Foto URL</label>
              <input
                type="text"
                defaultValue={photoURL}
                {...register("photo", {
                  required: "Campo requerido",
                })}
                className={`border rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.photo && "ring-2 ring-red-500"
                }`}
              />
              {errors.photo && (
                <span className="text-red-600 text-sm font-bold">
                  {errors.photo.message}
                </span>
              )}
            </article>
            <button className="w-full mt-1 transition duration-300 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800">
              Actualizar informacion
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
export default UpdateProfile;
