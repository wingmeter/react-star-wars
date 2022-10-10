// import { getApiResource } from '../../utils/network';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PeoplePage from "../PeoplePage";
import HomePage from "../HomePage/HomePage";
import Header from "../../components/Header/Header";
import PersonPage from "../PersonPage/PersonPage";
import NotFoundPage from "../NotFountPage/NotFoundPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import SearchPanel from "../SearchPanel/SearchPanel";

import styles from "./App.module.css";


const App = () => {
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:id" element={<PersonPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/search" element={<SearchPanel />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
