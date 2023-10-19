// import http from 'k6/http';
// import { sleep } from 'k6';

// export default function () {
//   http.get('http://test.k6.io/');
//   sleep(1);
// }

// import { check } from 'k6';
// import http from 'k6/http';

// export default function () {
//   const res = http.get('http://test.k6.io/');
//   check(res, {
//     'is status 200': (r) => r.status === 200,
//   });
// }


// import { check } from 'k6';
// import http from 'k6/http';

// export default function () {
//   const res = http.get('http://test.k6.io/');
//   check(res, {
//     'is status 201': (r) => r.status === 201,
//   });
// }

import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('https://www.vodafone.gr/eshop/smartphone-prosfores?i_source=homepage-banner&i_medium=banners&i_owner=mk-eshop&i_name=20231017-new-flex-offers');
  check(res, {
    'verify homepage text': (r) => r.body.includes('iPhone 15'),
    'is status 200': (r) => r.status === 200,
    'body size is 11,105 bytes': (r) => r.body.length == 11105
  });
}

// import http from 'k6/http';
// export default function () {
//   const url = 'http://test.k6.io/login';
//   const payload = JSON.stringify({
//     email: 'aaa',
//     password: 'bbb',
//   });

//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   http.post(url, payload, params);
// }