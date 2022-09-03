// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api"; // script �±��� src �Ӽ��� �ܺ� js ���̺귯�� �Ҵ�
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // firstScriptTag �տ� tag ���   ����

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // api�� �Լ��� �̸��� �ڵ����� ã�� �������� ������ �Լ��� �̸��� �ٲٸ� �ȵ�
  new YT.Player('player', { // YT(youtube ��ü)�� player �޼ҵ� ����
    videoId: '3Pn4UTaXNGw', // ���� ����� ��Ʃ�� ���� ID
    playerVars:{
        autoplay: true, // �ڵ� ��� ����
        loop: true, // �ݺ� ��� ����
        playlist: '3Pn4UTaXNGw' // �ݺ� ����� ��Ʃ�� ���� ID ���
    },
    events: {
        onReady: function (event) { // player�� �غ�Ǹ� ����Ǵ� �Լ�, �������� ����Ǵ� ��Ȳ ��ü�� �μ��� ����
            event.target.mute() // ���Ұ�
        }
    }
  });
}