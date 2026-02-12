function detectVideo() {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    if (video.dataset.ucDetected) return;
    video.dataset.ucDetected = "true";

    const src = video.currentSrc || video.src;
    if (!src) return;

    const btn = document.createElement("button");
    btn.innerText = "⬇ Download";
    btn.className = "uc-download-btn";

    btn.onclick = () => {
      chrome.runtime.sendMessage({
        action: "download",
        url: src
      });
    };

    video.parentElement.style.position = "relative";
    video.parentElement.appendChild(btn);
  });
}

setInterval(detectVideo, 1000);
