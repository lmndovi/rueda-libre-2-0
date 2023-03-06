import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { XCircleIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const BasicClassScreen = () => {
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
          <View className="flex-row items-center justify-center mt-12 ml-32">
            <Image
              source={require("../assets/RuedaLibre-logo.png")}
              className="h-20 w-20 mr-32"
            />
          </View>

          {/* Dile Que No */}

          {/* Dame */}

          {/* Enchufla*/}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BasicClassScreen;
