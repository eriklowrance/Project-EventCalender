function getClipsbyName(gameName) {

    //URL used to query the database
    const idQuery = `https://api.twitch.tv/helix/games?name=${gameName}`

    // Create an AJAX call to retrieve game name from id
    $.ajax({
        method: "GET",
        url: idQuery,
    }).then(function (result) {

        const { gameID } = result.data;

        const clipsQuery = `https://api.twitch.tv/helix/clips?game_id=${gameID}`

        // Create an AJAX call to retrieve game name from id
        $.ajax({
            method: "GET",
            url: clipsQuery,
        }).then(function (result) {
            //get clips data
        });

    });
}


getClipsbyName("Fortnite");