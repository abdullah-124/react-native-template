import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text/Text";
import { spacing } from "./../theme/spacing";
import { colors } from './../theme/colors';

export default function Banner() {
  return (
    <SafeAreaView style={{padding: spacing[3],}}>
      <View style={styles.banner}>
        <Image style={styles.image} source={require("./images/surgeon.png")} />
        <View style={{flex: 1}}>
          <Text preset="h2">Do your own test!</Text>
          <Text preset="small" style={{color: '#fff'}}>Follow the instruction to do your own test</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: colors.purple,
    alignItems: 'center',
    borderRadius: 20,
    height: 120,
    paddingEnd: spacing[2]
  },
  image: {
      width: 120,
      height: 130,
      alignSelf: 'flex-end',
      transform: [{translateY: 1}]
  },
});
