const groceries = require('../../userData/items.json').groceries;
import react from 'react';
import { Text, View} from 'react-native';

export function ingredientsView(ReactObject){
    var list = [];
    var i = 0;
    groceries.forEach(element => {
        list.push(<ReactObject itemName = {element.name} key={ element.name.slice(0,1)+i++} bestBefore = {element.bestBefore} dateOfPurchase={element.dateOfPurchase} type = {element.type} quantity = {element.quantity.value + ' ' + element.quantity
        .unit}/>);
    });
    return () =>{
        return (
            <View>
            {list}
            </View>
        );
    };
}