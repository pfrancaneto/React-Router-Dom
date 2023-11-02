import { Link } from "react-router-dom";
import styles from "./Produtos.module.css";
import { useProdutos } from "../../Context";
import Head from "../Head/Head";

const Produtos = () => {
  const { dados } = useProdutos();

  return (
    <section className={`${styles.root} animeLeft`}>
      <Head title="Ranek | Produtos" description="Essa é a tela de Produtos" />
      {dados.map((produto) => (
        <Link
          className={styles.link}
          to={`produto/${produto.id}`}
          key={produto.id}
        >
          <img
            src={produto.fotos[0].src}
            alt={produto.fotos[0].titulo}
          />
          <h1 className={styles.textoProduto}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
