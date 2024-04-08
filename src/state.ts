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
        src: "https://www.mykingdom.com.vn/cdn/shop/files/1280x496.png?v=1711937990&width=1200",
      },
      {
        id: "2",
        name: "swipper 2",
        src: "https://theme.hstatic.net/1000300281/1001160074/14/slide_2_img.jpg?v=187",
      },
      {
        id: "3",
        name: "swipper 3",
        src: "https://theme.hstatic.net/1000300281/1001160074/14/slide_2_img.jpg?v=187",
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
    { id: 1, name: "Tích điểm", src: price, color: "#e6eaf3" },
    { id: 2, name: "Ưu đãi", src: gift, color: "#e6e9de" },
    { id: 3, name: "Đặt hàng", src: cart, color: "#f4f4da" },
    { id: 4, name: "Liên hệ", src: contact, color: "#f3ebde" },
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
        name: "Đồ chơi",
        src: "https://www.mykingdom.com.vn/cdn/shop/files/mykingdom-balo-di-hoc-BC0105_2.jpg?v=1711361626&width=1100",
        url: "#",
      },
      {
        id: "2",
        name: "Búp bê",
        src: "https://cdn.shopify.com/s/files/1/0731/6514/4343/files/c90229e743a03b3c77d47c8964faf9e6.jpg?v=1706860874&width=400",
        url: "#",
      },
      {
        id: "3",
        name: "Robot",
        src: "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/301125_3_f943bb53-7495-49be-a7d1-0cfb0748118b.jpg?v=1707003541&width=400",
        url: "#",
      },
      {
        id: "4",
        name: "Lắp ráp",
        src: "https://cdn.shopify.com/s/files/1/0731/6514/4343/products/lego-42134_3.jpg?v=1706993506&width=400",
        url: "#",
      },
    ];
  },
});

//product

export const productState = atom({
  key: "products",
  default: [],
});

export const fetchDataToProduct = selector({
  key: "fetchDataToProduct",
  get: () => {
    return [
      {
        id: "1",
        name: "đồ chơi",
        description: "mo ta",
        slug: "sad",
        price: 200,
        image: 100,
        price_sale: 100,
        quantity: 1,
      },
    ];
  },
});
