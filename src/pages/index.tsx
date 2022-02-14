import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <Image src="" alt="sneakers" />
        <div>
          <Image src="" alt="sneakers" />
          <Image src="" alt="sneakers" />
          <Image src="" alt="sneakers" />
          <Image src="" alt="sneakers" />
        </div>
      </div>
      <div>
        <h2>sneaker company</h2>
        <h1>fall limited edition sneakers</h1>
        <p>
          these low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole. They'll withstand everything
          the weather can offer.
        </p>
        <div>
          <span>$125.00</span>
          <span>50%</span>
        </div>
        <span>$250.00</span>
        <div>
          <div>
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </div>
          <button>
            <Image src="#" alt="" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}
