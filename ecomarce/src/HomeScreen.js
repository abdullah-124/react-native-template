import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./../theme/colors";
import { spacing } from "../theme/spacing";
import Text from "./Text/Text";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ padding: spacing[7] }}>
        <FontAwesome name="pinterest" size={50} color="#bff5b1" />
      </View>
      <View style={styles.box2}>
        <AntDesign
          style={{ paddingVertical: spacing[5] }}
          name="CodeSandbox"
          size={40}
          color={colors.black}
        />
        <View>
          <Text
            preset="h1"
            style={{ paddingHorizontal: spacing[7], textAlign: "center" }}
          >
            Non-Contact Deliveries
          </Text>
          <Text
            preset="small"
            style={{ textAlign: "center", paddingVertical: spacing[2] }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id
            laborum recusandae libero aspernatur sit. Fugit inventore earum quia
            a.
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Order")}>
            <Text preset="btn">Order Now</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              preset="btn"
              style={{ backgroundColor: "#fff", color: colors.black }}
            >
              Dismiss
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: colors.purple,
    justifyContent: "space-between",
  },
  box2: {
    backgroundColor: colors.white,
    alignItems: "center",
    padding: spacing[3],
    paddingVertical: spacing[7],
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  button: {},
});
