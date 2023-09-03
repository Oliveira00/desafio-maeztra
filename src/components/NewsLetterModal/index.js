import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import NewsLetterBg from "../../assets/bg-newsletter.jpg"
import { NewsLetterMail } from "../../icons/NewsLetterMail"
import { NewsLetterSubmit } from "../../icons/NewsLetterSubmit"

import styles from "./NewsLetterModal.module.css";

const NewsLetterModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    showModal
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "auto" 
  }, [showModal]);

  return ReactDOM.createPortal(
    <>
      {showModal === true ? (
        <div className={styles.NewsLetterModal__Overlay}>
          <div className={styles.NewsLetterModal__Container}>
            <div
              className={styles.NewsLetterModal__CloseButton}
              onClick={() => setShowModal(false)}
            >
              FECHAR
            </div>
            <div className={styles.NewsLetterModal__ContentContainer}>
              <div className={styles.NewsLetterModal__ContentImageContainer}>
                <img
                  className={styles.NewsLetterModal__ContentImage}
                  src={NewsLetterBg}
                  alt="newsletter-background-img"
                />
              </div>
              
              <div className={styles.NewsLetterModal__ContentWrapper}>
                <div className={styles.NewsLetterModal__Content}>
                  <div className={styles.NewsLetterModal__ContentHeader}>
                    <NewsLetterMail />
                    BEM VINDO À MAEZTRA
                  </div>
    
                  <div className={styles.NewsLetterModal__ContentBody}>
                    Receba em Primeira mão
                    <span>desconto e ofertas exclusivas</span>
                    <input placeholder="Digite seu e-mail" type="text" />
                  </div>
    
                  <button
                    className={styles.NewsLetterModal__ContentButton}
                    onClick={() => setShowModal(false)}
                  >
                    ENVIAR <NewsLetterSubmit />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById('modal-root'),
  );
}

export { NewsLetterModal };
