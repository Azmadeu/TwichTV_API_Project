function channels() {
    var channelsWhoRegularyStream = ["SilverName", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
        "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    for (var i = 0; i < channelsWhoRegularyStream.length; i++) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken/channels/' + channelsWhoRegularyStream[i] + '',
            headers: {
                'Client-ID': 'zvjl7lpopsx54ajrpdfay8ma2l1vo5'
            },
            Accept: 'application/vnd.twitchtv.v5+json',
            success: function (data) {
                console.log(data);
                var logoType = data.logo;
                var displayName = data.display_name;
                var channelsUrl = data.url;
                $('.channels-list ul').append('<li>' +
                    '<img src="' + logoType + '">' +
                    +displayName +
                    '</li>')
            },
            error: function (err) {

            }
        });
    }
}

    window.onload = function () {
        channels();
};

