import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk";
import price from "./static/images/price.png";
import gift from "./static/images/gift.png";
import cart from "./static/images/cart.png";
import contact from "./static/images/contact.png";
import Toy from "./static/images/toy1.png";
export const userState = selector({
  key: "user",
  get: () =>
    getUserInfo({
      avatarType: "normal",
    }),
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});

export const swiperState = atom({
  key: "swipperList",
  default: [],
});

export const fetchDataToSwiper = selector({
  key: "fetchDataToSwiper",
  get: () => {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();

    return [
      {
        id: "1",
        name: "swipper 1",
        src: "https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg",
      },
      {
        id: "2",
        name: "swipper 2",
        src: "https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg",
      },
      {
        id: "3",
        name: "swipper 3",
        src: "https://stc-zmp.zadn.vn/zmp-zaui/images/321fb45f18f6c4a89de78.jpg",
      },
    ];
  },
});

export const bottomNavigationState = atom({
  key: "bottomNavigation",
  default: "home",
});

export const featureState = atom({
  key: "feature",
  default: [
    { id: 1, name: "tích điểm mua sắm", src: price, color: "#e6eaf3" },
    { id: 2, name: "ưu đãi", src: gift, color: "#e6e9de" },
    { id: 3, name: "đặt hàng", src: cart, color: "#f4f4da" },
    { id: 4, name: "liên hệ", src: contact, color: "#f3ebde" },
  ],
});

export const categoryState = atom({
  key: "category",
  default: [],
});

export const fetchDataToCategory = selector({
  key: "fetchDataToCategory",
  get: () => {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();

    return [
      {
        id: "1",
        name: "đồ chơi",
        src: Toy,
        url: "#",
      },
      {
        id: "2",
        name: "gia dụng",
        src: Toy,
        url: "#",
      },
      {
        id: "3",
        name: "xích đu em bé",
        src: Toy,
        url: "#",
      },
    ];
  },
});
