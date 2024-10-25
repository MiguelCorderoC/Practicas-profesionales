import { Link } from "react-router-dom";
import { MdChevronRight, MdRealEstateAgent } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GiRolledCloth } from "react-icons/gi";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { useState } from "react";
import { MdWork } from "react-icons/md";
import { HiCash } from "react-icons/hi";
import { TbCoinFilled } from "react-icons/tb";
import { BiArrowToRight } from "react-icons/bi";
import ThemeButton from "./ThemeButton";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import imgUserDefault from "../assets/imgUserDefault.png";

function SideBar() {
  const [dropReportes, setDropReportes] = useState(false);
  const [dropCatalogos, setDropCatalogos] = useState(false);
  const [dropUser, setDropUser] = useState(false);
  const auth = useAuth();

  const { email, displayName, photoURL } = auth.user || {};

  const handleLogOut = async () => {
    try {
      await auth.logOut();
      toast.success("Sesion cerrada");
    } catch (error) {
      console.error(error);
      toast.error("Error al cerrar sesion");
    }
  };

  return (
    <>
      <aside className="fixed z-20 h-screen w-[200px] border-r dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
        <nav className="h-full flex flex-col justify-between pt-3">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to={"/cotizaciones"}
                className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
              >
                <VscPreview /> Cotizaciones
              </Link>
            </li>
            <li>
              <button
                onClick={() => setDropReportes((prev) => !prev)}
                className="flex items-center w-full"
              >
                <MdChevronRight
                  className={`text-3xl font-bold text-gray-500 transition-all duration-300 ${
                    dropReportes && "rotate-90"
                  }`}
                />
                <Link className="font-semibold text-lg">Reportes</Link>
              </button>
              <ul
                className={`transition-all duration-300 ${
                  dropReportes ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1">
                    <BsPencilSquare /> Ordenes
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1">
                    <VscPreview /> Cotizaciones
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setDropCatalogos((prev) => !prev)}
                className="flex items-center w-full"
              >
                <MdChevronRight
                  className={`text-3xl font-bold text-gray-500 transition-all duration-300 ${
                    dropCatalogos && "rotate-90"
                  }`}
                />
                <Link className="font-semibold text-lg">Catalogos</Link>
              </button>
              <ul
                className={`transition-all duration-300 ${
                  dropCatalogos ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    to={"/acabados"}
                    className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
                  >
                    <GiRolledCloth /> Acabados
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1">
                    <BsFillPersonBadgeFill />
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/estado-cobranza"}
                    className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
                  >
                    <MdRealEstateAgent /> Estado cobranza
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/tipo-trabajo"}
                    className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
                  >
                    <MdWork /> Tipo de trabajo
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/tipo-ventas"}
                    className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
                  >
                    <HiCash /> Tipo de venta
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/forma-pago"}
                    className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
                  >
                    <TbCoinFilled /> Forma de pago
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/procesos"}
                    className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
                  >
                    <BiArrowToRight /> Procesos
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/unidades"}
                    className="flex items-center gap-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:text-gray-700 hover:bg-gray-200 transition duration-300 font-semibold text-base pl-8 py-1"
                  >
                    <BiArrowToRight /> Unidades
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <article className="relative flex items-center gap-2 p-2 border-t-2 dark:border-gray-700 border-gray-300">
            <article
              className={`absolute bottom-16 left-0 ${
                dropUser ? "block" : "hidden"
              }`}
            >
              <ul className="border rounded p-2 bg-gray-200 text-sm font-semibold dark:text-gray-300 dark:border-gray-700 dark:bg-gray-800">
                <li>
                  <article className="border-b-2 border-gray-400 pb-1">
                    <span>{displayName || "Sin nombre"}</span>
                    <br />
                    <span>{email}</span>
                  </article>
                </li>
                {email === import.meta.env.VITE_USER_ADMIN && (
                  <li className="block">
                    <Link
                      to={"/signin"}
                      className="flex items-center gap-2 py-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded"
                    >
                      <FaUserCircle className="font-bold text-gray-500" />
                      Crear nuevo usuario
                    </Link>
                  </li>
                )}
                <li className="block">
                  <Link
                    to={"/update-profile"}
                    className="flex items-center gap-2 py-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded"
                  >
                    <IoSettingsOutline /> Configurar perfil
                  </Link>
                </li>
                <li className="block">
                  <button
                    onClick={handleLogOut}
                    className="flex w-full items-center gap-2 py-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded"
                  >
                    <CiLogout /> Cerrar sesion
                  </button>
                </li>
              </ul>
            </article>
            <article className="flex">
              <button
                onClick={() => setDropUser((prev) => !prev)}
                className="flex items-center gap-1"
              >
                <img
                  src={photoURL || imgUserDefault}
                  alt="Foto de usuario"
                  className="size-10 rounded-full"
                />
                <span className="font-semibold text-sm">
                  {displayName || "Sin nombre"}
                </span>
              </button>
            </article>
            <ThemeButton />
          </article>
        </nav>
      </aside>
    </>
  );
}
export default SideBar;
