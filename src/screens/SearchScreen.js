import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useRestaurantes from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const crearObjects = (objects) => {
    for (const obj in objects) {
        obj = undefined;
    }
}

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useRestaurantes();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        //console.log(price);
        
        return results.filter(result => {
            return result.price === price;
        });

    };
    
    return (
    <>
        <SearchBar 
        //term={term} onTermChange={newTerm => setTerm(newTerm)} 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
        />
        { errorMessage ? <Text> {errorMessage} </Text> : null}
        
        <ScrollView>
            <RestaurantList results={filterResultsByPrice('$')} title="Cost Effective"  />
            <RestaurantList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <RestaurantList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;