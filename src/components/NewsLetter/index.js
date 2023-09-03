import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.NewsLetter__Container}>
      <span>Receba Nossa NewsLetter</span>

      <div className={styles.NewsLetter__InputContainer}>
        <input placeholder="Digite seu e-mail" />
        <button>Enviar</button>
      </div>
    </div>
  )
}

export { NewsLetter };
