$.ajax({
    url:'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?',
    dataType: 'jsonp',
    crossDomain: true,
    success: function (data) {
        console.log(data);
    }
})
