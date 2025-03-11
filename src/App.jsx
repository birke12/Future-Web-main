import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";




function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/article", element: <Article /> },
  ]);

  return (
    <>
      <div className="app">
        <Navigation />
        <div className="content">{routes}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
