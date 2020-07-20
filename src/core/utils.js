import moment from 'moment';
import ApiRequest from '../api/ApiRequest';
export const dataManupulate = (arr, timezone) => {
  let list = arr;
  let dataList = [];

  let day1 = '';
  let fullDay1 = '';
  let day2 = '';
  let fullDay2 = '';
  let day3 = '';
  let fullDay3 = '';
  let day4 = '';
  let fullDay4 = '';
  let day5 = '';
  let fullDay5 = '';
  let day6 = '';
  let fullDay6 = '';

  let dayArray = [];
  let day1Array = [];
  let day2Array = [];
  let day3Array = [];
  let day4Array = [];
  let day5Array = [];

  if (list && list.length > 0) {
    list.map((item) => {
      let today = new Date().getDate();

      let itemD = new Date(item.dt * 1000 - timezone * 1000);

      let dayName = moment(itemD).format('dddd');
      let fullDay = moment(itemD).format('LL');

      item.time = itemD.getHours() + ':00';
      item.weather[0].icon = ApiRequest.getIcon(item.weather[0].icon);

      let itemDate = itemD.getDate();

      if (today == itemDate) {
        dayArray.push(item);
        day1 = '';
        fullDay1 = '';
      } else if (itemDate == today + 1) {
        day1Array.push(item);
        day2 = dayName;
        fullDay2 = fullDay;
      } else if (itemDate == today + 2) {
        day2Array.push(item);
        day3 = dayName;
        fullDay3 = fullDay;
      } else if (itemDate == today + 3) {
        day3Array.push(item);
        day4 = dayName;
        fullDay4 = fullDay;
      } else if (itemDate == today + 4) {
        day4Array.push(item);
        day5 = dayName;
        fullDay5 = fullDay;
      } else if (itemDate == today + 5) {
        day5Array.push(item);
        day6 = dayName;
        fullDay6 = fullDay;
      }
      // console.log(item);
    });
  }

  dataList.push({day: day1, date: fullDay1, data: dayArray});
  dataList.push({day: day2, date: fullDay2, data: day1Array});
  dataList.push({day: day3, date: fullDay3, data: day2Array});
  dataList.push({day: day4, date: fullDay4, data: day3Array});
  dataList.push({day: day5, date: fullDay5, data: day4Array});
  dataList.push({day: day6, date: fullDay6, data: day5Array});

  return dataList;
};
