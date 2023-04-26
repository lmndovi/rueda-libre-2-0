import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { CalendarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const EventsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require("../assets/events-bg.png")}
        className="h-full w-full"
      >
        <SafeAreaView className="justify-center items-center m-2">
          <View className="flex-row items-center justify-center mt-16 ml-32 mb-2">
            <Image
              source={require("../assets/RuedaLibre-logo.png")}
              className="h-20 w-20 mr-32"
            />
          </View>
          <View className="items-center top-8">
            <Text className="text-white text-3xl font-extrabold uppercase mt-3 mb-1">
              March Dates
            </Text>
            <Text className="text-white text-base mb-7 underline">
              Beginner & Rueda Classes
            </Text>
            <Text className="text-white m-5 font-bold text-lg">
              01/03/23 - Kings X - 7:30pm-8:30pm
            </Text>
            <Text className="text-white m-5 font-bold text-lg">
              15/03/23 - Kings X - 7:30pm-8:30pm
            </Text>
            <Text className="text-white m-5 font-bold text-lg">
              22/03/23 - Kings X - 7:30pm-8:30pm
            </Text>
            <Text className="text-white m-5 font-bold text-lg">
              29/03/23 - Kings X - 7:30pm-8:30pm
            </Text>
            <Text className="text-[#daa520] text-sm font-semibold">
              FREE Social after every class, 8:30pm - late
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default EventsScreen;
