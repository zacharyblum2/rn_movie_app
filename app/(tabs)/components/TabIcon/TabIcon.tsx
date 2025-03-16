import React from "react";
import { Image, Text, View, ImageBackground } from "react-native";
import { images } from "@/constants/images";
import { TabIconProps } from "./types";

export const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  if (!focused) {
    return (
      <View className="justify-center items-center mt-4 min-h-16 min-w-[50px] rounded-full">
        <Image source={icon} tintColor={"#A8B5DB"} className="size-5" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 
      mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} tintColor={"#151312"} className="size-5" />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </ImageBackground>
  );
};
