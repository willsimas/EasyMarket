import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Screens/Home';
import SignIn from '../components/Screens/SignIn'
import SignUp from '../components/Screens/SignUp'
import Menu from '../components/Screens/Menu'
import CategoryItemsMarket from '../components/Screens/CategoryItemsMarket';
import SignInForm from '../components/SignInForm';

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
            name="CategoryItemsMarket"
            component={CategoryItemsMarket}
            options={{ headerShown: false}}
            />
            <Stack.Screen 
            name="SignInForm"
            component={SignInForm}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}