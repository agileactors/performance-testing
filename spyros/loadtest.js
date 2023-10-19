import { check } from 'k6';
import http from 'k6/http';
export default function () {
  const res = http.get('http://cosmote.gr/hub');
  check(res, {
    'is body ok': (r) => r.body.includes('ote'),
        'status is 200:': (r)=> r.status===200,
  });
}
