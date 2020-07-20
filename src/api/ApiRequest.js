import request from './AxioClient';
import {apiKey, iconUrl} from '../core/const';

function createUrl(endpoint, city, appId) {
  return endpoint + '?q=' + city + '&units=metric' + '&appId=' + appId;
}

function forecast5(city) {
  let endpoint = 'forecast';

  return request({
    url: createUrl(endpoint, city, apiKey),
    method: 'GET',
  });
}

function getIcon(id) {
  return iconUrl + id + '.png';
}

const ApiRequest = {forecast5, getIcon};

export default ApiRequest;
