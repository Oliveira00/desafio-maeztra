import { Topbar } from "./Topbar";
import { MiddleHeader } from "./MiddleHeader";
import { Menu } from "./Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <Topbar />
      <MiddleHeader />
      <Menu />
    </div>
  )
}

export { Header };