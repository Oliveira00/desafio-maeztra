import DressIcon from "../../../icons/DressIcon";

import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.Menu__Container}>
      <button className={styles.Menu__MenuItemActive}>
        <DressIcon />
        <span className={styles.Menu__MenuItemItem}>Novidades</span>
      </button>
      <button className={styles.Menu__MenuItem}>
        <span className={styles.Menu__MenuItemItem}>Vestidos</span>
      </button>
      <button className={styles.Menu__MenuItem}>
        <span className={styles.Menu__MenuItemItem}>Roupas</span>
      </button>
      <button className={styles.Menu__MenuItem}>
        <span className={styles.Menu__MenuItemItem}>Sapatos</span>
      </button>
      <button className={styles.Menu__MenuItem}>
        <span className={styles.Menu__MenuItemItem}>Lingerie</span>
      </button>
      <button className={styles.Menu__MenuItem}>
        <span className={styles.Menu__MenuItemItem}>Acessórios</span>
      </button>
      <button className={styles.Menu__MenuItem}>
        <span className={styles.Menu__MenuItemItem}>OUTLET</span>
      </button>
    </div>
  )
}

export { Menu };
