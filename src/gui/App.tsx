import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./index.css";
import Layout from "./Layout";

type AppProps = React.PropsWithChildren;

const App: React.FunctionComponent<AppProps> = () => {
    let pathname = '';
    if (window.location.pathname) {
        pathname = window.location.pathname.split('/')[1]
    }
  return (
    <BrowserRouter basename={pathname}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
