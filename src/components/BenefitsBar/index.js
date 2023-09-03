import Coupon from "./assets/coupon.png";
import Trade from "./assets/trade.png";
import Truck from "./assets/truck.png";
import Inventory from "./assets/inventory.png";
import Planet from "./assets/planet.png";

import styles from "./BenefitsBar.module.css";

const BenefitsBar = ({ title }) => {

  return (
    <div className={styles.BenefitsBar__Container}>
      <span className={styles.BenefitsBar__Title}>{title}</span>
      <div className={styles.BenefitsBar__List}>
        <div className={styles.BenefitsBar__Item}>
          <img src={Planet} alt="importados" />
          <div className={styles.BenefitsBar__Content}>
            <strong className={styles.BenefitsBar__ItemTitle}>
              Produtos importados
            </strong>
            <span className={styles.BenefitsBar__ItemSubtitle}>
              Produto de Alta Qualidade
            </span>
          </div>
        </div>
        <div className={styles.BenefitsBar__Item}>
          <img src={Inventory} alt="Estoque" />
          <div className={styles.BenefitsBar__Content}>
            <strong className={styles.BenefitsBar__ItemTitle}>
              Estoque no Brazil
            </strong>
            <span className={styles.BenefitsBar__ItemSubtitle}>
              Produtos mais perto de você!
            </span>
          </div>
        </div>
        <div className={styles.BenefitsBar__Item}>
          <img src={Trade} alt="Trocas" />
          <div className={styles.BenefitsBar__Content}>
            <strong className={styles.BenefitsBar__ItemTitle}>
              Trocas Garantidas
            </strong>
            <span className={styles.BenefitsBar__ItemSubtitle}>
              Trocas em até 48 horas, vejas as regras
            </span>
          </div>
        </div>
        <div className={styles.BenefitsBar__Item}>
          <img src={Coupon} alt="Pagamento" />
          <div className={styles.BenefitsBar__Content}>
            <strong className={styles.BenefitsBar__ItemTitle}>Ganhe 5% off</strong>
            <span className={styles.BenefitsBar__ItemSubtitle}>
              Pagando à vista no Cartão
            </span>
          </div>
        </div>
        <div className={styles.BenefitsBar__Item}>
          <img src={Truck} alt="Frete" />
          <div className={styles.BenefitsBar__Content}>
            <strong className={styles.BenefitsBar__ItemTitle}>Frete Grátis</strong>
            <span className={styles.BenefitsBar__ItemSubtitle}>
              Em compras acima de R$ 499,00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BenefitsBar };
