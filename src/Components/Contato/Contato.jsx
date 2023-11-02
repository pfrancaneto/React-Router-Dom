import styles from './Contato.module.css';
import foto from '../../img/phone.jpg';
import Head from '../Head/Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Ranek | Contato' description='Entre em contato' />
      <img src={foto} alt="Foto Contato" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>andre@origamid.com.br</li>
          <li>9999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;