import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./../theme/colors";
import { spacing } from "../theme/spacing";
import Text from "./Text/Text";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image
          style={{ flex: 1}}
          source={{
            uri: "https://static.onecms.io/wp-content/uploads/sites/37/2020/04/17/tango-oakleaf-lettuce-c6f6417e.jpg",
          }}
        />
      <View style={styles.box2}>
        <View>
          <Text preset="h3">Boston Lettuce</Text>
          <Text preset="h3">
            1.10 <Text preset="h4">&euro; /piece</Text>
          </Text>
          <Text preset="small" style={{ color: colors.green }}>
            ~150 gm/piece
          </Text>
        </View>
        <View>
          <Text
            preset="h4"
            style={{ color: colors.black, paddingVertical: spacing[2] }}
          >
            Spain
          </Text>
          <Text preset="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            natus ipsam, assumenda eum perferendis reiciendis ab velit sit
            officiis ipsa nihil error neque. Ipsam blanditiis hic ratione eos
            nobis maiores porro quod ex eius facilis consequuntur corrupti, rem
            sequi molestiae cumque voluptates at voluptatibus nam libero sint!
            Quidem nemo doloremque, temporibus praesentium atque excepturi
            ratione eos, sunt laborum tempora sequi architecto maxime.
          </Text>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity>
            <Text
              preset="btn"
              style={{ backgroundColor: "#fff", marginRight: 10 }}
            >
              <AntDesign name="hearto" size={24} color={colors.gray} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{ flex: 1 }}>
            <Text preset="btn">
            <AntDesign name="shoppingcart" size={16} color="#fff" />  ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: "space-between",
  },
  box2: {
    backgroundColor: colors.white,
    padding: spacing[3],
    paddingVertical: spacing[7],
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    transform: [{translateY : -15}]
  },
  btnArea: { flexDirection: "row", alignItems: "center" },
});
