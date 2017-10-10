// the domain banner 
// ----------------------------------

var banner = {
    title       : 'Media',
    description : 'Video from the GDC.',
    image       : 'img/data/bokeh.jpg'
};


// the domain videos
// ----------------------------------
// before deploying restric URL access
// https://console.developers.google.com/apis/credentials/wizard?api=youtube.googleapis.com&project=api-project-837099048967
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCro0hRiT9K7UqIYTQHCf30g&maxResults=10&order=date&type=video&key=AIzaSyCUDPY8zV5jfjqiVDwTMUUDMn7jrHi8nQo';
var request = new XMLHttpRequest();
request.open('GET', url, false);  // `false` makes the request synchronous
request.send(null);

var boxes = [];

if (request.status === 200) {
    console.log(request.responseText);
    var youtube = JSON.parse(request.responseText);
    youtube.items.forEach(function(video){
        console.log('video.id.videoId: ' + video.id.videoId);
        console.log('video.snippet.title: ' + video.snippet.title);
        boxes.push({
            title       : video.snippet.title,
            subtitle    : '',
            description : '',
            url         : 'https://www.youtube.com/embed/' + video.id.videoId,
            video       : true,
            thumbnail   : video.snippet.thumbnails.medium.url
        });

    });
}


boxes.push({
    title       : 'CIP',
    subtitle    : 'OT Security',
    description : 'Cybersecurity Critical Infrastructure Protection',
    url         : 'https://www.youtube.com/embed/tIkz4wfev5A',
    video       : true,
    thumbnail   : 'images/iot_576.jpg'
});
boxes.push({
    title       : 'SAFARI',
    subtitle    : 'Situational Awareness Framework for Risk Ranking',
    description : 'Situational Awareness framework that exploits different perspectives of the same financial data and assigns risk scores to entities (e.g. payment documents) to improve false positive ratios and assist the identification of fraudulent activity in huge and unlabeled financial data.',
    url         : 'https://www.youtube.com/embed/Kypp0XhcImU',
    video       : true,
    thumbnail   : 'images/safari_play_576.jpg'
});
boxes.push({
    title       : 'SAFFRON',
    subtitle    : 'Applied Computation Research',
    description : 'SAFFRON is a risk modeling and data analytics tool that allows energy delivery OT operators to better understand the risks associated with cyber threats.',
    url         : 'https://www.youtube.com/embed/pnk-EawgbrA',
    video       : true,
    thumbnail   : 'images/electric_576.jpg'    
});
