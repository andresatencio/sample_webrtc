let random = Math.floor(Math.random() * (10000 - 100 + 1) + 100);
let peer = new Peer(random);
document.querySelector("#idUsuario").value = peer._id;

const video = document.querySelector('#cam');

peer.on("call", (call) => {
  navigator.getUserMedia(
    { video: true, audio: true },
    (stream) => {
      call.answer(stream); // Answer the call with an A/V stream.
      call.on("stream", (remoteStream) => {
        // Show stream in some video/canvas element.
        video.srcObject = remoteStream
      });
    },
    function(err) {
      console.log("Failed to get local stream", err);
    }
  );
});

const call = () => {
    const idUsuarioLlamar = document.querySelector("#idUsuarioLlamar").value
    const videoElement = document.querySelector('#cam2');

    navigator.getUserMedia({video: true, audio: true}, (stream) => {
        const call = peer.call(idUsuarioLlamar, stream);
        call.on('stream', function(remoteStream) {
            videoElement.srcObject = remoteStream;
        });
    }, (err) => {
        console.log('Failed to get local stream' ,err);
    });
}