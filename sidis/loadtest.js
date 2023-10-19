import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, {
  'verif homepage is shown': (r) =>  r.body.includes('Collection of simple web-pages')
  });
  sleep(1);
}
