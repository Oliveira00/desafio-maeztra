import { items } from "./InfosLinksItems";

import styles from "./InfosLinks.module.css";

const InfosLinks = () => {
  const linkItems = items;
  return (
    <>
      {window.innerWidth >= 1024 ? (
        <footer className={styles.InfosLinks__Container}>
          {
            linkItems.map(({ title, links }) => {
              return (
                <div className={styles.InfosLinks__Column}>
                  <h5 className={styles.InfosLinks__ColumnTitle}>{title}</h5>
                  {links.map(({ text, url }) => (
                    <a className={styles.InfosLinks__ColumnItem} href={url}>{text}</a>
                  ))}
                </div>
              )
            })
          }
        </footer>
        ) : (
        <div className={styles.InfosLinks__Accordion}>
          {linkItems.map(({ title, links }) => {
            return (
              <label for={title} className={styles.InfosLinks__AccordionContainer}>
                <input type="checkbox" id={title} />
                <div className={styles.InfosLinks__AccordionTitle}>{title}</div>
                <div className={styles.InfosLinks__AccordionLinksContainer}>
                  {links.map(({ text, url }) => (
                    <a className={styles.InfosLinks__AccordionLinks} href={url}>{text}</a>
                  ))}
                </div>
              </label>
            )
          })}
        </div>
        )}
    </>
  )
}

export { InfosLinks };
