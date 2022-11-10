import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Button,FlatList,Alert,TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'
import { NavigationContainer } from '@react-navigation/native';
import DummyItem from '../component/DummyItem'

const Home = ({navigation}) => {

  const [reviews, SetReviews] = useState([
    {title:'Zelda, Breath of Fresh Air', rating:5, body:'lorem ipsum',id:1},
    {title:'Gotta Catch Them All (again)', rating:4, body:'lorem ipsum',id:2},
    {title:'Not So, "Final" Fantasy', rating:3, body:'lorem ipsum',id:3},
  ])

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis nisi laudantium, facere itaque optio obcaecati esse atque similique. Enim perferendis architecto incidunt iure magnam quas, exercitationem voluptatibus quos ea.</Text>
      
      <FlatList
      data={reviews}
      keyExtractor={item => item.id}
      renderItem={({item})=>(
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('ReviewDetails',{
            itemId: item.id,
            otherParams:'Some other things',
            data:reviews,
            item
          })
        }}
        >
          <DummyItem item={item} />
        </TouchableOpacity>
        
      )}

      />

      {/* <Button title="About" onPress={()=>navigation.navigate('About')}/> */}
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding: 24,

    }
})