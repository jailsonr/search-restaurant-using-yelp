import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import SearchBar from './src/components/SearchBar';
import RestaurantShowScreen from './src/screens/RestaurantShowScreen';

const navigator = createStackNavigator({
    Search: {screen: SearchScreen},
    RestaurantShow: {screen: RestaurantShowScreen}
},
{
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
});

export default createAppContainer(navigator);