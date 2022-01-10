import { StyleSheet, Text, SafeAreaView, Image, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const userData = require('../../userData/items.json');
export function UserIngredients(){
  return (
  <SafeAreaView style={styles.container}>
        <TopBar/>
        <ScrollView style={styles.display}>
          <ItemDisplay uri = {require('../../images/apple.png')}/>
          <ItemDisplay uri = {require('../../images/apple.png')}/>
          <ItemDisplay uri = {require('../../images/apple.png')}/>
        </ScrollView>
        <BottomBar/>
  </SafeAreaView>);
}
function TopBar(){
    return(
      <View style={styles.bar}>
        <Entypo name='menu'size={45} color='#0C0F07' style={{flex: 1}}/>
        <TextInput style={styles.input}/>
      </View>
    );
  }

function BottomBar(){
    return(
        <View style = {styles.bar}>

        <Pressable>
            <Entypo name = "add-to-list" size={40}
            onPress={addItem}
            />
        </Pressable>
        </View>
    );
}
function ItemDisplay(props){
    return(
      
        <View style={styles.items}>
          <Image source={props.uri} style={styles.itemImage}/>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}> {userData.groceries[0].name}</Text>
            <View>
                <Text>
                    Purchased on YYYY/MM/DD {'\n'}
                    Reminder to Eat Before YYYY/MM/DD
                </Text>
            </View>
          </View>
        </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      margin: 0,
      padding: 8,
      width: '100%',
      height: '101%',
      backgroundColor: 'darkolivegreen',
      alignItems: 'center',
    },
    display:{
      flexDirection:'column',
      width: '100%',
      flex: 1,
      backgroundColor: 'cornsilk',
    },
    bar:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      padding: 3,
      backgroundColor: 'darkolivegreen',
      width: '100%',
    },
    input: {
      backgroundColor: 'cornsilk',
      borderColor: '#777',
      width: '85%',
      margin: 5,
      padding: 5,
      height: 35,
      borderRadius: 10
    },
    items:{
      borderBottomColor: '#0C0F07',
      borderBottomWidth: 1,
      backgroundColor: '#C6D8A6',
      flex: 1,
      flexWrap:'wrap',
      flexDirection: 'row',
      alignItems:'center',
      padding: 10,
    },
    itemImage:{
      resizeMode: 'contain',
      height : 90,
      width: 60,
      flex: 1
    },
    itemInfo: {
      height: '100%',
      padding: 5,
      flex: 4,
      flexDirection: 'column',
      
    },
    itemTitle:{
      fontSize: 20,
      fontWeight: '900',
      fontFamily: 'Farah',
      textAlignVertical: 'top',
      textAlign: 'center'
    }
  
  });
  function addItem(){
    Alert.alert('YOU WANT TO ADD ITEM YES?');
  }
  const a ={
    "groceries" : [
        {
            "name" : "Apple",
            "uri" : "../userData/itemImages/apple.png"
        }
    ]
}