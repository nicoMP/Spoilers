import { StyleSheet, Dimensions, View} from 'react-native';

const {TopBar, BottomBar} = require('./navegation');
const IngredientsView = require('../Logic/populateContainers.js').ingredientsView();
const screenHeight = Dimensions.get("screen").height;
const bottomBarItemsHeight = screenHeight*0.075;

export function UserIngredients(){
  return (
    <View style={styles.container}>
      <TopBar/>
      <View style={styles.display}>
        <IngredientsView/>
      </View>
      <BottomBar iconSize = {bottomBarItemsHeight}/>
    </View>);
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

    }
  });