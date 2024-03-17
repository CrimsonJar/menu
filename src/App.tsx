import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import articlesData from "./Components/Data/data.json";
import Article from "./Components/Atrticle";
import Menu from "./Components/Menu";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          {articlesData &&
            articlesData.map((article) => (
              <Route
                key={article.link}
                path={article.link}
                element={<Article title={article.title} text={article.text} />}
              />
            ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
