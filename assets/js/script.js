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

// Loop through each time block
$('.time-block').each(function () {
    const elementHour = $(this).attr('data-hour');

    // Add color based on past, present, future
    if (dayjs(elementHour, 'hA') < dayjs(nowHour, 'hA')) {
        $(this).find('textarea').addClass('past');
    } else if (elementHour === nowHour) {
        $(this).find('textarea').addClass('present');
    } else {
        $(this).find('textarea').addClass('future');
    }

    // Add event listener for save button
    $(this).find('.saveBtn').on('click', function () {
        const eventText = $(this).siblings('textarea').val();
        // Save eventText to local storage using the current time block's data-hour as a key
        localStorage.setItem(`event-${elementHour}`, eventText);
    });

    // Retrieve and display saved events from local storage
    const savedEvent = localStorage.getItem(`event-${elementHour}`);
    if (savedEvent) {
        $(this).find('textarea').val(savedEvent);
    }

});