import http from 'k6/http';
import { check, group, sleep } from 'k6';


export const options = {
    scenarios: {
        closed_model: {
            executor: 'constant-vus',
            vus: 1,
            duration: '2m',
        }
    }
}


export default function () {
    http.get('https://httpbin.test.k6.io/delay/6')

};