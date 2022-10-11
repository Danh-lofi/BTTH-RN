import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Item from "../components/Item";

export default function HomeScreen({ route, navigation }) {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const refInput = useRef();
  useEffect(() => {
    const removeItemFromListHandle = (id) => {
      const newList = list.filter((item) => item !== id);
      setList(newList);
    };
    if (route.params.content) {
      removeItemFromListHandle(route.params.content);
    }
    if (route.params.itemUpdate && route.params.itemPre) {
      const id = list.findIndex((item) => item == route.params.itemPre);
      setList((list) => [
        ...list.slice(0, id),
        route.params.itemUpdate,
        ...list.slice(id + 1),
      ]);
    }
  }, [route.params.content, route.params.itemUpdate]);
  const submitItemHandle = () => {
    if (item) {
      setList((list) => [...list, item]);
      setItem("");
    }
  };
  const editItemFromListHandle = (id) => {
    setItem(list[id]);
    refInput.current.focus();
  };

  const alertHandler = (item, id) => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Delete",
        onPress: () => removeItemFromListHandle(item),
      },
      { text: "Edit", onPress: () => editItemFromListHandle(id) },
    ]);
  };
  const movingScreenHandle = (item) => {
    navigation.navigate("Detail", { item });
  };
  return (
    <View style={styles.container}>
      <View
        style={[styles.textCenter, { height: "10%", flex: 1, width: "100%" }]}
      >
        <Text style={[styles.textWhite, styles.textCenter, styles.fontBold]}>
          ToDo App
        </Text>
      </View>
      <View
        style={[
          styles.pd,
          { height: "10%", width: "100%", position: "relative" },
        ]}
      >
        <TextInput
          value={item}
          onChangeText={setItem}
          ref={refInput}
          style={{
            borderRadius: 30,
            height: 35,
            width: "100%",
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            fontSize: 10,
            paddingRight: 50,
          }}
        />
        <TouchableOpacity
          onPress={submitItemHandle}
          style={[
            {
              width: 50,
              height: 35,
              borderRadius: 30,
              backgroundColor: "#61dafb",
              position: "absolute",
              right: 40,
              top: 10,
            },
            styles.textCenter,
          ]}
        >
          <Text style={[{}, styles.textWhite, styles.fontBold]}>&gt;</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.pd, { height: "80%", width: "100%" }]}>
        <View style={{}}>
          <FlatList
            data={list}
            renderItem={({ item, index }) => {
              return (
                <Item
                  key={index}
                  id={index}
                  item={item}
                  onPress={() => movingScreenHandle(item)}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fontBold: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  textCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  textWhite: {
    color: "#fff",
  },
  pd: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
});
