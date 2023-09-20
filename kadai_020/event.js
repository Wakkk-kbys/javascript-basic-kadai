const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
 setTimeout(() => { 
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});

 
