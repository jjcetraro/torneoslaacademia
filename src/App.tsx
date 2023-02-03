import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PlayersPage from "./gui/pages/PlayersPage";
import RankingPage from "./gui/pages/RankingPage";
import TournamentsPage from "./gui/pages/TournamentsPage";
import MessagePage from "./gui/pages/MessagePage";
import TournamentPage from "./gui/pages/TournamentPage";
import RegulationPage from "./gui/pages/RegulationPage";
import SetMatchResultPage from "./gui/pages/SetMatchResultPage";
import PlayerPage from "./gui/pages/PlayerPage";
import PartidosPorJugarPage from "./gui/pages/PartidosPorJugarPage";
import MasterPage from "./gui/pages/MasterPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/torneos" />} />
          {process.env.REACT_APP_SHOW_REGULATION === "true" ? (
            <Route
              path="/reglamento"
              element={
                <MasterPage>
                  <RegulationPage />
                </MasterPage>
              }
            />
          ) : (
            <></>
          )}
          {process.env.REACT_APP_SHOW_RANKING === "true" ? (
            <Route
              path="/ranking_anual"
              element={
                <MasterPage>
                  <RankingPage />
                </MasterPage>
              }
            />
          ) : (
            <></>
          )}
          <Route
            path="/torneos"
            element={
              <MasterPage>
                <TournamentsPage />
              </MasterPage>
            }
          />
          <Route
            path="/thanks"
            element={
              <MessagePage message="Gracias por registrarse en el torneo!" />
            }
          />
          <Route
            path="/jugadores"
            element={
              <MasterPage>
                <PlayersPage />
              </MasterPage>
            }
          />
          <Route
            path="/torneos/:id"
            element={
              <MasterPage>
                <TournamentPage />
              </MasterPage>
            }
          />
          <Route path="/cargar_resultado" element={<SetMatchResultPage />} />
          <Route
            path="/jugadores/:id"
            element={
              <MasterPage>
                <PlayerPage />
              </MasterPage>
            }
          />
          <Route path="/partidosPorJugar" element={<PartidosPorJugarPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
