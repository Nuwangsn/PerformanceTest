import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import http from 'k6/http';

const csvData = new SharedArray('csv data', function () {
    return papaparse.parse(open('../data/csv/data.csv'), { header: true }).data;
});

export default function () {
    for (const userPwdPair of csvData) {
        console.log('user data : ' + JSON.stringify(userPwdPair));
    }

    console.log('random user id : ' + Math.floor(Math.random() * csvData.length));

    const randomUser = csvData[Math.floor(Math.random() * csvData.length)];

    console.log('Random user details : ' + JSON.stringify(randomUser));

    const params = {
        login: randomUser.username,
        password: randomUser.password,
    }

    console.log('Random user json convert : ' + JSON.stringify(params));

    const res = http.post('https://test.k6.io/login.php', params);

    check(res, {
        'login success': (r) => r.status === 200 && r.body.indexOf('successfully authorized') !== -1,
    });

    sleep(1);
 
};







