const reels = [
  {
    "username": "travelwithanu",
    "likeCount": 12450,
    "isLiked": true,
    "commentCount": 342,
    "caption": "Sunsets in Goa never get old 🌅",
    "video": "./videos/video1.mp4",
    "userProfile": "https://example.com/profiles/anu.jpg",
    "shareCount": 210,
    "isFollowed": true
  },
  {
    "username": "fitraj",
    "likeCount": 9850,
    "isLiked": false,
    "commentCount": 120,
    "caption": "Leg day grind 💪 #fitness",
    "video": "./videos/video2.mp4",
    "userProfile": "https://example.com/profiles/raj.jpg",
    "shareCount": 98,
    "isFollowed": false
  },
  {
    "username": "foodie_nisha",
    "likeCount": 18760,
    "isLiked": true,
    "commentCount": 560,
    "caption": "Best street momos in Delhi 😍",
    "video": "./videos/video3.mp4",
    "userProfile": "https://example.com/profiles/nisha.jpg",
    "shareCount": 340,
    "isFollowed": true
  },
  {
    "username": "techwithaman",
    "likeCount": 7650,
    "isLiked": false,
    "commentCount": 89,
    "caption": "Top 3 apps you need in 2026 📱",
    "video": "./videos/video4.mp4",
    "userProfile": "https://example.com/profiles/aman.jpg",
    "shareCount": 65,
    "isFollowed": false
  },
  {
    "username": "dance_diaries",
    "likeCount": 22340,
    "isLiked": true,
    "commentCount": 780,
    "caption": "Just vibing on this track 🎶",
    "video": "./videos/video5.mp4",
    "userProfile": "https://example.com/profiles/dance.jpg",
    "shareCount": 500,
    "isFollowed": true
  },
  {
    "username": "natureclicks",
    "likeCount": 13400,
    "isLiked": false,
    "commentCount": 230,
    "caption": "Morning views from the hills 🌄",
    "video": "./videos/video2.mp4",
    "userProfile": "https://example.com/profiles/nature.jpg",
    "shareCount": 150,
    "isFollowed": false
  },
  {
    "username": "comedyking",
    "likeCount": 30120,
    "isLiked": true,
    "commentCount": 1100,
    "caption": "Tag your friend 😂",
    "video": "./videos/video1.mp4",
    "userProfile": "https://example.com/profiles/comedy.jpg",
    "shareCount": 890,
    "isFollowed": true
  },
  {
    "username": "makeupbyriya",
    "likeCount": 15670,
    "isLiked": false,
    "commentCount": 410,
    "caption": "Soft glam look tutorial 💄",
    "video": "./videos/video3.mp4",
    "userProfile": "https://example.com/profiles/riya.jpg",
    "shareCount": 275,
    "isFollowed": false
  },
  {
    "username": "carcraze",
    "likeCount": 11200,
    "isLiked": true,
    "commentCount": 150,
    "caption": "Dream car goals 🚗🔥",
    "video": "./videos/video5.mp4",
    "userProfile": "https://example.com/profiles/cars.jpg",
    "shareCount": 190,
    "isFollowed": true
  },
  {
    "username": "petlover",
    "likeCount": 27450,
    "isLiked": true,
    "commentCount": 670,
    "caption": "Cutest puppy ever 🐶❤️",
    "video": "./videos/video4.mp4",
    "userProfile": "https://example.com/profiles/pet.jpg",
    "shareCount": 620,
    "isFollowed": false
  }
]
var allReels = document.querySelector('.all-reels')

function addData(){
  var sum = ''
reels.forEach(function(elem,idx){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>

                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                            
                        </div>
                    </div>
                </div>`
    
})


allReels.innerHTML = sum
}

addData();

allReels.addEventListener('click',function(dets){
  if(dets.target.className=='like'){
    if(!reels[dets.target.id] .isLiked ){
    reels[dets.target.id] .likeCount++
    reels[dets.target.id] .isLiked = true
  }else{
    reels[dets.target.id] .likeCount--
    reels[dets.target.id] .isLiked = false
  }

  }
  if(dets.target.className=='follow'){
    if(!reels[dets.target.id] .isFollowed ){
    reels[dets.target.id] .isFollowed = true
  }else{
    reels[dets.target.id] .isFollowed = false
  }

  }
  
  addData();
})

