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
import guidGenerator from "../methods/randomCreateId";

export default function HomeScreen({ route, navigation }) {
  // Khởi tạo state cho item, list
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  // Ref cho input
  const refInput = useRef();

  const removeItemFromListHandle = (id) => {
    // Lọc ra list không chứa có id được nhận
    const newList = list.filter((item) => item.id != id);
    // set lại list vừa mới lọc
    setList(newList);
  };
  // Thực hiện lại mỗi lần khi route.params.id và route.params.contentUpdate thay đổi
  useEffect(() => {
    const idReceive = route.params.id;
    const idUpdate = route.params.idUpdate;
    const contentUpdate = route.params.contentUpdate;

    if (idReceive) {
      removeItemFromListHandle(idReceive);
    }
    if (contentUpdate && idUpdate) {
      const index = list.findIndex((item) => item.id == idUpdate);
      const itemUpdate = {
        id: idUpdate,
        content: contentUpdate,
      };
      setList((list) => [
        ...list.slice(0, index),
        itemUpdate,
        ...list.slice(index + 1),
      ]);
    }
  }, [route.params.id, route.params.idUpdate, route.params.contentUpdate]);

  const submitItemHandle = () => {
    if (item) {
      const newItem = {
        id: guidGenerator(),
        content: item,
      };
      setList((list) => [...list, newItem]);
      setItem("");
    }
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
                  key={item.id}
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
