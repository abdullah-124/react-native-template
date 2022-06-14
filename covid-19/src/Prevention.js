import { Image, StyleSheet, View, Text as RnText, ScrollView } from 'react-native'
import React from 'react'
import Text from './Text/Text'
import { spacing } from './../theme/spacing';

export default function Prevention() {
  return (
    <ScrollView style={styles.container}>
      <Text preset='h4'>Prevention</Text>
      <View style={styles.box}>
        <View style={styles.cards}>
            <Image style={styles.cardImage} source={require('./images/distance.png')} />
            <Text style={{fontWeight: '700', textAlign: 'center'}}  preset='small'>Avoide Close Contact</Text>
        </View>
        <View style={styles.cards}>
            <Image style={styles.cardImage} source={require('./images/hand.png')} />
            <Text style={{fontWeight: '700', textAlign: 'center'}}  preset='small'>Clean Your Hands Often</Text>
        </View>
        <View style={styles.cards}>
            <Image style={styles.cardImage} source={require('./images/musk.png')} />
            <Text style={{fontWeight: '700', textAlign: 'center'}} preset='small'>Wear A Facemask</Text>
        </View>
        
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: spacing[3],
        paddingTop: spacing[3]
    },
    box:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing[2]
    }
    ,cards:{
        flex: 1,
        alignItems: 'center',
    },
    cardImage:{
        height: 90,
        width: 90,
        borderRadius: 45,
        backgroundColor: '#ffe5ec'
    }
})