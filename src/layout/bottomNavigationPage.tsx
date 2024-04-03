import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { BottomNavigation, Icon, Page } from "zmp-ui";
import { bottomNavigationState } from "../state";

const BottomNavigationPage = (props) => {
  const [activeTab, setActiveTab] = useRecoilState(bottomNavigationState);
  const { title } = props;
  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
    >
      <BottomNavigation.Item
        key="home"
        linkTo="/"
        label="Trang chủ"
        icon={<Icon icon="zi-home" />}
        activeIcon={<Icon icon="zi-home" />}
      />
      <BottomNavigation.Item
        label="Danh bạ"
        key="contact"
        icon={<Icon icon="zi-call" />}
        activeIcon={<Icon icon="zi-call-solid" />}
      />
      <BottomNavigation.Item
        label="Khám phá"
        key="discovery"
        icon={<Icon icon="zi-more-grid" />}
        activeIcon={<Icon icon="zi-more-grid-solid" />}
      />
      <BottomNavigation.Item
        key="timeline"
        label="Nhật ký"
        icon={<Icon icon="zi-clock-1" />}
        activeIcon={<Icon icon="zi-clock-1-solid" />}
      />
      <BottomNavigation.Item
        key="me"
        linkTo="/user"
        label="Cá nhân"
        icon={<Icon icon="zi-user" />}
        activeIcon={<Icon icon="zi-user-solid" />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationPage;
