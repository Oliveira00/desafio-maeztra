import styles from "./InfoCard.module.css";

const InfoCard = ({title, text, imageDesk, imageMobile}) => {

  return (
    <div className={styles.InfoCard__Wrapper}>
      <div className={styles.InfoCard__Container}>
        <div className={styles.InfoCard__Content}>
            <h4 className={styles.InfoCard__Title}>
            {title}
            </h4>
            <p className={styles.InfoCard__Description}>
              {text}
            </p>
        </div>
        <img
          className={styles.InfoCard__CollectionImage}
          src={window.innerWidth <= 1024 ? imageMobile : imageDesk}
          alt="Nova Coleção de outono-inverno"
        />
      </div>
    </div>
  )
}

export { InfoCard };
