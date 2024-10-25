import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { toast } from "sonner";
import { useState } from "react";
import CotizacionPDF from "../../components/PDF/CotizacionPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

function CotizacionesView() {
  const cotizaciones = [
    {
      id: 1,
      cliente: "miguel",
      negocio: "Tec de culiacan",
      fecha: "1 de julio de 2024",
      cotizacion: [
        {
          cantidad: 1,
          descripcion: "Descripcion a",
          medidaUnidad: "1.50 X 1.50",
          precioUnitario: 1125.0,
          total: 1125.0,
        },
        {
          cantidad: 1,
          descripcion: "Descripcion a",
          medidaUnidad: "1.50 X 1.50",
          precioUnitario: 1125.0,
          total: 1125.0,
        },
        {
          cantidad: 1,
          descripcion: "Descripcion a",
          medidaUnidad: "1.50 X 1.50",
          precioUnitario: 1125.0,
          total: 1125.0,
        },
      ],
      totalSinIVA: 2925,
      IVA: 468,
      totalNeto: 3393,
    },
    {
      id: 2,
      cliente: "Carlos",
      negocio: "Innovaciones SA",
      fecha: "3 de agosto de 2024",
      cotizacion: [
        {
          cantidad: 2,
          descripcion: "Descripcion b",
          medidaUnidad: "2.00 X 1.50",
          precioUnitario: 1500.0,
          total: 3000.0,
        },
        {
          cantidad: 3,
          descripcion: "Descripcion c",
          medidaUnidad: "1.00 X 1.00",
          precioUnitario: 900.0,
          total: 2700.0,
        },
      ],
      totalSinIVA: 5700,
      IVA: 912,
      totalNeto: 6612,
    },
    {
      id: 3,
      cliente: "Ana",
      negocio: "Fabrica de muebles",
      fecha: "15 de septiembre de 2024",
      cotizacion: [
        {
          cantidad: 5,
          descripcion: "Descripcion d",
          medidaUnidad: "3.00 X 2.00",
          precioUnitario: 2500.0,
          total: 12500.0,
        },
      ],
      totalSinIVA: 12500,
      IVA: 2000,
      totalNeto: 14500,
    },
    {
      id: 4,
      cliente: "Pedro",
      negocio: "Construcciones XYZ",
      fecha: "20 de octubre de 2024",
      cotizacion: [
        {
          cantidad: 10,
          descripcion: "Descripcion e",
          medidaUnidad: "0.50 X 0.50",
          precioUnitario: 500.0,
          total: 5000.0,
        },
        {
          cantidad: 4,
          descripcion: "Descripcion f",
          medidaUnidad: "1.00 X 1.00",
          precioUnitario: 1100.0,
          total: 4400.0,
        },
      ],
      totalSinIVA: 9400,
      IVA: 1504,
      totalNeto: 10904,
    },
    {
      id: 5,
      cliente: "Lucia",
      negocio: "Decoraciones y Eventos",
      fecha: "5 de noviembre de 2024",
      cotizacion: [
        {
          cantidad: 7,
          descripcion: "Descripcion g",
          medidaUnidad: "2.50 X 1.50",
          precioUnitario: 1800.0,
          total: 12600.0,
        },
      ],
      totalSinIVA: 12600,
      IVA: 2016,
      totalNeto: 14616,
    },
    {
      id: 6,
      cliente: "Pedro",
      negocio: "Construcciones XYZ",
      fecha: "20 de octubre de 2024",
      cotizacion: [
        {
          cantidad: 10,
          descripcion: "Descripcion e",
          medidaUnidad: "0.50 X 0.50",
          precioUnitario: 500.0,
          total: 5000.0,
        },
        {
          cantidad: 4,
          descripcion: "Descripcion f",
          medidaUnidad: "1.00 X 1.00",
          precioUnitario: 1100.0,
          total: 4400.0,
        },
      ],
      totalSinIVA: 9400,
      IVA: 1504,
      totalNeto: 10904,
    },
    {
      id: 7,
      cliente: "Pedro",
      negocio: "Construcciones XYZ",
      fecha: "20 de octubre de 2024",
      cotizacion: [
        {
          cantidad: 10,
          descripcion: "Descripcion e",
          medidaUnidad: "0.50 X 0.50",
          precioUnitario: 500.0,
          total: 5000.0,
        },
        {
          cantidad: 4,
          descripcion: "Descripcion f",
          medidaUnidad: "1.00 X 1.00",
          precioUnitario: 1100.0,
          total: 4400.0,
        },
      ],
      totalSinIVA: 9400,
      IVA: 1504,
      totalNeto: 10904,
    },
  ];

  const filterBy = ["id", "cliente", "negocio", "fecha"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(filterBy[0]);

  const filteredCotizaciones = cotizaciones.filter((item) =>
    item[filter].toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      toast.success("Se elimino el articulo " + id);
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar articulo");
    }
  };

  return (
    <>
      <SideBar />
      <main className="pl-52 min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <section className="pt-5">
          <article className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold">cotizaciones</h2>
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
                to={"/cotizaciones/create"}
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
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cliente
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Negocio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    fecha
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Detalles
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCotizaciones.map((item) => (
                  <tr
                    key={item.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4">{item.cliente}</td>
                    <td className="px-6 py-4">{item.negocio}</td>
                    <td className="px-6 py-4">{item.fecha}</td>
                    <td className="px-6 py-4">
                      <ul>
                        {item.cotizacion.map((cot, index) => (
                          <li key={index}>
                            {cot.descripcion} - {cot.cantidad} x{" "}
                            {cot.precioUnitario} = {cot.total}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4">${item.totalNeto}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <Link className="transition duration-300 text-gray-200 bg-blue-800 hover:bg-blue-900 font-medium rounded text-sm px-2 py-1 text-center">
                          Editar
                        </Link>
                        <PDFDownloadLink
                          document={<CotizacionPDF />}
                          fileName="mi-archivo.pdf"
                          className="transition duration-300 text-gray-200 bg-orange-700 hover:bg-orange-800 font-medium rounded text-sm px-2 py-1 text-center"
                        >
                          {({ blob, url, loading, error }) =>
                            loading ? "Generando PDF..." : "Imprimir"
                          }
                        </PDFDownloadLink>
                        <button
                          onClick={handleDelete}
                          className="transition duration-300 text-gray-200 bg-red-800 hover:bg-red-900 font-medium rounded text-sm px-2 py-1 text-center"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredCotizaciones.length === 0 && (
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
export default CotizacionesView;
