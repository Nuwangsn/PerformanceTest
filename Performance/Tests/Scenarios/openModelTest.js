import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
    scenarios: {
        open_model: {
            executor: 'constant-arrival-rate',
            rate: 1,
            timeUnit: '1s',
            duration: '1m',
            preAllocatedVUs: 20,
        }

    }
}


export default function () {
    http.get('https://httpbin.test.k6.io/delay/6');
};