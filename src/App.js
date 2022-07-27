import { Fragment } from "react";

import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/nav/MainNav";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import AdBoardPage from "./pages/navigation/AdBoardPage";
import Experiences from "./pages/navigation/Experiences";
import Information from "./pages/navigation/Information";
import QnABoardPage from "./pages/navigation/QnABoardPage";
import RehearStory from "./pages/navigation/RehearStory";
import TalkPage from "./pages/navigation/TalkPage";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/stories" element={<RehearStory />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/information" element={<Information />} />
        <Route path="/qna-board" element={<QnABoardPage />} />
        <Route path="/ad-board" element={<AdBoardPage />} />
        <Route path="/talk" element={<TalkPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
