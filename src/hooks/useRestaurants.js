import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    //console.log(errorMessage);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchAPI when component is first rendered. BAD CODE
    //searchApi('pasta');

    useEffect(() => {
        searchApi('');
    }, [])

    return [searchApi, results, errorMessage];

};