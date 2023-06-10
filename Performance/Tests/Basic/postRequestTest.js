import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function () {
    const url = 'http://test.k6.io/login';
    const payload = JSON.stringify({
        email: 'aaa',
        password: 'bbb'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);

};