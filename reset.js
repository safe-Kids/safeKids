function sendResetEmail() {
  const mailAddress = document.getElementById('mailAddress').value;

  if (!mailAddress) {
    alert('メールアドレスを入力してください。');
    return;
  }

  const data = new URLSearchParams();
  data.append('action', 'resetPassword');
  data.append('mailAddress', mailAddress);

  fetch('https://script.google.com/macros/s/AKfycbxIza4c7pEr_yBzkzCugqrA1C62PulcyqNODmI3LTSpGfMLuM2PaWfXKlyVokRUmH2sLw/exec', {
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