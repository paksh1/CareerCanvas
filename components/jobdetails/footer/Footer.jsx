import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { icons } from '../../../constants'

import styles from './footer.style'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image 
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={ styles.applyBtn }>
        <Text style={ styles.applyBtnText } onPress={() => Linking.openURL(url)}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer