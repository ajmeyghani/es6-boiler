import {xhr} from 'utils/xhr';

xhr('get', '/test', response => {
  console.log(JSON.parse(response));
});

xhr('get', '/hello', response => {
  console.log(JSON.parse(response));
});
