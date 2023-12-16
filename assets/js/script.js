// Added advancedFormat js plugin
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Writes the current day
var today = dayjs();
// console.log(today);
console.log(today.format('dddd, MMMM Do'));
$('#currentDay').text(today.format('dddd, MMMM Do'));

// Gets the actual hour
const nowHour = dayjs().format('hA'); // HA = 0-23 AM/PM  // hA = 0-12 AM/PM > 9AM, 10AM, ... 12PM, 1PM, ...
console.log(nowHour);

