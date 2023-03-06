import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  GlobeAltIcon,
  CameraIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#800000]">
      <ImageBackground
        source={require("../assets/home-bg.png")}
        className="h-full w-full mt-10"
      >
        <SafeAreaView>
          <View className="flex-row items-center justify-center mt-16 ml-32">
            <Image
              source={require("../assets/RuedaLibre-logo.png")}
              className="h-20 w-20 mr-32"
            />
          </View>
          <View className="flex justify-center items-center space-y-5">
            <Image
              source={require("../assets/big3.jpg")}
              className="h-60 w-60 rounded-full mt-10"
            />
            {/* About Text */}
            <Text className="text-center text-white font-bold text-2xl w-60">
              Nourishing a Growing Community of Latin Dancers
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default AboutScreen;
