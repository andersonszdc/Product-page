import Image from "next/image";
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
            <Image
              className={styles.btn_icon}
              width="24"
              height="24"
              src="/icon-cart.svg"
              alt="cart icon"
            />
            <span className={styles.btn_text}>Add to cart</span>
          </button>
        </div>
      </section>
    </main>
  );
}
