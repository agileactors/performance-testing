import { check } from 'k6';
import http from 'k6/http';
export default function () {
  const res = http.get('https://www.vodafone.gr/');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'Verify home page is shown': (r) => r.body.includes("Επιβράβευση πελατών"),
  });
}