import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function () {
    http.get('http://test.k6.io');
};