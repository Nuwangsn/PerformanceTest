import { SharedArray } from 'k6/data';

const data = new SharedArray('user data', function () {
    return JSON.parse(open('../data/json/data.json')).users;
});

export default function () {
    const user = data[1];
    console.log('user name     : ' + data[0].username);
    console.log('user password : ' + data[0].password);

    console.log('2nd user :'+user.username);
    console.log('2nd pass :'+user.password);


}


