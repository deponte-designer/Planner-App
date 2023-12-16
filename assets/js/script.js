// Added advancedFormat js plugin
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Writes the current day
var today = dayjs();
console.log(today);
console.log(today.format('dddd, MMMM Do'));
$('#currentDay').text(today.format('dddd, MMMM Do'));

