import ImageHOC from "../HOC/ImageHOC";
import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <main className={styles.container}>
      <section className={styles.images}>
        <ImageHOC
          classWrapper={styles.images_main}
          src="/image-product-1.jpg"
          alt="sneakers"
        />
        <div className={styles.previews}>
          <ImageHOC
            classWrapper={styles.previews_item}
            src="/image-product-1-thumbnail.jpg"
            alt="sneakers"
          />
          <ImageHOC
            classWrapper={styles.previews_item}
            src="/image-product-2-thumbnail.jpg"
            alt="sneakers"
          />
          <ImageHOC
            classWrapper={styles.previews_item}
            src="/image-product-3-thumbnail.jpg"
            alt="sneakers"
          />
          <ImageHOC
            classWrapper={styles.previews_item}
            src="/image-product-4-thumbnail.jpg"
            alt="sneakers"
          />
        </div>
      </section>
      <section className={styles.info}>
        <h2 className={styles.collection}>sneaker company</h2>
        <h1 className={styles.name}>fall limited edition sneakers</h1>
        <p className={styles.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole. They&apos;ll withstand
          everything the weather can offer.
        </p>
        <div className={styles.price}>
          <span className={styles.price_value}>$125.00</span>
          <span className={styles.price_discount}>50%</span>
        </div>
        <span className={styles.old_price}>$250.00</span>
        <div className={styles.action}>
          <div className={styles.amount}>
            <button className={styles.amount_decrease}>-</button>
            <span className={styles.amount_value}>0</span>
            <button className={styles.amount_increase}>+</button>
          </div>
          <button className={styles.action_btn}>
            <svg
              className={styles.btn_icon}
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
            <span className={styles.btn_text}>Add to cart</span>
          </button>
        </div>
      </section>
    </main>
  );
}
