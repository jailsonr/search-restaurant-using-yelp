import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getRestaurants = async (id) => {
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
    };

    useEffect(() => {
        getRestaurants(id);
    }, [])

    if (!result) {
        return null;
    }

    return <View>
        <Text>{result.name}</Text>
       <FlatList 
       data={result.photos}
       keyExtractor={photo => photo}
       renderItem={({item}) => {
        return <Image style={styles.image} source={{uri: item}}/>
        
       }}
       />
    </View>
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default RestaurantShowScreen;