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
          <View className="flex-row items-center justify-center space-x-4">
            <Image
              source={require("../assets/big3.jpg")}
              className="h-32 w-32 rounded-full mt-10"
            />
            {/* About Text */}
            <Text className=" text-white font-bold text-2xl w-60 ">
              Spreading our love for Rueda de Casino!
            </Text>
          </View>
          <View className="space-y-8 mt-10 mx-3">
            <Text className="text-white text-lg">
              Rueda de Casino - we love it and we know you do too! Rueda is one
              of the most fun ways to enjoy Salsa. It consists of a group of
              people all dancing together in a circle with one person calling
              the moves.
            </Text>
            <Text className="text-white text-lg">
              It started out as a street dance battle in the streets of Cuba and
              it's very popular all over the world, so jump in! Join one of our
              classes to become familiar with the calls and experience the fun
              for yourself!
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default AboutScreen;
