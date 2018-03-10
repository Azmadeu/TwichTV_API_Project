var onOffLineImg;
var onOffLine;
var channelsWhoRegularyStream = ["SilverName", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getChannels() {
    for (var i = 0; i < channelsWhoRegularyStream.length; i++) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken/channels/' + channelsWhoRegularyStream[i] + '',
            headers: {
                'Client-ID': 'zvjl7lpopsx54ajrpdfay8ma2l1vo5'
            },
            Accept: 'application/vnd.twitchtv.v5+json',
            success: function (data) {
                var onOff = data.partner;
                var logoType = data.logo;
                var displayName = data.display_name;
                var channelsUrl = data.url;
                if (onOff) {
                    onOffLine = 'Online';
                    onOffLineImg = 'https://cdn.pixabay.com/photo/2016/02/23/15/52/green-1217966_960_720.png'
                } else {
                    onOffLine = 'Offline';
                }
                $('.navigator').append(
                    '<div class="channels-list item">' +
                    '<ul>' +
                    '<a target="_blank" href="' + channelsUrl + '">' +
                    '<li>' +
                    '<img src="' + logoType + '">' +
                        displayName + " - " +
                        onOffLine +
                    '<img src="' + onOffLineImg + '">' +
                    '</li>' +
                    '</a>' +
                    '</ul>' +
                    '</div>'
                );
            },
            error: function (err) {

            }
        });
    }
}

function all() {
    for (var i = 0; i < channelsWhoRegularyStream.length; i++) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken/channels/' + channelsWhoRegularyStream[i] + '',
            headers: {
                'Client-ID': 'zvjl7lpopsx54ajrpdfay8ma2l1vo5'
            },
            Accept: 'application/vnd.twitchtv.v5+json',
            success: function (data) {
                var onOff = data.partner;
                var logoType = data.logo;
                var displayName = data.display_name;
                var channelsUrl = data.url;
                if (onOff) {
                    onOffLine = 'Online';
                    onOffLineImg = 'https://cdn.pixabay.com/photo/2016/02/23/15/52/green-1217966_960_720.png';
                } else {
                    onOffLine = 'Offline';
                }
                $('.navigator').append(
                    '<div class="channels-list item">' +
                    '<ul>' +
                    '<a target="_blank" href="' + channelsUrl + '">' +
                    '<li>' +
                    '<img src="' + logoType + '">' +
                    displayName + " - " +
                    onOffLine +
                    '<img src="' + onOffLineImg + '">' +
                    '</li>' +
                    '</a>' +
                    '</ul>' +
                    '</div>'
                );
            },
            error: function (err) {

            }
        });
    }
}
    function online() {
        for (var i = 0; i < channelsWhoRegularyStream.length; i++) {
            $.ajax({
                url: 'https://api.twitch.tv/kraken/channels/' + channelsWhoRegularyStream[i] + '',
                headers: {
                    'Client-ID': 'zvjl7lpopsx54ajrpdfay8ma2l1vo5'
                },
                Accept: 'application/vnd.twitchtv.v5+json',
                success: function (data) {
                    console.log(data);
                    var onOff = data.partner;
                    var logoType = data.logo;
                    var displayName = data.display_name;
                    var channelsUrl = data.url;
                    if (onOff) {
                        onOffLine = 'Online';
                        onOffLineImg = 'https://cdn.pixabay.com/photo/2016/02/23/15/52/green-1217966_960_720.png';
                        $('.navigator').append(
                            '<div class="channels-list item">' +
                            '<ul>' +
                            '<a target="_blank" href="' + channelsUrl + '">' +
                            '<li>' +
                            '<img src="' + logoType + '">' +
                            displayName + " - " +
                            onOffLine +
                            '<img src="' + onOffLineImg + '">' +
                            '</li>' +
                            '</a>' +
                            '</ul>' +
                            '</div>')
                    }
                },

                error: function (err) {

                }
            });
        }
    }


function offline() {
    for (var i = 0; i < channelsWhoRegularyStream.length; i++) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken/channels/' + channelsWhoRegularyStream[i] + '',
            headers: {
                'Client-ID': 'zvjl7lpopsx54ajrpdfay8ma2l1vo5'
            },
            Accept: 'application/vnd.twitchtv.v5+json',
            success: function (data) {
                var onOff = data.partner;
                var logoType = data.logo;
                var displayName = data.display_name;
                var channelsUrl = data.url;
                if (onOff === false) {
                    onOffLine = 'Offline';
                    $('.navigator').append(
                        '<div class="channels-list item">' +
                        '<ul>' +
                        '<a target="_blank" href="' + channelsUrl + '">' +
                        '<li>' +
                        '<img src="' + logoType + '">' +
                        displayName + " - " +
                        onOffLine +
                        '<img src="' + onOffLineImg + '">' +
                        '</li>' +
                        '</a>' +
                        '</ul>' +
                        '</div>'
                    );
                }
            },
            error: function (err) {

            }
        });
    }
}

function clear() {
    $('.item').remove();
}

window.onload = function () {
    getChannels();
    $('#all').click(function () {
        clear();
        all();
    });
    $('#online').click(function () {
        clear();
        online();
    });
    $('#offline').click(function () {
        clear();
        offline();
    });
};






