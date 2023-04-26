import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { TouchableOpacity } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { HomeIcon } from "react-native-heroicons/solid";
import { CreditCardIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:3000 ";

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const buy = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "The payment was confirmed successfully");
      setReady(false);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  // const [publishableKey, setPublishableKey] = useState("");

  return (
    <StripeProvider publishableKey="pk_test_51MjSnfJBzGorYhtOxdluSjGQ06ZGu4HXhyBVD4WA9MqkK2ZizF1gTGwDnIyIbyjmMI7LuIQEi7C9s0b8hSICPkJg00Q4sFjL3V">
      <View className="">
        <ImageBackground
          source={require("../assets/classes-bg.png")}
          className="h-full w-full"
        >
          <SafeAreaView>
            <View className="flex-row items-center justify-center mt-16 ml-32">
              <Image
                source={require("../assets/RuedaLibre-logo.png")}
                className="h-20 w-20 mr-32"
              />
            </View>
            <View className="items-center justify-center mt-40 h-20 w-screen space-y-10">
              {/* <View>
                <Image
                  source={require("../assets/big3.jpg")}
                  className="h-32 w-32 rounded-full mt-10"
                />
              </View> */}
              <View className="items-center space-y-2">
                <Text className=" text-gray-400 text-xl font-semibold">
                  Class
                </Text>
                <Text className="text-white text-4xl font-semibold">£8.00</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-white text-xl font-semibold">
                  Select Your Payment Method:
                </Text>
              </TouchableOpacity>
              <View className="flex-row justify-center items-center space-x-5">
                <Button
                  disabled={loading}
                  title="Card"
                  onPress={openPaymentSheet}
                ></Button>
                <TouchableOpacity className="bg-white rounded-md h-8 w-14 items-center justify-center">
                  <FontAwesome5 name="apple-pay" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white rounded-md h-8 w-14 items-center justify-center">
                  <FontAwesome5 name="google-pay" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View className="top-[240px]">
                <TouchableOpacity
                  className="bg-white  rounded-full h-12 w-12 items-center justify-center"
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  <HomeIcon size={24} color="#800000" />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </StripeProvider>
  );
};

export default PaymentScreen;
