// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api"; // script 태그의 src 속성에 외부 js 라이브러리 할당
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // firstScriptTag 앞에 tag 요소   삽입

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // api가 함수의 이름을 자동으로 찾게 만들어놨기 때문에 함수의 이름을 바꾸면 안됨
  new YT.Player('player', { // YT(youtube 객체)의 player 메소드 실행
    videoId: '3Pn4UTaXNGw', // 최초 재생할 유튜브 영상 ID
    playerVars:{
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: '3Pn4UTaXNGw' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
        onReady: function (event) { // player가 준비되면 실행되는 함수, 동영상이 재생되는 상황 자체를 인수로 넣음
            event.target.mute() // 음소거
        }
    }
  });
}