function sendResetEmail() {
  const mailAddress = document.getElementById('mailAddress').value;

  if (!mailAddress) {
    alert('メールアドレスを入力してください。');
    return;
  }

  const data = new URLSearchParams();
  data.append('action', 'resetPassword');
  data.append('mailAddress', mailAddress);
//https://script.google.com/macros/s/AKfycbwr5qd-zL9XJXmct6JRZCifnRGTfQW2Ctud41KmbZJHsv8a5Rrc1z0YSTKfWfng_PZ0Mw/exec
//https://script.google.com/macros/s/AKfycbwhAlbxb-kHU6K2r_v_I7X9QIAM1kb1ZqidwbogigBTkhWNSb_S6VyHglYjeOv_PPpoFA/exec
  fetch('https://script.google.com/macros/s/AKfycby3cRLieXHL1xc-aC737dd60YqZLj24TYFH26eqS97gQTY3iCtKHdj_7b7Ios8_YJ149g/exec', {
    method: 'POST',
    body: data
  })
  .then(response => response.json())
  .then(response => {
    if (response.status === 'success') {
      alert('再設定リンクをメールに送信しました。');
      console.log('メール送信成功:', response);
    } else {
      alert('メール送信失敗: ' + response.message);
      console.error('メール送信失敗:', response);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('エラーが発生しました。もう一度お試しください。');
  });
}
