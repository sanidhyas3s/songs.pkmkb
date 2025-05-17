const checkedChannels = new Map();

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function getChannelURL() {
  const anchors = document.querySelectorAll("a");
  for (let a of anchors) {
    const href = a.href;
    if (href.includes("/channel/") || href.includes("/@")) {
      if (a.innerText && a.innerText.length > 0) return href;
    }
  }
  return null;
}

async function checkCountry(channelURL) {
  if (checkedChannels.has(channelURL)) {
    return checkedChannels.get(channelURL);
  }

  try {
    const res = await fetch(`${channelURL}/about`);
    const text = await res.text();
    const isPakistani = text.toLowerCase().includes("pakistan");
    checkedChannels.set(channelURL, isPakistani);
    return isPakistani;
  } catch (err) {
    console.error("songs.pkmkb: Error fetching About page:", err);
    return false;
  }
}

function skipSong() {
  const nextBtn =
    document.querySelector(".ytp-next-button") ||
    document.querySelector(".next-button");
  if (nextBtn) {
    console.log("songs.pkmkb: Skipping Pakistani channel.");
    nextBtn.click();
  }
}

let lastVideoId = null;

async function monitor() {
  while (true) {
    await sleep(5000);

    const urlParams = new URLSearchParams(window.location.search);
    const currentVideoId = urlParams.get("v");

    if (!currentVideoId || currentVideoId === lastVideoId) continue;
    lastVideoId = currentVideoId;

    const channelURL = await getChannelURL();
    if (!channelURL) continue;

    const isPakistani = await checkCountry(channelURL);
    if (isPakistani) {
      skipSong();
    }
  }
}

monitor();
