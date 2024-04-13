const video = document.querySelector("#vd");

const realodWebCamBtn = document.querySelector(".reload");
const openWebCamBtn = document.querySelector(".open");
const statusVideo = document.querySelector(".status");

let mediaDevices = navigator.mediaDevices;

const realTimeVideo = () => {
    mediaDevices
        .getUserMedia({
            video: true,
            audio: true
        })
        .then((stream) => {
            if(!stream) return;
            video.srcObject = stream;
            video.addEventListener("loadedmetadata",(e) => {
                video.play();
                statusVideo.classList.remove("err");
                statusVideo.classList.add("ok");
                statusVideo.innerText = "Streaming from Webcam...";
            })
        })
        .catch((err) => {
            alert(err);
            statusVideo.classList.add("err");
            statusVideo.classList.remove("ok");
            statusVideo.innerText = err;
        })
}

openWebCamBtn.addEventListener("click",(e) => {
    realTimeVideo();
    statusVideo.innerText = `Watching for webcam access...`;
    statusVideo.classList.remove("err");
    statusVideo.classList.remove("ok");
})

realodWebCamBtn.addEventListener("click",(e) => {
    video.src = video.src;
})

document.addEventListener("DOMContentLoaded",(e) => {
    console.log(`Loaded everything successfully!`);
})