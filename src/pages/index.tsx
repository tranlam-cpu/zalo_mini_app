import React, { useEffect } from "react";
import {
  List,
  Page,
  Icon,
  Swiper,
  Input,
  useNavigate,
  BottomNavigation,
  Box,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { swiperState, featureState, categoryState } from "../state";
import { useLoadSwiper } from "../utils/swiperService";
import UserCard from "../components/user-card";
import Feature from "../components/feature";
import Categories from "../components/category";
import Product from "../components/product";
import { useLoadCateogry } from "../utils/categoryService";

const HomePage: React.FunctionComponent = () => {
  // const user = useRecoilValue(userState);
  //state selection
  const swiper = useRecoilValue(swiperState);
  const categories = useRecoilValue(categoryState);
  // const navigate = useNavigate();
  //get state from service
  const loadSwiper = useLoadSwiper();
  const loadCategory = useLoadCateogry();

  const features = useRecoilValue(featureState);

  useEffect(() => {
    loadSwiper();
    loadCategory();
  }, [loadSwiper, loadCategory]);

  return (
    <>
      <Box
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Swiper style={{ borderRadius: 0 }} autoplay duration={5000} loop>
          {swiper?.map((data: any) => {
            return (
              <Swiper.Slide key={data.id}>
                <img className="rounded-none" src={data.src} alt={data.name} />
              </Swiper.Slide>
            );
          })}
        </Swiper>
      </Box>

      <div className="page">
        <Input.Search
          label="Label"
          helperText="Helper text"
          placeholder="tìm kiếm"
          onSearch={(text) => console.log(text)}
        />
      </div>

      <div className="flex flex-row gap-2 mx-5 pb-5 border-b overflow overflow-auto">
        {features?.map((value, index) => {
          return <Feature key={index} feats={value} />;
        })}
      </div>

      <div className="mx-5 py-4 grid grid-cols-4 justify-items-center gap-y-0 gap-x-3">
        {categories?.map((value: any) => {
          return <Categories key={value.id} category={value} />;
        })}
      </div>

      <div className="mx-5 pb-4 flex flex-row justify-between ">
        <h4 className="font-bold">Sản phẩm mới</h4>
        <p className="text-slate-500">Tất cả</p>
      </div>

      <div className="mx-5 grid grid-cols-2 justify-items-center gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};

export default HomePage;
