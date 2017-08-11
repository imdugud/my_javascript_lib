function YoutubeAPI(APIKey, parentElem, modal) {
  function encodeData(data) {
    var params = Object.keys(data).map(function (key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
    return params + '&key=' + APIKey;
  }

  function getDataWithUrl(path, params, success, error) {
    var paramsString = encodeData(params);
    var url = "https://www.googleapis.com/youtube/v3/" + path + "?" + paramsString;
    document.xhrCall(
      url,
      null,
      success,
      error,
      null,
      "application/json");
  }

  function getUserInfo(username, part, callback) {
    var params = {part: part, forUsername: username};
    getDataWithUrl(
      'channels',
      params,
      function (response) {
        callback({err: false, data: JSON.parse(response)});
      },
      function (response) {
        console.log("ERR: couldn't get channel info.");
        callback({err: true, data: JSON.parse(response)});
      }
    );
  }

  function getUserVideos(username, order, part, maxResults, callback) {
    getUserInfo(username, ['snippet'], function (res) {
      if (res.err) {
        return res.data;
      }
      var channelId = res.data.items[0].id;
      var params = {part: part, order: order, maxResults: maxResults, channelId: channelId};
      getDataWithUrl('search',
        params,
        function (response) {
          getCleanVideosData(response, function (cleanData) {
              callback({err: false, data: cleanData});
            }
          );
        },
        function (response) {
          console.log("ERR: couldn't get channel videos.");
          callback({err: true, data: JSON.parse(response)});
        })
    });
  }

  function getCleanVideosData(response, callback) {
    var data = JSON.parse(response);
    var list = data.items;
    var cleanData = [];
    for (var i = 0; i < list.length; i++) {
      var thumbnail = list[i].snippet.thumbnails.medium.url;
      var videoId = list[i].id.videoId;
      cleanData.push({id: videoId, thumbnail: thumbnail});
    }
    callback(cleanData);
  }

  function setVideoButtons() {
    getUserVideos('permolittr', 'date', ['snippet'], 30, function (response) {
      if (response.err) {
        return response.data;
      }
      var videos = response.data;
      for (var i = 0; i < videos.length; i++) {
        var item = videos[i];
        setVideoButtonTemplate(item.id, item.thumbnail);
      }
    });
  }

  function setVideoButtonTemplate(videoId, thumbnailUrl) {
    

    //span
    
    //thumbnail
    
    //play button
    
    setEvents(elem);
  }

  function setEvents(elems) {
    for (var i = 0; i < elems.length; i++) {
      var btn = elems[i];
      btn.addEventListener('click', function () {
        var videoFrame = document.createElement('iframe');
        videoFrame.id = 'player-iframe';
        videoFrame.setAttribute('width', '420');
        videoFrame.setAttribute('height','345');
        videoFrame.setAttribute('frameborder', '0');
        videoFrame.setAttribute('allowFullScreen', '');
        videoFrame.setAttribute('src', "http://www.youtube.com/embed/"+ this.dataset.vid +"?autoplay=1");
        document.getElementsByClassName('modal-panel')[0].appendChild(videoFrame);
      });
    }
  }

  //var elems = document.getElementsByClassName('video-link');
  //setEvents(elems);
  setVideoButtons();
}
