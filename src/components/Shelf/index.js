import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import styles from './Shelf.module.css';


const Shelf = ({ title, items }) => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  const nextArrowClass = `carousel-next-${randomNumber}`;
  const prevArrowClass = `carousel-previous-${randomNumber}`;

  const defaultSwipeOptions = {
    preloadImages: false,
    lazy: true,
    loop: true,
    slidesPerView: 5,
    slidesPerColumnFill: 'row',
    navigation: {
      nextEl: `.${nextArrowClass}`,
      prevEl: `.${prevArrowClass}`,
    },
    breakpoints: {
      1600: {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 5,
      },
      1320: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    }
  };

  return (
          <div className={styles.CustomProductImage_Wrapper}>
            <h3 className={styles.Shelf__Title}>{title}</h3>
            <div className={styles.CustomProductImage_SwiperContainer}>
            <PrevArrow
              role="button"
              aria-label="Previous slide"
              className={`${styles.CustomProductImage_SwiperArrow} ${prevArrowClass}`}
            />
            <Swiper
              modules={[Navigation, Pagination]}
              style={{ width: '100%' }}
              className={styles.CustomProductImage_SwiperSlide}
              {...defaultSwipeOptions}
              autoHeight={false}
              pagination={{ clickable: true }}
            >
              {items?.map((item, index) => (
                <SwiperSlide className={styles.CustomProductImage_SwiperSlideItem} key={index}>
                  <img
                    src={item?.img}
                    alt="produto"
                  />
                  <div className={styles.Shelf__ProductsContainer}>
                    <div className={styles.Shelf__ColorsContainer}>
                      {item?.colors.map((color) => (
                        <div
                          className={`${styles.Shelf__Colors}`}
                          key={color}
                          style={{ background: color }}
                        />
                      ))}
                    </div>
                    <h1 className={styles.Shelf__Price}>{item?.price}</h1>
                    <span className={styles.Shelf__Name}>{items?.name}</span>
                    <div className={styles.Shelf__Desc}>{item?.description}</div>
                    <button className={styles.Shelf__Button} type='button'>Adicionar</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <NextArrow
              role="button"
              aria-label="Next slide"
              className={`${styles.CustomProductImage_SwiperArrow} ${nextArrowClass}`}
            />
          </div>
          </div>
  );
};

const PrevArrow = (props) => (
  <button {...props}>
    <svg
      style={{ transform: 'rotate(180deg)' }}
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 16 16"
      className="vtex-store-components-3-x-caretIcon vtex-store-components-3-x-caretIcon--image-producto"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use href="#nav-caret--right" xlinkHref="#nav-caret--right" />
    </svg>
  </button>
);

const NextArrow = (props) => (
  <button {...props}>
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 16 16"
      className="vtex-store-components-3-x-caretIcon vtex-store-components-3-x-caretIcon--image-producto"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <use href="#nav-caret--right" xlinkHref="#nav-caret--right" />
    </svg>
  </button>
);

export { Shelf };
