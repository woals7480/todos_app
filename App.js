import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { theme } from "./colors";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

export default function App() {
  const [isActive, setIsActive] = useState(true);
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(() => {
    loadToDos();
    loadHeader();
  }, []);

  const loadHeader = async () => {
    try {
      const qqq = await AsyncStorage.getItem("@header");
      setIsActive(JSON.parse(qqq).isActive);
    } catch (error) {
      alert("에러가 났습니다.");
    }
  };
  const work = async () => {
    try {
      await AsyncStorage.setItem("@header", JSON.stringify({ isActive: true }));
      setIsActive(true);
    } catch (error) {
      alert("에러가 났습니다.");
    }
  };
  const travel = async () => {
    try {
      await AsyncStorage.setItem(
        "@header",
        JSON.stringify({ isActive: false })
      );
      setIsActive(false);
    } catch (error) {
      alert("에러가 났습니다.");
    }
  };
  const onChangeText = (event) => setText(event);
  const savetoDos = async (toSave) => {
    try {
      await AsyncStorage.setItem("@toDos", JSON.stringify(toSave));
    } catch (error) {
      alert("에러가 났습니다.");
    }
  };
  const loadToDos = async () => {
    try {
      const savedToDos = await AsyncStorage.getItem("@toDos");
      if (savedToDos) setToDos(JSON.parse(savedToDos));
    } catch (error) {
      alert("에러가 났습니다.");
    }
  };

  const addWork = () => {
    if (text === "") {
      return;
    }

    const newToDos = Object.assign({}, toDos, {
      [Date.now()]: { text, isActive, isDone: false, isEdit: false },
    });
    setToDos(newToDos);
    savetoDos(newToDos);
    setText("");
  };

  const deleteToDo = (id) => {
    if (Platform.OS === "web") {
      const ok = confirm("정말로 삭제하겠습니까 ?");
      if (ok) {
        const newToDos = { ...toDos };
        delete newToDos[id];
        setToDos(newToDos);
        savetoDos(newToDos);
      }
    } else {
      Alert.alert("정말로 삭제하겠습니까 ?", "", [
        {
          text: "예",
          style: "destructive",
          onPress: () => {
            const newToDos = { ...toDos };
            delete newToDos[id];
            setToDos(newToDos);
            savetoDos(newToDos);
          },
        },
        {
          text: "아니요",
        },
      ]);
    }
  };

  const isDoneToDo = (id) => {
    const newToDos = { ...toDos };
    newToDos[id].isDone
      ? (newToDos[id].isDone = false)
      : (newToDos[id].isDone = true);
    setToDos(newToDos);
    savetoDos(newToDos);
  };

  const isEditToDo = (id) => {
    const newToDos = { ...toDos };
    newToDos[id].isEdit = true;
    setToDos(newToDos);
    savetoDos(newToDos);
  };
  const onChangeEditText = (event) => setEditText(event);

  const editToDo = (id) => {
    const newToDos = { ...toDos };
    newToDos[id].text = editText;
    newToDos[id].isEdit = false;
    setToDos(newToDos);
    savetoDos(newToDos);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.btnText,
              color: isActive ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: isActive ? theme.grey : "white",
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder={
          isActive ? "해야할 일을 적으세요." : "가고싶은 곳을 적으세요."
        }
        onChangeText={onChangeText}
        onSubmitEditing={addWork}
        returnKeyType="done"
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].isActive === isActive ? (
            toDos[key].isEdit ? (
              <TextInput
                placeholder={"수정할 내용을 적으세요."}
                onChangeText={onChangeEditText}
                onSubmitEditing={() => {
                  editToDo(key);
                }}
                returnKeyType="done"
                style={styles.input}
                key={key}
              />
            ) : (
              <View key={key} style={styles.toDo}>
                <Text
                  style={{
                    ...styles.toDoText,
                    textDecorationLine: `${
                      toDos[key].isDone ? "line-through" : "none"
                    }`,
                    color: `${toDos[key].isDone ? theme.grey : "white"}`,
                  }}
                >
                  {toDos[key].text}
                </Text>
                <View style={styles.icons}>
                  <TouchableOpacity onPress={() => isDoneToDo(key)}>
                    <Ionicons name="checkmark-done" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => isEditToDo(key)}>
                    <AntDesign
                      name="edit"
                      size={20}
                      color="lightgray"
                      style={{ marginLeft: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => deleteToDo(key)}
                    style={{ marginLeft: 10 }}
                  >
                    <Entypo name="trash" size={18} color="lightgray" />
                  </TouchableOpacity>
                </View>
              </View>
            )
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "space-between",
  },
  btnText: {
    fontSize: 42,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 16,
  },
  toDo: {
    backgroundColor: theme.TodoBg,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
