      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID 
          playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
          },
          events: {
            onReady: function (event) { // onReady는 함수 event가 실행될때 player와 연결시켜주는 매소드
              event.target.mute()  // 유튜브 재생 옵션에 별도로 음소거 옵션을 지원하지 않기 때문에 events를 이용해서 음소거 옵션을 넣어준다.
            }
          }
        });
      }
