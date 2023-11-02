import { createContext, useContext, useEffect, useState } from "react";

export const ProdutosContext = createContext();

const ProdutosProvider = ({ children }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  const values = {
    dados,
    setDados,
  };

  return (
    <ProdutosContext.Provider value={values}>
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutos = () => {
  const context = useContext(ProdutosContext);

  if (!context) {
    throw new Error("Precisa do context");
  }

  return context;
};

export default ProdutosProvider;
