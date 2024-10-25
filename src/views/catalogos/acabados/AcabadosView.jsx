import { Link } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import ErrorNotification from "../../../components/notifications/ErrorNotification";
import SuccessNotification from "../../../components/notifications/SuccessNotification";
import { toast } from "sonner";
import { useState } from "react";

function AcabadosView() {
  const acabados = [
    {
      id: 1,
      nombre: "bastilla",
      descripcion: "Terminación de borde para evitar que se deshilache.",
    },
    {
      id: 2,
      nombre: "dobladillo",
      descripcion: "Pliegue de tela en el borde para darle un acabado limpio.",
    },
    {
      id: 3,
      nombre: "encaje",
      descripcion: "Detalle decorativo de encaje para un acabado elegante.",
    },
    {
      id: 4,
      nombre: "fruncido",
      descripcion: "Arruga intencionada en la tela para un diseño ajustado.",
    },
    {
      id: 5,
      nombre: "ribete",
      descripcion: "Borde de tela o cinta para darle un toque decorativo.",
    },
    {
      id: 6,
      nombre: "remallado",
      descripcion:
        "Acabado de los bordes con máquina para evitar deshilachado.",
    },
    {
      id: 7,
      nombre: "bordado",
      descripcion: "Diseño decorativo hecho a mano o a máquina.",
    },
    {
      id: 8,
      nombre: "plisado",
      descripcion: "Doblado repetitivo en la tela para un acabado texturizado.",
    },
    {
      id: 9,
      nombre: "ojal",
      descripcion: "Agujero reforzado para insertar botones u otros cierres.",
    },
    {
      id: 10,
      nombre: "corte láser",
      descripcion: "Corte preciso en la tela usando tecnología láser.",
    },
  ];

  const filterBy = ["id", "nombre"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(filterBy[0]);

  const filteredAcabados = acabados.filter((item) =>
    item[filter].toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      SuccessNotification("Se elimino el articulo " + id);
    } catch (error) {
      console.error(error);
      ErrorNotification("Error al eliminar articulo");
    }
  };

  return (
    <>
      <SideBar />
      <main className="pl-52 min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <section className="pt-5">
          <article className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold">Acabados</h2>
            <article className="flex gap-3 pr-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {filterBy.map((item) => (
                  <option key={item} value={item}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Link
                to={"/acabados/create"}
                className="transition h-10 duration-300 text-white bg-green-800 hover:bg-green-900 font-medium rounded text-sm px-5 py-2.5 text-center"
              >
                Nuevo
              </Link>
            </article>
          </article>
          <article className="relative overflow-x-auto shadow-md pt-5">
            <table className="w-full border-gray-400 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Nombre</th>
                  <th className="px-6 py-3">Descripcion</th>
                  <th className="px-6 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredAcabados.map((item) => (
                  <tr
                    key={item.id}
                    className="odd:bg-gray-100 odd:dark:bg-gray-900 even:bg-slate-200 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.id}
                    </th>
                    <th className="px-6 py-4">{item.nombre}</th>
                    <th className="px-6 py-4">{item.descripcion}</th>
                    <th className="px-6 py-4 space-x-3">
                      <Link className="transition duration-300 text-gray-200 bg-blue-800 hover:bg-blue-900 font-medium rounded text-sm px-2 py-1 text-center">
                        Editar
                      </Link>
                      <button
                        onClick={() => {
                          toast.info(
                            'Desea eliminar el acabado "' + item.nombre + '"?',
                            {
                              action: {
                                label: "Eliminar",
                                onClick: () => {
                                  handleDelete(item.id);
                                },
                              },
                              duration: Infinity,
                            }
                          );
                        }}
                        className="transition duration-300 text-gray-200 bg-red-800 hover:bg-red-900 font-medium rounded text-sm px-2 py-1 text-center"
                      >
                        Eliminar
                      </button>
                    </th>
                  </tr>
                ))}
                {filteredAcabados.length === 0 && (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center">
                      No se encontraron resultados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </article>
        </section>
      </main>
    </>
  );
}
export default AcabadosView;
