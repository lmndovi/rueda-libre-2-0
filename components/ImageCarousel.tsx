import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Carousel } from "react-native-auto-carousel";
import { FlatListSlider } from "react-native-flatlist-slider";

const images = [
  {
    image:
      "https://mimomento.at/wp-content/uploads/2021/05/Rueda-de-Casino-Vienna.png",
    title: "Image 1",
  },
  {
    image:
      "https://i.pinimg.com/originals/5e/71/93/5e719392616786bd48acf0938a3a8f09.jpg",
    title: "Image 2",
  },
  {
    image:
      "https://www.detourswithmatt.com/wp-content/uploads/2016/02/rueda-de-casino-755x400.jpg",
    title: "Image 3",
  },
  {
    image:
      "https://sonycasino.files.wordpress.com/2014/08/competencia-rueda-casino-camaguey-09.jpg?w=580",
    title: "Image 4",
  },
  {
    image: "https://i.ytimg.com/vi/b4jaXaC1P04/maxresdefault.jpg",
    title: "Image 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9VInXjrSgRj4EHb5uQbWWPevhai6KGpxuw&usqp=CAU",
    title: "Image 6",
  },
];

const ImageCarousel = () => {
  return (
    <View className="w-[1212px]">
      {/* <ScrollView horizontal className="w-screen"> */}
      {/* Create an image carousel from Sanity backend  */}

      {/* {images.map((image, i) => (
          <Image
            key={i}
            source={{
              uri: image,
            }}
            className="h-72 w-screen rounded-md shadow-md"
          />
        ))} */}

      {/* {images.map((image, i) => (
          <FlastListSlider key={i} data={images}
            className="h-72 w-screen rounded-md shadow-md"
          />
        ))} */}

      <FlatListSlider
        data={images}
        height={240}
        className="w-screen"
        timer={5000}
        onPress={(item) => alert(JSON.stringify(item.title))}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
        indicatorActiveColor={"#fff"}
        indicatorInActiveColor={"#ffffff"}
        indicatorActiveWidth={30}
        animation
      />
      {/* </ScrollView> */}
    </View>
  );
};

export default ImageCarousel;
