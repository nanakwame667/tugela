import React, { useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";
import { Fonts } from "../theme";

const DropdownComponent = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={toggleModal}>
        <Text>{selectedValue}</Text>
        <MaterialIcons
          name={modalVisible ? "arrow-drop-up" : "arrow-drop-down"}
          size={28}
        />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              toggleModal();
            }}
          >
            <Picker.Item label="Category" value="Category" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="C++" value="cpp" />
          </Picker>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    fontFamily: Fonts.regular,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalView: {
    flex: 0.6,
    justifyContent: "center",
  },
});

export default DropdownComponent;
