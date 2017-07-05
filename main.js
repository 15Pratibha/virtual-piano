

  //* play song*//

     function toggleSong(){
                 var song = document.querySelector('audio');
                 if(song.paused == true) {
                        console.log('Playing');
                       $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                 song.play();
                 }
                 else {
                      console.log('Pausing');
                      $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                      song.pause();
                    }
               }

          $('.play-icon').on('click', function() {
                   toggleSong();
                  });



                  //* welcome screen*//

                    $('.welcome-screen button').on('click', function() {

                      var name = $('#name-input').val();

                      if (name.length > 2) {

                          var message = "Welcome, " + name;

                          $('.main .user-name').text(message);

                          $('.welcome-screen').addClass('hidden');

                          $('.main').removeClass('hidden');

                      } else {
                  $('#name-input').addClass('error');
                        }
                    });


 //* keypress play song*//
    $('body').on('keypress',function(event) {
        if (event.keyCode == 32)
          {
            toggleSong();
        }
      });

      //* progress bar*//
      window.onload=function(){
          setTimeout(function(){
            currentTimeUpdate();}
            ,1000);
          }

         function TimeFormat(time)
        {
            var hr=~~(time/3600);
            var min=~~((time%3600)/60);
            var sec=time%60;
            var result="";
            if(hr>0)
            {
              //r+=""+hr+":"+":"+min+":"+sec;
              result += "" + hr + ":" + (min< 10 ? "0" : "");

            }
            result += "" + min + ":" + (sec< 10 ? "0" : "");
            result += "" + sec;
            return result;
          }

        function currentTimeUpdate(){
            var s=document.querySelector('audio');
            var currentTime=Math.floor(s.currentTime);

            currentTime = TimeFormat(currentTime);
              $('.time-elapsed').text(currentTime);
              var duration=Math.floor(s.duration);

              duration = TimeFormat(duration);
              $('.song-duration').text(duration);
                 }

//*add song list*//
    var songs = [{
      'name': 'Badri Ki Dulhania (Title Track)',
      'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
      'album': 'Badrinath ki Dulhania',
      'duration': '2:56',
      'fileName': 'song1.mp3'
      },
      {
          'name': 'Humma Song',
          'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
          'album': 'Ok Jaanu',
          'duration': '3:15',
            'fileName': 'song2.mp3'
          },
          {
            'name': 'Nashe Si Chadh Gayi',
              'artist': 'Arijit Singh',
              'album': 'Befikre',
              'duration': '2:34',
                'fileName': 'song3.mp3'
              },
            {
            'name': 'The Breakup Song',
            'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
            'album': 'Ae Dil Hai Mushkil',
            'duration': '2:29',
            'fileName': 'song4.mp3'
            }]

// for (var i = 0; i < fileNames.length ; i++) {
//     addSongNameClickEvent(fileNames[i],i)
// }

window.onload = function() {

for(var i =0; i < songs.length;i++) {
var obj = songs[i];
var name = '#s' + (i+1);
var song = $(name);
song.find('.song-name').text(obj.name);
song.find('.song-artist').text(obj.artist);
song.find('.song-album').text(obj.album);
song.find('.song-length').text(obj.duration);
addSongNameClickEvent(obj.fileName,i)
}
}


function addSongNameClickEvent(songName,position) {
      var id = '#s' + position;
      $(id).click(function() {
      var audio = document.querySelector('audio');
      var currentSong = audio.src;
      if(currentSong.search(songName) != -1)
      {
      toggleSong();
      }
      else {
      audio.src = songName;
      toggleSong();
      }
      });
}
