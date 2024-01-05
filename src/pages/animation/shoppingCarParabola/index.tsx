import React, { useEffect, useState } from "react";
import PlusSvg from "./assets/plus.svg";
import CartSvg from "./assets/cart.svg";
import styles from "./index.module.scss";
import ReactDOMServer from "react-dom/server";

const PLUS_ICON_WIDTH = 24;
const PLUS_ICON_HEIGHT = 24;

const CART_WIDTH = 48;

const ShoppingCarParabola = () => {
  // const [positionStyle, setPositionStyle] = useState<{ [x: string]: string }>({
  //   "--y": "56px",
  // });

  const positionStyle: { [x: string]: string } = {
    "--y": "56px",
  };

  const createAnimation = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = e.target as HTMLElement;
    const btnRect = btn.getBoundingClientRect();
    const top = btnRect.top - PLUS_ICON_HEIGHT;
    const left = btnRect.left + btnRect.width / 2 - PLUS_ICON_WIDTH / 2;

    const targetEle = document.getElementById("cart") as HTMLElement;
    const targetRect = targetEle?.getBoundingClientRect();
    const x = targetRect.left + CART_WIDTH / 2 - PLUS_ICON_WIDTH / 2 - left;
    const y = targetRect.top - top - PLUS_ICON_HEIGHT;

    const newComponent = document.createElement("div");
    newComponent.classList.add(styles.plusWrapper);

    newComponent.style.setProperty("--x", `${x}`);
    newComponent.style.setProperty("--y", `${y}`);
    // newComponent.style.setProperty("--top", `${top}`);
    // newComponent.style.setProperty("--left", `${left}`);
    // newComponent.style.setProperty(
    //   "animation",
    //   `moveY 3s cubic-bezier(0.5, -0.5, 1, 1)`
    // );

    newComponent.style.cssText = `top:${top}px;left:${left}px;--x:${x}px;--y:${y}px`;

    newComponent.innerHTML = ReactDOMServer.renderToString(
      <img
        className={styles.plusIcon}
        src={PlusSvg}
        width={24}
        height={24}
        alt="add"
      />
    );

    newComponent.addEventListener("animationend", () => {
      newComponent.remove();
      targetEle.classList.add(styles.scaleAnimationClass);
    });

    document.body.appendChild(newComponent);
  };

  useEffect(() => {
    const targetEle = document.getElementById("cart") as HTMLElement;
    targetEle.addEventListener("animationend", () => {
      targetEle.classList.remove(styles.scaleAnimationClass);
    });
    return () => {
      const targetEle = document.getElementById("cart") as HTMLElement;
      targetEle &&
        targetEle.removeEventListener("animationend", () => {
          console.log(1111);
        });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.addButton}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => createAnimation(e)}
      >
        <button style={{ width: "100%", height: "100%" }}>添加</button>
      </div>

      <div className={styles.cartWrapper} id="cart">
        <img src={CartSvg} width={48} height={48} />
      </div>
    </div>
  );
};

export default ShoppingCarParabola;
