import { check } from 'k6';
import http from 'k6/http';
export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
	check(res, {
    'check body': (r) => r.body.includes('jjCollection of simple'),
  });
}
