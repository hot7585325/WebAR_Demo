  // 取得 <a-scene> 元素
    const sceneEl = document.querySelector('a-scene');

    // 當 A-Frame 場景載入完成後
document.getElementById("Name_button").addEventListener('click', () => {
      // 自動進入 VR 模式，這會觸發 AR 模式
      // 瀏覽器會自動彈出要求相機權限的提示
      console.log("RUP4BJ4")
      sceneEl.enterVR();
    });