import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/Layout/MainNav";
import Footer from "./components/Layout/Footer";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import RehearStory from "./pages/RehearStory";
import styled from "styled-components";
import PostsPage from "./pages/PostsPage";
import PostingPage from "./pages/PostingPage";
// import AdBoardPage from "./pages/navigation/AdBoardPage";
// import Experiences from "./pages/navigation/Experiences";
// import Information from "./pages/navigation/Information";
// import QnABoardPage from "./pages/navigation/QnABoardPage";
// import TalkPage from "./pages/navigation/TalkPage";
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const App = () => {
  return (
    <AppContainer>
      {/* <GlobalStyle /> */}

      <MainNavigation />

      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/stories" element={<RehearStory />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posting" element={<PostingPage />} />
      </Routes>

      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  min-width: 1040px;
  background-color: #fffbbb;
`;

export default App;
