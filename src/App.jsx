import { Fragment } from 'react';
import styles from './App.module.css';
import logo_bsf from './assets/logo_carrefour.png';
import img_bt1 from './assets/img-bt1.png';
import img_bt2 from './assets/img-bt2.png';
import img_bt3 from './assets/img-bt3.png';
import boton_llamar from './assets/boton llamar.png';
import stores from './assets/stores.png';
import qr from './assets/qr.png';
import '@fontsource/roboto';

export const App = () => {
  const handleClick = (e) => {
    console.log('adflasdf');
    e.preventDefault();
    window.open('https://freetech.com.ar:4443/intra/', '_blank', 'toolbar=yes,scrollbars=yes,top=100,left=400,width=500,height=300');
  };

  return (
    <Fragment>
      <div className={styles.logo_container}>
        <img
          src={logo_bsf}
          alt='bsf'
          className={styles.logo}
        />
      </div>
      <div className={styles.content_container}>
        <div className={styles.title_container}>
          <label className={styles.title}>Bienvenid@ a la terminal de autoservicio</label>
          <label className={styles.subtitle}>Para comenzar seleccioná una opción</label>
        </div>
        <div className={styles.botonera}>
          <button className={styles.bt1}>
            <img
              src={img_bt1}
              className={styles.img}
            />
            <label>Disponible y pago mínimo</label>
          </button>
          <button className={styles.bt2}>
            <img
              src={img_bt2}
              className={styles.img}
            />
            <label>Disponible y pago mínimo </label>
          </button>
          <button className={styles.bt3}>
            <img
              src={img_bt3}
              className={styles.img}
            />
            <label>Disponible y pago mínimo</label>
          </button>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.bt_llamar}
            onClick={handleClick}>
            <img src={boton_llamar} />
          </button>
          <div className={styles.stores}>
            <label>Descargá la app de Tarjeta Carrefour</label>
            <img src={stores} />
          </div>
          <img
            src={qr}
            className={styles.qr}
          />
        </div>
      </div>
    </Fragment>
  );
};
