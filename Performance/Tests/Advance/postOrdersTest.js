import http from 'k6/http';
import { check, group, sleep } from 'k6';
import {Counter, Rate, Trend } from 'k6/metrics';
import {SharedArray} from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

export default function() {

};