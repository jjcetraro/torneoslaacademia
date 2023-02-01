import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import TournamentBracketsComponent from "./gui/components/TournamentBracketsComponent";
import Match from "./entities/Match";
import Tournament from "./entities/Tournament";
import Phase from "./entities/Phase";
import Player from "./entities/Player";
import PlayersPage from "./gui/pages/PlayersPage";
import MyNavbar from "./gui/components/MyNavbar";
import { Button, Container } from "react-bootstrap";
import RankingPage from "./gui/pages/RankingPage";
import TournamentsPage from "./gui/pages/TournamentsPage";
import MessagePage from "./gui/pages/MessagePage";

import { signInWithGoogle } from "./firebase/Firebase";
import TournamentSignUp from "./gui/pages/TournamentSignUp";
import LoginPage from "./gui/pages/LoginPage";
import UserProfilePage from "./gui/pages/UserProfilePage";
import SorteoPage from "./gui/pages/SorteoPage";
import TournamentPage from "./gui/pages/TournamentPage";
import RegulationPage from "./gui/pages/RegulationPage";
import PartidosPage from "./gui/pages/PartidosPage";
import SetMatchResultPage from "./gui/pages/SetMatchResultPage";
import AdminDashboardPage from "./gui/pages/AdminDashboardPage";
import PlayerPage from "./gui/pages/PlayerPage";
import PartidosPorJugarPage from "./gui/pages/PartidosPorJugarPage";
import MasterPage from "./gui/pages/MasterPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/torneos" />} />
          <Route path="/tournamentSignUp" element={<TournamentSignUp />} />
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
          <Route path="/perfil" element={<UserProfilePage />} />
          <Route
            path="/torneos/:id"
            element={
              <MasterPage>
                <TournamentPage />
              </MasterPage>
            }
          />
          <Route path="/partidos" element={<PartidosPage />} />
          <Route path="/cargar_resultado" element={<SetMatchResultPage />} />
          <Route path="/admin_dashboard" element={<AdminDashboardPage />} />
          <Route
            path="/jugadores/:id"
            element={
              <MasterPage>
                <PlayerPage />
              </MasterPage>
            }
          />
          <Route path="/sorteo" element={<SorteoPage />} />
          <Route path="/partidosPorJugar" element={<PartidosPorJugarPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
