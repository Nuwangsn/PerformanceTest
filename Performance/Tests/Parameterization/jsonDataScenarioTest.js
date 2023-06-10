import { SharedArray } from 'k6/data';
import { scenario } from 'k6/execution';

const data = new SharedArray('users', function () {
    return JSON.parse(open('../data/json/data.json')).users;
});


export const options = {
    scenarios: {
        'use-all-the-data': {
            executor: 'per-vu-iterations',
            vus: 10,
            iterations: data.length,
            maxDuration: '1h',
        },
    }
};

export default function(){
    const user = data[scenario.iterationInTest];
    console.log(`user : ${JSON.stringify(user)}`);
}