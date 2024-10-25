import { Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import LogInView from "./views/auth/LogInView";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPasswordView from "./views/auth/ResetPasswordView";
import UpdateProfile from "./views/auth/UpdateProfileView";
import SignInView from "./views/auth/SignInView";
import ClienteCreateView from "./views/catalogos/clientes/ClienteCreateView";
import AcabadosView from "./views/catalogos/acabados/AcabadosView";
import AcabadosCreateView from "./views/catalogos/acabados/AcabadosCreateView";
import EstadoCobranzaView from "./views/catalogos/estadocobranza/EstadoCobranzaView";
import EstadoCobranzaCreateView from "./views/catalogos/estadocobranza/EstadoCobranzaCreateView";
import TipoTrabajo from "./views/catalogos/tipotrabajo/TipoTrabajoView";
import TipoTrabajoCreateView from "./views/catalogos/tipotrabajo/TipoTrabajoCreateView";
import TipoVentasView from "./views/catalogos/tipoventas/TipoVentasView";
import TipoVentasCreateView from "./views/catalogos/tipoventas/TipoVentasCreateView";
import FormaPagoView from "./views/catalogos/formapago/FormaPagoView";
import FormaPagoCreateView from "./views/catalogos/formapago/FormaPagoCreateView";
import ProcesosView from "./views/catalogos/procesos/ProcesosView";
import ProcesosCreateView from "./views/catalogos/procesos/ProcesosCreateView";
import UnidadView from "./views/catalogos/unidad/UnidadView";
import UnidadCreateView from "./views/catalogos/unidad/UnidadCreateView";
import CotizacionesView from "./views/cotizaciones/CotizacionesView";

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" closeButton richColors />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomeView />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LogInView />} />
          <Route path="/reset-password" element={<ResetPasswordView />} />
          <Route
            path="/update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute>
                <SignInView />
              </ProtectedRoute>
            }
          />
          <Route
            path="clientes/create"
            element={
              <ProtectedRoute>
                <ClienteCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/acabados"
            element={
              <ProtectedRoute>
                <AcabadosView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/acabados/create"
            element={
              <ProtectedRoute>
                <AcabadosCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/estado-cobranza"
            element={
              <ProtectedRoute>
                <EstadoCobranzaView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/estado-cobranza/create"
            element={
              <ProtectedRoute>
                <EstadoCobranzaCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tipo-trabajo"
            element={
              <ProtectedRoute>
                <TipoTrabajo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tipo-trabajo/create"
            element={
              <ProtectedRoute>
                <TipoTrabajoCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tipo-ventas"
            element={
              <ProtectedRoute>
                <TipoVentasView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tipo-ventas/create"
            element={
              <ProtectedRoute>
                <TipoVentasCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forma-pago"
            element={
              <ProtectedRoute>
                <FormaPagoView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forma-pago/create"
            element={
              <ProtectedRoute>
                <FormaPagoCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/procesos"
            element={
              <ProtectedRoute>
                <ProcesosView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/procesos/create"
            element={
              <ProtectedRoute>
                <ProcesosCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/unidades"
            element={
              <ProtectedRoute>
                <UnidadView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/unidades/create"
            element={
              <ProtectedRoute>
                <UnidadCreateView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cotizaciones"
            element={
              <ProtectedRoute>
                <CotizacionesView />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
