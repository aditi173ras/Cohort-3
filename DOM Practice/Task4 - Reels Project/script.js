const data = [
  {
    username: "Aarav Sharma",
    profilePic: "https://i.pravatar.cc/150?img=12",
    video: "Videos/video1.mp4",
    description: "Chasing sunsets and collecting memories 🌅✨",
    likeCount: 12450,
    isLiked: true,
    commentCount: 342,
    shareCount: 189,
    followStatus: true,
    isMuted: true,
  },
  {
    username: "Riya Verma",
    profilePic: "https://i.pravatar.cc/150?img=32",
    video: "Videos/video2.mp4",
    description: "A little dance, a little happiness 💃❤️",
    likeCount: 8750,
    isLiked: false,
    commentCount: 215,
    shareCount: 96,
    followStatus: false,
    isMuted: true,
  },
  {
    username: "Kabir Mehta",
    profilePic: "https://i.pravatar.cc/150?img=53",
    video: "Videos/video3.mp4",
    description: "Stay focused. Keep moving. Never settle. 💪🔥",
    likeCount: 23100,
    isLiked: true,
    commentCount: 581,
    shareCount: 420,
    followStatus: false,
    isMuted: true,
  },
  {
    username: "Ananya Singh",
    profilePic: "https://i.pravatar.cc/150?img=44",
    video: "Videos/video4.mp4",
    description: "City lights, late nights and good vibes 🌃✨",
    likeCount: 6320,
    isLiked: false,
    commentCount: 128,
    shareCount: 74,
    followStatus: true,
    isMuted: true,
  },
  {
    username: "Vihaan Kapoor",
    profilePic: "https://i.pravatar.cc/150?img=11",
    video: "Videos/video5.mp4",
    description: "No excuses. Just showing up every single day 🏋️‍♂️🔥",
    likeCount: 15600,
    isLiked: false,
    commentCount: 367,
    shareCount: 245,
    followStatus: false,
    isMuted: true,
  },
  {
    username: "Meera Joshi",
    profilePic: "https://i.pravatar.cc/150?img=47",
    video: "Videos/video6.mp4",
    description: "Finding peace in the little moments 🌸🌅",
    likeCount: 9420,
    isLiked: true,
    commentCount: 193,
    shareCount: 112,
    followStatus: true,
    isMuted: true,
  },
];

const allReels = document.querySelector(".allReels");

const addData = () => {
  let sum = " ";
  data.forEach((elem, idx) => {
    sum += `<div class="reels">
        <video autoplay loop ${elem.isMuted?'muted': ''} src="${elem.video}"></video>
        <button id=${idx} class="mute">${elem.isMuted?'<i class="ri-volume-mute-fill"></i>': '<i class="ri-volume-down-fill"></i>'} </button>
        <div class="bottom">
          <div class="profile">
            <img src="${elem.profilePic}" alt="" />
            <h4>${elem.username}</h4>
            <button id=${idx} class="follow">${elem.followStatus ? "Following" : "Follow"}</button>
          </div>
          <h6>
          ${elem.description}
          </h6>
        </div>

        <div class="right">
            <div id=${idx} class="likeBox">
            ${elem.isLiked ? '<i class="ri-heart-fill like"></i>' : '<i class="ri-heart-line"></i>'}
                <h6>${elem.likeCount}</h6>
            </div>
            <div id=${idx} class="commentBox">
                <i class="ri-chat-1-line"></i>
                <h6>${elem.commentCount}</h6>   
            </div>
            <div id=${idx} class="shareBox">
                <i class="ri-share-forward-fill"></i>
                <h6>${elem.shareCount}</h6>   
            </div>
            <div class="menuBox">
                <i class="ri-more-2-fill"></i> 
            </div>
        </div>
        
      </div>`;
  });
  allReels.innerHTML = sum;
};
addData();


allReels.addEventListener("click", (dets) => {
  if (dets.target.className === "likeBox") {
    if (!data[dets.target.id].isLiked) {
      data[dets.target.id].likeCount++;
      data[dets.target.id].isLiked = true;
    } else {
      data[dets.target.id].likeCount--;
      data[dets.target.id].isLiked = false;
    }
    addData();
  }

  if (dets.target.className === "follow") {
    if (!data[dets.target.id].followStatus) {
      data[dets.target.id].followStatus = true;
    } else {
      data[dets.target.id].followStatus = false;
    }
    addData();
  }

  if (dets.target.className === "mute") {
    if (!data[dets.target.id].isMuted) {
      data[dets.target.id].isMuted = true;
    } else {
      data[dets.target.id].isMuted = false;
    }
    addData();
  }

  if (dets.target.className === "commentBox") {
    data[dets.target.id].commentCount++;
    addData();
  }
  if (dets.target.className === "shareBox") {
    data[dets.target.id].shareCount++;
    addData();
  }

  if (dets.target.tagName === "VIDEO") {
  if (dets.target.paused) {
    dets.target.play();
  } else {
    dets.target.pause();
  }
}
});
