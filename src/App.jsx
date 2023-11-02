import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProdutosProvider from "./Context";
import Contato from "./Components/Contato/Contato";
import Header from "./Components/Header/Header";
import ProdutoDetalhes from "./Components/ProdutoDetalhes/ProdutoDetalhes";
import Produtos from "./Components/Produtos/Produtos";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <ProdutosProvider>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
            <Route path="produto/:id" element={<ProdutoDetalhes />} />
          </Routes>
        </div>
        <Footer />
      </ProdutosProvider>
    </div>
  );
};

export default App;
