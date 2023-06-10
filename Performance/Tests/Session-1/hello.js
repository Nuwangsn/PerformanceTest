import http from 'k6/http';
import { sleep } from 'k6';

// init
export let options = {
    vus: 5,
    duration: '60s',
}

export default function () {
    let res = http.get('http://test.k6.io');
    console.log('status ' + res.status);
    sleep(5);
}