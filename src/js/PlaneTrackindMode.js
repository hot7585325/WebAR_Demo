
document.getElementById('start-ar').addEventListener('click', async () => {
  if (navigator.xr) {
    const session = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test']
    });

    renderer.xr.setSession(session);
  } else {
    alert('你的裝置不支援 WebXR AR 模式');
  }
});


  document.getElementById("Home_button").addEventListener("click", function () {window.location.href='index.html' })