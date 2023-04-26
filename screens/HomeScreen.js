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
import {
  useFonts,
  DancingScript_700Bold,
  DancingScript_600SemiBold,
} from "@expo-google-fonts/dancing-script";

const HomeScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    DancingScript_600SemiBold,
    DancingScript_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

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

          <View className="flex-row justify-center top-20">
            <ImageCarousel />
          </View>

          {/* Logo and Links */}

          <View className="top-[200px]">
            <View className="items-center space-y-2">
              <View className="items-center justify-center space-y-4 top-[-10px]">
                <Text
                  className="text-white text-5xl font-bold font- top-[-80px]"
                  style={{
                    fontFamily: "DancingScript_700Bold",
                    fontSize: 42,
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  Want to pay for a class?
                </Text>
                <TouchableOpacity
                  className="bg-white rounded-lg h-10 w-32 items-center justify-center bottom-16"
                  onPress={() => navigation.navigate("Payment")}
                >
                  <Text className=" text-lg font-medium">Click Here</Text>
                </TouchableOpacity>
              </View>

              {/* </View> */}
              {/* <View className="items-center"> */}
            </View>
            <View className="flex-row items-center justify-between">
              <View className="mx-3  bottom-1 space-y-[-17px]">
                <TouchableOpacity
                  className="flex-row items-center rounded-full space-x-[-10px]"
                  onPress={() =>
                    Linking.openURL(
                      "https://www.instagram.com/rueda.libre.ldn/?hl=en"
                    )
                  }
                >
                  <SocialIcon
                    type="instagram"
                    button
                    iconSize={22}
                    style={{ backgroundColor: "transparent" }}
                  />
                  <Text className="text-white">Rueda.Libre.LDN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-row items-center space-x-[1px] mx-3"
                  onPress={() => Linking.openURL("https://ruedalibre.co.uk/")}
                >
                  <View className="p-2 bg-transparent rounded-full">
                    <GlobeAltIcon color="white" size={24} />
                  </View>

                  <Text className="text-white">RuedaLibre.co.uk</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={require("../assets/RuedaLibreTitle.png")}
                className="h-[45px] w-[150px] mr-4"
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
