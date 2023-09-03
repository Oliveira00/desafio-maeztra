import { InfosLinks } from "./InfosLinks"
import { BottomFooter } from "./BottomFooter"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <InfosLinks />
      <BottomFooter />
    </div>
  )
}

export { Footer };