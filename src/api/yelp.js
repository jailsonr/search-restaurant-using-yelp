import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer 40BVDbT7Mk_1aAKRNOArslbm4I9tbi0733k4nraRMj25FB1TM4sILQxazSMaL1O4Qwme_DP887sGJOKtiULxvrwVzjRxVv8xt6QvdHXV0cFDugRT4IdsdjF4Lak1XnYx'
    }
});

