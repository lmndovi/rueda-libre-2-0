import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { XCircleIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import YouTubeVideo from "../components/YouTubeVideo";
import { ScrollView } from "react-native";

const IntroClassScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="">
      <ImageBackground
        source={require("../assets/classes-bg.png")}
        className="h-full w-full"
      >
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className="flex-row justify-end mr-4 items-center top-[30px] space-x-2">
              <XCircleIcon size={30} color="white" />
              <Text className="text-white font-semibold"></Text>
            </View>
          </TouchableOpacity>
          <View className="flex-row items-center justify-center mt-16 ml-32">
            <Image
              source={require("../assets/RuedaLibre-logo.png")}
              className="h-20 w-20 mr-32"
            />
          </View>
          <ScrollView horizontal className="flex-row space-x-5 top-16 mx-1">
            <View className="h-72 w-96 space-y-3">
              {/* On the Spot */}
              <YouTubeVideo videoId="MDEAN40DUVY" />
              <Text className="text-center text-[#daa520] font-bold text-lg">
                Arriba
              </Text>
            </View>
            <View className="h-72 w-96 space-y-3">
              {/* On the Spot */}
              <YouTubeVideo videoId="MDEAN40DUVY" />
              <Text className="text-center text-[#daa520] font-bold text-lg">
                Arriba
              </Text>
            </View>
            <View className="h-72 w-96 space-y-3">
              {/* On the Spot */}
              <YouTubeVideo videoId="MDEAN40DUVY" />
              <Text className="text-center text-[#daa520] font-bold text-lg">
                Arriba
              </Text>
            </View>
            <View className="h-72 w-96 space-y-3">
              {/* On the Spot */}
              <YouTubeVideo videoId="MDEAN40DUVY" />
              <Text className="text-center text-[#daa520] font-bold text-lg">
                Arriba
              </Text>
            </View>
            <View className="h-72 w-96 space-y-3">
              {/* On the Spot */}
              <YouTubeVideo videoId="MDEAN40DUVY" />
              <Text className="text-center text-[#daa520] font-bold text-lg">
                Arriba
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default IntroClassScreen;
