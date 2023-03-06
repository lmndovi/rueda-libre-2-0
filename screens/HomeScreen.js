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
import { SocialIcon } from "@rneui/themed";
import ImageCarousel from "../components/ImageCarousel";

const HomeScreen = () => {
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

          {/* Image Carousel */}

          <View className="flex-row justify-center top-16">
            <ImageCarousel />
          </View>

          {/* Logo and Links */}

          <View className="top-[200px]">
            <View className="items-center">
              <Image
                source={require("../assets/RuedaLibreTitle.png")}
                className="w-40 h-12 bottom-12"
              />
            </View>
            <View className="mx-3 space-y-1 bottom-8">
              <TouchableOpacity
                className="flex-row items-center space-x-2 rounded-full"
                onPress={() =>
                  Linking.openURL(
                    "https://www.instagram.com/rueda.libre.ldn/?hl=en"
                  )
                }
              >
                <SocialIcon type="instagram" button iconSize={22} />
                <Text className="text-white">Rueda.Libre.LDN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row items-center space-x-5 mx-2"
                onPress={() => Linking.openURL("https://ruedalibre.co.uk/")}
              >
                <View className="p-2 bg-[#3f729b] rounded-full">
                  <GlobeAltIcon color="white" size={26} className="z-100" />
                </View>

                <Text className="text-white">RuedaLibre.co.uk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
