import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Screens/Home';
import SignIn from '../components/Screens/SignIn'
import SignUp from '../components/Screens/SignUp'
import Menu from '../components/Screens/Menu'
import ItemsMarket from '../components/Screens/ItemsMarket';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{ headerShown: false}}
                />
            <Stack.Screen 
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="Menu"
            component={Menu}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="ItemsMarket"
            component={ItemsMarket}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}