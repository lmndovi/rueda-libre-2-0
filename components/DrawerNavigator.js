import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import BasicClassScreen from "../screens/BasicClassScreen";
import IntroClassScreen from "../screens/IntroClassScreen";
import PlusClassScreen from "../screens/PlusClassScreen";
import EventsScreen from "../screens/EventsScreen";
import HomeScreen from "../screens/HomeScreen";
import ClassLandingScreen from "../screens/ClassLandingScreen";
import AboutScreen from "../screens/AboutScreen";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#800000" },
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#800000" },
        }}
      />
      <Drawer.Screen
        name="Events"
        component={EventsScreen}
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#00162d" },
        }}
      />

      <Drawer.Screen
        name="Classes"
        component={ClassesStack}
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#00162d" },
        }}
      />
    </Drawer.Navigator>
  );
};

const ClassesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={ClassLandingScreen}
        options={{
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#00162d" },
        }}
      />
      <Stack.Screen
        name="Intro"
        component={IntroClassScreen}
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Basics"
        component={BasicClassScreen}
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Plus"
        component={PlusClassScreen}
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
