import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "20%",
          alignSelf: "center",
          height: "20%",
          backgroundColor: "rebeccapurple",
        }}
      />
      <View
        style={{
          flex: 2,
          width: "50%",
          alignSelf: "center",
          height: "50%",
          backgroundColor: "crimson",
        }}
      />
      <View
        style={{
          flex: 3,
          width: "80%",
          alignSelf: "center",
          height: "80%",
          backgroundColor: "gold",
        }}
      />
    </View>
  );
}
