import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Alert,
  Button,
  // ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

function MyHeader() {
  return (
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      <ActivityIndicator
        size="large"
        color="#c1262c"
        style={{ marginBottom: 30 }}
      />
    </View>
  );
}

export default function App() {
  const randomNum = useRef(Math.random()).current;
  const [text, setText] = useState("");

  function MyFooter() {
    return (
      <View>
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <Button
          onPress={() => Alert.alert(`You typed: ${text}`)}
          title="Learn More"
          color="#c1262c"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 2 }}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="Blah blah blah"
        ></TextInput>
      </View>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={MyHeader}
      data={[0, 1, 2, 3, 4]}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
          >
            <Image
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => String(item)}
      ListFooterComponent={MyFooter}
    />
  );
}
