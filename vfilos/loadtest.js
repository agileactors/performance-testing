import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export default function () {
  const res = http.get('https://www.vodafone.gr/');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  check(res, {
    'verify homepage body text': (r) =>
    r.body.includes('Δείκτες ποιότητας'),
  });
  sleep(1);
}