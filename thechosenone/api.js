var axios = require("axios");

exports.grab_previous_players_list = () => {
    return new Promise((resolve, reject) => {
        require('request').post('http://api.iost.io/getContractStorage', {
            body: JSON.stringify({
                id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
                // key: "previousRound",
                key: "players",
                by_longest_chain: true
            })
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                return resolve(body);
            } else {
                return reject('Failed')
            }
        })
    })
}

exports.grab_previous_round_list = () => {
    return new Promise((resolve, reject) => {
        require('request').post('http://api.iost.io/getContractStorage', {
            body: JSON.stringify({
                id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
                key: "previousRound",
                // key: "players",
                by_longest_chain: true
            })
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                return resolve(body);
            } else {
                return reject('Failed')
            }
        })
    })
}

exports.grab_king_of_renown = () => {
    return new Promise((resolve, reject) => {
        require('request').post('http://api.iost.io/getContractStorage', {
            body: JSON.stringify({
                id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
                key: "longestKing",
                by_longest_chain: true
            })
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                return resolve(body);
            } else {
                return reject('Failed')
            }
        })
    })
}

exports.grab_king_of_week = () => {
    return new Promise((resolve, reject) => {
        require('request').post('http://api.iost.io/getContractStorage', {
            body: JSON.stringify({
                id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
                key: "kingOfWeek",
                by_longest_chain: true
            })
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                return resolve(body);
            } else {
                return reject('Failed')
            }
        })
    })
}

exports.grab_setting_king = () => {
    return new Promise((resolve, reject) => {
        require('request').post('http://api.iost.io/getContractStorage', {
            body: JSON.stringify({
                id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
                key: "king",
                by_longest_chain: true
            })
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                return resolve(body);
            } else {
                return reject('Failed')
            }
        })
    })
}

exports.grab_round_number = () => {
    return new Promise((resolve, reject) => {
        require('request').post('http://api.iost.io/getContractStorage', {
            body: JSON.stringify({
                id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
                key: "round",
                by_longest_chain: true
            })
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                return resolve(body);
            } else {
                return reject('Failed')
            }
        })
    })
}


exports.grab_user_stat_test = () => {
    return new Promise((resolve, reject) => {
        require('request').post('http://api.iost.io/getContractStorage', {
            body: JSON.stringify({
                id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
                key: "userKeys",
                by_longest_chain: true
            })
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                return resolve(body);
            } else {
                return reject('Failed')
            }
        })
    })
}

//Retrieve an array of users.
getUserKeys_internal = async () => {
    let postData = {
        id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
        key: "userKeys",
        by_longest_chain: true
    }

    return await axios.post("https://api.iost.io/getContractStorage", postData, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, credentials: 'omit' })
        .then(res => {
            //returns array of users on the contract.
            return JSON.parse(res.data.data);
        })
        .catch(error => {
            //returns empty array.
            return []
        })
}

//Retrieve an array of users with their corresponding data.
exports.getUserKeys = async () => {
    let users = await getUserKeys_internal();
    
    return await users.map(user => {
        let postData = {
            id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
            key: "users",
            field: user,
            by_longest_chain: true
        }

        return axios.post("https://api.iost.io/getContractStorage", postData, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, credentials: 'omit' })
            .then(res => {
                //returns an object of the user ie {user: "pmine_admin", king: 2, wins: 2, loss: 0}
                return JSON.parse(res.data.data);
            })
            .catch(error => {
                //returns empty array.
                return null
            })

    })
}


getRound_Internal = async () => {
    let postData = {
        id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
        key: "round",
        by_longest_chain: true
    }

    return await axios.post("https://api.iost.io/getContractStorage", postData, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, credentials: 'omit' })
        .then(res => {
            //returns array of users on the contract.
            return res.data.data;
        })
        .catch(error => {
            //returns empty array.
            return "0"
        })
}

exports.getRound_Results = async () => {
    let round = await getRound_Internal();
    let roundResults = Array.from({length: round * 1}, (x, i) => i);
    roundResults = roundResults.slice(roundResults.length - 10, roundResults.length);
    roundResults = roundResults.sort((a, b) => b - a);
    
    return roundResults.map(r => {
        let postData = {
            id: "ContractABxHhYQnWrjJjiRVH5gqwtsKuveGqQTAwp88DWd4hfca",
            key: "roundResult",
            field: r.toString(),
            by_longest_chain: true
        }

        return axios.post("https://api.iost.io/getContractStorage", postData, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, credentials: 'omit' })
            .then(res => {
                //returns an object of the user ie {user: "pmine_admin", king: 2, wins: 2, loss: 0}
                return JSON.parse(res.data.data);
            })
            .catch(error => {
                //returns empty array.
                return null
            })

    });
}