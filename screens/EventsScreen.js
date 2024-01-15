import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  Modal,
} from "react-native";
import { CalendarIcon } from "react-native-heroicons/solid";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import EventCalendar from "../components/EventCalendar";

const EventsScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

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
            <TouchableOpacity className="">
              <Text className="text-white m-5 font-bold text-lg">
                08/03/23 - Kings X - 7:30pm-8:30pm
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="">
              <Text className="text-white m-5 font-bold text-lg">
                15/03/23 - Kings X - 7:30pm-8:30pm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="">
              <Text className="text-white m-5 font-bold text-lg">
                22/03/23 - Kings X - 7:30pm-8:30pm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="">
              <Text className="text-white m-5 font-bold text-lg">
                29/03/23 - Kings X - 7:30pm-8:30pm
              </Text>
            </TouchableOpacity>
            <Text className="text-[#daa520] text-sm font-semibold">
              FREE Social after every class, 8:30pm - late
            </Text>
          </View>
          <TouchableOpacity
            className="relative flex flex-row items-center justify-center -bottom-12 bg-[#fff] px-3 py-2 rounded-2xl space-x-2 shadow-md border-2 border-gray-600"
            onPress={() => {
              toggleModal();
              toggleCalendar();
            }}
          >
            <Text className="text-lg ">Full Calendar</Text>
            <CalendarIcon height={20} width={20} color="black" />
          </TouchableOpacity>
          {/* <View className="w-full h-full">
            <EventCalendar />
          </View> */}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default EventsScreen;
