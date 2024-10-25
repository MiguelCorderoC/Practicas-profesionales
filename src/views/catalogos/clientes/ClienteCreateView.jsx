import SideBar from "../../../components/SideBar";

function ClienteCreateView() {
  return (
    <>
      <SideBar />
      <main className="h-screen pl-52 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <section className="border dark:border-gray-700 rounded dark:text-gray-200 bg-white dark:bg-gray-800 shadow-2xl w-full max-w-2xl px-5 py-7">
          <h2 className="font-semibold text-3xl pb-4">Registrar cliente</h2>
          <form className="flex flex-col gap-3">
            <article className="flex gap-5">
              <article>
                <label className="font-semibold text-sm">Nombre</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
              <article>
                <label className="font-semibold text-sm">
                  Apellido paterno
                </label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>

              <article>
                <label className="font-semibold text-sm">
                  Apellido materno
                </label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
            </article>
            <article className="flex gap-5">
              <article>
                <label className="font-semibold text-sm">Domicilio</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
              <article>
                <label className="font-semibold text-sm">Negocio</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
              <article>
                <label className="font-semibold text-sm">Tipo de cliente</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
            </article>
            <article className="flex gap-5">
              <article>
                <label className="font-semibold text-sm">
                  Constancia fiscal
                </label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
              <article>
                <label className="font-semibold text-sm">RFC</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
              <article>
                <label className="font-semibold text-sm">WhatsApp</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
            </article>
            <article className="flex gap-5 items-center">
              <article>
                <label className="font-semibold text-sm">Telefono fijo</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
              <article className="flex flex-col flex-grow">
                <label className="font-semibold text-sm">Correo</label>
                <input
                  type="text"
                  className="border h-10 rounded bg-gray-50 border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:ring-2 focus:border-blue-500 transition duration-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </article>
            </article>
            <button className="w-full mt-1 transition duration-300 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800">
              Registrar cliente
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
export default ClienteCreateView;
