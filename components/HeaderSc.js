import * as React from "react";
import { Header, Icon } from "@rneui/base";

export default function () {
  return (
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "MY TITLE",
        style: { color: "#fff" },
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: 450 }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{ icon: "home", color: "#fff" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
}
