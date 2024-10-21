import { toast } from "sonner";
import { FaQuestionCircle } from "react-icons/fa";

export default function (
  title,
  description,
  event,
  successMessage,
  errorMessage
) {
  toast.info(
    <>
      <article className="flex flex-col w-full">
        <article className="flex items-center gap-2">
          <FaQuestionCircle />
          <article>
            <h2 className="font-bold">{title}</h2>
            <span>{description}</span>
          </article>
        </article>
        <article className="flex gap-3 justify-end mt-2">
          <button
            onClick={async () => {
              try {
                await event();
                toast.dismiss();
                toast.success(successMessage);
              } catch (error) {
                console.error(error);
                toast.error("Error al " + errorMessage);
              }
            }}
            className="bg-blue-700 p-1.5 rounded text-white hover:bg-blue-800 transition duration-300"
          >
            Aceptar
          </button>
          <button
            onClick={() => {
              toast.dismiss();
            }}
            className="bg-black p-1.5 rounded text-white hover:bg-gray-800 transition duration-300"
          >
            Cancelar
          </button>
        </article>
      </article>

      {/*<button
        onClick={() => {
          ConfirmNotification(
            "Seguro que desea eliminar el siguiente articulo?",
            "El articulo se eliminara de forma permanente",
            handleEvent,
            "Articulo eliminado con exito",
            "Error al eliminar el articulo"
          );
        }}
      >
        Make a toast
      </button>*/}
    </>
  );
}
