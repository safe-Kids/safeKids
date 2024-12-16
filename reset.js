var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzwP5xJ3XD8535dLxYxi13CsCsDEf3zZo0mQ0lsVVfgNT7n6b4eiHpPfsFtD5qNzuEZgg/exec'; // スクリプトURLを置き換える

function sendResetEmail() {
  const mailAddress = document.getElementById('mailAddress').value;

 
  const allowedDomains = ["@gmail.com", ".ac.jp"];//許可するドメイン名

  function isAllowedDomain(mailAddress) {
    return allowedDomains.some(domain => mailAddress.endsWith(domain));
  }

  if (!isAllowedDomain(mailAddress)) {
    alert("Googleメールアドレス、または.ac.jpで終わるアドレスを入力してください。");
    return; // 許可されていないアドレスなら登録処理を中断
  }


  const data = new URLSearchParams();
  data.append('action', 'resetPassword');
  data.append('mailAddress', mailAddress);
//https://script.google.com/macros/s/AKfycbwr5qd-zL9XJXmct6JRZCifnRGTfQW2Ctud41KmbZJHsv8a5Rrc1z0YSTKfWfng_PZ0Mw/exec
//https://script.google.com/macros/s/AKfycbwhAlbxb-kHU6K2r_v_I7X9QIAM1kb1ZqidwbogigBTkhWNSb_S6VyHglYjeOv_PPpoFA/exec
  fetch(SCRIPT_URL, {
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
