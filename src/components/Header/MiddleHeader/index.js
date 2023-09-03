import BagIcon from "../../../icons/BagIcon";
import HeartIcon from "../../../icons/HeartIcon";
import PersonIcon from "../../../icons/PersonIcon";
import MobileSearch from "../../../assets/search.png";
import MobileBag from "../../../assets/bag.png";
import MobileMenuIcon from "../../../assets/icon-menu.png";
import LogoMobile from "../../../assets/logoMobile.png";
import Logo from "../../../assets/logo.png";

import styles from "./MiddleHeader.module.css";

const MiddleHeader = () =>  {
  return (
    <header className={styles.MiddleHeader__Container}>
      <div className={styles.MiddleHeader__Wrapper}>
        {window.innerWidth >= 1024 ? (
          <img className={styles.MiddleHeader__Logo} src={Logo} alt="Logo" />
          ) : (
          <div className={styles.MiddleHeader__MenuMobileContainer}>
            <img className={styles.MiddleHeader__MenuIcon} src={MobileMenuIcon} alt="Menu" />
            <img className={styles.MiddleHeader__LogoMobile} src={LogoMobile} alt="Logo" />
          </div>
        )}
        <div className={styles.MiddleHeader__InputContainer}>
          <input className={styles.MiddleHeader__Input} placeholder="O Que Você Busca?"/>
          <button className={styles.MiddleHeader__InputButton}>
            Buscar
          </button>
        </div>
        <div className={styles.MiddleHeader__ButtonsContainer}>
          {window.innerWidth >= 1024 ? (
            <>
              <button className={styles.MiddleHeader__Button}>
                <PersonIcon />
                Minha Conta
              </button>
              <button className={styles.MiddleHeader__Button}>
                <HeartIcon />
                Lista de Desejos
              </button>
              <button className={styles.MiddleHeader__Cart}>
                <BagIcon />
                Meu Carrinho
              </button>
            </>
          ) : (
            <div className={styles.MiddleHeader__MobileItemsContainer}>
              <img src={MobileSearch} alt="search" />
              <img src={MobileBag} alt="Cart" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { MiddleHeader }
