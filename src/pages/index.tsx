import Image from "next/image";
import "../styles/index.module.css";

export default function Index() {
  return (
    <main>
      <section className="images">
        <Image className="images_main" src="" alt="sneakers" />
        <div className="previews">
          <Image className="previews_item" src="" alt="sneakers" />
          <Image className="previews_item" src="" alt="sneakers" />
          <Image className="previews_item" src="" alt="sneakers" />
          <Image className="previews_item" src="" alt="sneakers" />
        </div>
      </section>
      <section className="info}">
        <h2 className="collection">sneaker company</h2>
        <h1 className="name">fall limited edition sneakers</h1>
        <p className="description">
          these low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole. They'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <span className="price_value">$125.00</span>
          <span className="price_discount">50%</span>
        </div>
        <span className="old_price">$250.00</span>
        <div className="action">
          <div className="amount">
            <button className="amount_decrease">-</button>
            <span className="amount_value">0</span>
            <button className="amount_increase">+</button>
          </div>
          <button className="action_btn">
            <Image className="btn_icon" src="#" alt="cart icon" />
            <span className="btn_text">Add to cart</span>
          </button>
        </div>
      </section>
    </main>
  );
}
