const document.addEventListener('DOMContentLoaded', () => {
const vid1= document.getElementById('projectvid1');
const vid2= document.getElementById('projectvid2');
const vid3= document.getElementById('projectvid3');

const videoList= [vid1,vid2,vid3];

  const menuIcon = document.querySelector('.menuicon');
  const sidebar = document.querySelector('.sidebar');
  const closeIcon = document.querySelector('.closeicon');

  menuIcon.addEventListener('click', () => {
    sidebar.classList.remove('closesidebar');
    sidebar.classList.add('opensidebar');
  });

  closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('opensidebar');
    sidebar.classList.add('closesidebar');
  });

  //VIDEO PLAYBACK
videoList.forEach(function(video){
  video.addEventListener('mouse', function(){
      video.play()
  })
  video.addEventListener('mouseout', function(){
      video.pause()
  }
)
})


});


  

// menu listener
// menu.addEventListener('click', function(){
//     sidebar.classList.remove('closesidebar')
//     sidebar.classList.add('openSidebar')
// })

// close.addEventListener('click', function(){
//     sidebar.classList.remove("opensidebar")
//     sidebar.classList.add('closesidebar')
// })
