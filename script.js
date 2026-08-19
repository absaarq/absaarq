function openGallery(profileName) {
  document.getElementById('profile-screen').classList.remove('active');
  document.getElementById('gallery-screen').classList.add('active');
  document.getElementById('gallery-title').innerText = profileName + "'s Memories";
}

function showProfiles() {
  document.getElementById('gallery-screen').classList.remove('active');
  document.getElementById('profile-screen').classList.add('active');
}

function playVideo(videoUrl, title) {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('main-player');
  const source = document.getElementById('video-source');
  const titleElem = document.getElementById('modal-title');

  titleElem.innerText = title;
  source.src = videoUrl;
  player.load();
  modal.classList.add('active');
}

function closeVideo() {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('main-player');
  
  player.pause();
  modal.classList.remove('active');
}

// 1. Map each profile name to its videos and thumbnail pictures
const profileData = {
  'Partner': [
    { title: 'Chapter 1: This lovely women', video: 'assets/she.mp4', thumb: 'assets/purple.jpeg' },
    { title: 'Chapter 2: Baby Girl ', video: 'assets/sh.mp4', thumb: 'assets/us.jpeg' }
  ],
  'Yy toh humari': [
    { title: 'Chapter 1: Our Fitcheck', video: 'assets/fitcheck.mp4', thumb: 'assets/us.jpeg' },
    { title: 'Chapter 2: Crazy Days', video: 'assets/uss.mp4', thumb: 'assets/bday.jpg' }
  ],
  'Bdayyy': [
    { title: 'Happy Birthday Edit', video: 'assets/edit.mp4', thumb: 'assets/h.JPG' }
  ],
  'Silly us': [
    { title: 'Our silly moments :p', video: 'assets/hug.mp4', thumb: 'assets/silly.jpeg' },
    { title: 'Baddiee us', video: 'assets/baddie.mp4', thumb: 'assets/silly.jpeg' }

  ],
  'Our': [
    { title: 'Favorite Memory', video: 'assets/hand.mp4', thumb: 'assets/heart.jpeg' }
  ]
};

// 2. Load videos into the gallery dynamically
function openGallery(profileName) {
  document.getElementById('profile-screen').classList.remove('active');
  document.getElementById('gallery-screen').classList.add('active');
  document.getElementById('gallery-title').innerText = profileName + "'s Memories";

  const container = document.getElementById('media-container');
  container.innerHTML = ''; // Clear previous profile content

  const items = profileData[profileName] || [];

  if (items.length === 0) {
    container.innerHTML = '<p>No memories added for this profile yet!</p>';
    return;
  }

  // Generate a card for each video item
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'media-card';
    card.onclick = () => playVideo(item.video, item.title);

    card.innerHTML = `
      <img src="${item.thumb}" alt="${item.title}">
      <div class="card-title">${item.title}</div>
    `;

    container.appendChild(card);
  });
}

function showProfiles() {
  document.getElementById('gallery-screen').classList.remove('active');
  document.getElementById('profile-screen').classList.add('active');
}

function playVideo(videoUrl, title) {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('main-player');
  const source = document.getElementById('video-source');
  const titleElem = document.getElementById('modal-title');

  titleElem.innerText = title;
  source.src = videoUrl;
  player.load();
  modal.classList.add('active');
}

function closeVideo() {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('main-player');

  player.pause();
  modal.classList.remove('active');
}

