const groceries = require('../../userData/items.json').groceries;

import { Text, View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
const dispayItemHeight = Dimensions.get('screen').height*0.0999;

export const ingredientsView = () => {
    var list = [];
    var i = 0;
    groceries.forEach(element => {
        list.push(<ItemDisplay itemName = {element.name} key={ element.name.slice(0,1)+i++} bestBefore = {element.bestBefore} dateOfPurchase={element.dateOfPurchase} type = {element.type} quantity = {element.quantity.value + ' ' + element.quantity
        .unit}/>);
    });
    return () =>{ 
        return (
            <ScrollView>
            {list}
            </ScrollView>
        );
    };
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