import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
    })
    return (
        <View>
            <Text>Splash Scren</Text>
        </View>
    )
}

export default Splash;
