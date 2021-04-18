import React, {useState} from 'react'
import { Text, StyleSheet, View, FlatList, Alert } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';


const App = () => {
  const uid = () => Math.floor((Math.random() * 100) + 1);
  const [items, setItems] = useState([
    {id: uid(), text: 'Milk' },
    {id: uid(), text: 'Eggs' },
    {id: uid(), text: 'Bread' },
    {id: uid(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }
  const addItem = text => {

    if(!text) {
      Alert.alert("Warning: ", "Please enter an item", [{ text: "OK" }]);
    } else {
      setItems(prevItems => {
        return [{ id: uid(), text }, ...prevItems]
      });
    }
  }
  return (
      <View style={styles.container}>
        <Header />
        <AddItem addItem={addItem}/>
        <FlatList 
          data={items} 
          keyExtractor= {item => item.id}
          renderItem={({item}) =>  <ListItem item={item} 
          deleteItem={deleteItem}/>}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  
})
export default App;