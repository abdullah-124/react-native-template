import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './Text/Text'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <AntDesign name="menufold" size={24} color={colors.white} />
        <Ionicons name="notifications-outline" size={24} color={colors.white} />
      </View>
      <View style={styles.headerTitle}>
        <Text preset='h1'>Covid-19</Text>
        <TouchableOpacity style={styles.button}>
            <Image source={require('./images/united-states.png')} />
            <Text preset='small' style={{marginHorizontal: 10}}>USA</Text>
            <AntDesign name="caretdown" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerInfo}>
        <Text preset='h2'>Are you feelling sick?</Text>
        <Text preset='small' style={{color: '#aaa',paddingTop: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet..</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingBottom: 10}}>
        <Text preset='btn' style={{backgroundColor: colors.orange}}><Ionicons name="call" size={16} color={colors.white} />  Call Now</Text>
        <Text preset='btn'><Ionicons name="call" size={16} color={colors.white} />  Message Now</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        padding: spacing[3],
        borderBottomEndRadius: 40,
        borderBottomLeftRadius: 40,
    },
    headerIcon:{
        paddingVertical: spacing[2],
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle:{
        flexDirection: 'row',
        marginVertical: spacing[1],
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    ,button:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing[1],
        backgroundColor: colors.white,
        borderRadius: 25
    },
    headerInfo:{
        marginVertical: spacing[3]
    }
})