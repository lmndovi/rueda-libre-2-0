import React, { useState } from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";

const EventCalendar = () => {
  const [markedDates, setMarkedDates] = useState({
    "2024-01-15": { marked: true, dotColor: "red" },
    "2024-01-22": { marked: true, dotColor: "green" },
    "2024-01-29": { marked: true, dotColor: "yellow" },
  });

  const items = {
    "2024-01-15": [{ text: "King's X", time: "7:30 PM" }],
    "2024-01-22": [{ text: "King's X", time: "7:30 PM" }],
    "2024-01-29": [{ text: "King's X", time: "7:30 PM" }],
  };

  const renderItem = (item) => {
    return (
      <View className="p-4 bg-white mb-2">
        <Text className="text-lg font-bold">{item.text}</Text>
        <Text>{item.time}</Text>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <Agenda items={items} markedDates={markedDates} renderItem={renderItem} />
    </View>
  );
};

export default EventCalendar;
