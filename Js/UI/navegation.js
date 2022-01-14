import { StyleSheet, TextInput, View, Pressable, Alert} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const TopBar = () => {
    return (
      <View style = {styles.topBar}>
        <Entypo name='menu' size={40}/>
        <TextInput style={styles.input}/>
      </View>
    );
}  


const BottomBar = (props) =>{

    return (
        <View style = {styles.bottomBar}>
        <Pressable>
            <Entypo 
            name = "add-to-list"
            size={props.iconSize}
            onPress={addItem}
            />
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    
    bottomBar: {
        justifyContent: 'space-evenly',
        alignContent: 'center',
        flex: 0.1,
        flexDirection:'row',
        backgroundColor: 'darkolivegreen',
        width: '100%',
        alignItems: 'flex-start',
        paddingBottom: '2.5%'
    },
    topBar: {
        alignItems:'flex-end', 
        flex:0.07,
        backgroundColor: 'darkolivegreen',
        flexDirection:'row', 
        justifyContent: 'space-evenly', 
        width :'100%', 
        paddingBottom: '2%'
    },
    input: {
        flex: .95,
        backgroundColor: 'cornsilk',
        borderColor: '#777',
        borderRadius: 10,
        height: 40,
        paddingLeft: 4,
        paddingRight: 4
      }
});
function addItem(){
    Alert.alert('AYO THIS FOO TRYNNA ADD MORE FOOD FATASS');
  }

export {TopBar,BottomBar};