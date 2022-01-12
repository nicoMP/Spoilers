import { StyleSheet, Text, Dimensions, Image, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const userData = require('../../userData/items.json');
const populate = require('../Logic/populateContainers.js').ingredientsView;
const screenHeight = Dimensions.get("screen").height;
const IngredientsView = populate(ItemDisplay);
const dispayItemHeight = screenHeight*0.0999;
const bottomBarItemsHeight = screenHeight*0.07;

export function UserIngredients(){
  return (
  <View style={styles.container}>
        <TopBar/>
        <ScrollView style={styles.display}>
          <IngredientsView/>
        </ScrollView>
        <BottomBar/>
  </View>);
}

function TopBar(){
    return(
      <View style = {{alignItems:'flex-end', flex:0.07,flexDirection:'row', justifyContent: 'space-evenly', width :'100%', paddingBottom: '2%'}}>
        <Entypo name='menu' size={40} color='#0C0F07' style={{}}/>
        <TextInput style={styles.input}/>
      </View>
    );
  }

function BottomBar(){
    return(
        <View style = {styles.bar}>
        <Pressable>
            <Entypo 
            name = "add-to-list"
            size={bottomBarItemsHeight}
            onPress={addItem}
            />
        </Pressable>
        </View>
    );
}
function ItemDisplay(props){
    return(
      
        <View style={styles.items}>
          <Image source={require('../../images/fruit.png')} style={styles.itemImage}/>
          <View style={styles.itemInfo}>
            <View style={{ borderBottomColor: 'darkolivegreen' ,borderBottomWidth: 1, marginBottom: 3, paddingBottom: 2}}>
              <Text style={styles.itemTitle}>{props.itemName}</Text>
            </View>
            <View style={styles.itemDetails}>
              <Text style={{flex: 0.5}}>PD: {props.dateOfPurchase}</Text>
              <Text style={{flex: 0.5}}>QT: {props.quantity}</Text>
            </View>
            <View style={styles.itemDetails}>
              <Text style={{flex: 0.5}}>Spoils: {props.bestBefore}</Text>
              <Text style={{flex: 0.5}}>Type: {props.type}</Text>
            </View>
          </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {

      paddingTop: '10%',
      flex : 1,
      backgroundColor: 'darkolivegreen',
      alignItems: 'center',
      
    },
    display:{

      flex: 1,
      flexDirection:'column',
      width: '100%',
      backgroundColor: 'cornsilk',

    },
    bar:{
      justifyContent: 'space-evenly',
      alignContent: 'center',
      flex: .1,
      flexDirection:'row',
      backgroundColor: 'darkolivegreen',
      width: '100%',
      alignItems: 'flex-start',
      paddingBottom: '2.5%'

    },
    input: {
      flex: .95,
      backgroundColor: 'cornsilk',
      borderColor: '#777',
      borderRadius: 10,
      height: 40,
    },
    items:{
      borderEndColor: '#0C0F07',
      borderEndWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#0C0F07',
      borderBottomWidth: StyleSheet.hairlineWidth,
      backgroundColor: '#C6D8A6',
      flexDirection: 'row',
      alignItems:'flex-start',
      height: dispayItemHeight
    },
  
    itemImage: {

      resizeMode: 'contain',
      flex: 0.3,
      height: '100%',
    },

    itemInfo: {
      flex: 0.65,
      flexDirection: 'column',
      
    },

    itemTitle: {
      fontSize: 25,
      fontWeight: '900',
      fontFamily: 'Farah',
    },
    itemDetails :{
      flex:2,
      flexDirection: 'row',
      flexWrap: 'wrap', 
      width:'120%'
    }
  
  });
  
  function addItem(){
    Alert.alert('AYO THIS FOO TRYNNA ADD MORE FOOD FATASS');
  }