import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ route, navigation }) => {
  const {item} = route.params;
  const {rating} = item
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{item.title}</Text>
      <Text style={globalStyles.titleText}>{item.body}</Text>
      <Text>{rating}</Text>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({})