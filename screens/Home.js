import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'nonito-bold'}}>Home</Text>
      
      <Button title="About" onPress={()=>navigation.navigate('About')}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding: 24,

    }
})