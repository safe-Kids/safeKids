var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwm32ovGY1jct1PfaJoYgISIzJR1lzHjLF9GVHOFJUD4nJHuGlHNxyt0ZCsjlBGsr4gCg/exec'; // スクリプトURLを置き換える

function showOrHide() {
  let showPass = document.getElementById("newPassword");
  let check = document.getElementById("showPassword");
  if (check.checked) {
    showPass.type = "text";
  } else {
    showPass.type = "password";
  }
}

function register() {
  var parentName = document.getElementById("parentName").value;
  var childNumber = document.getElementById("childNumber").value;
  var childName = document.getElementById("childName").value;
  var mailAddress = document.getElementById("mailAddress").value;
  var newPassword = document.getElementById("newPassword").value;

  // メールアドレスがGmailかどうかをチェック
  if (!mailAddress.endsWith("@gmail.com")) {
    alert("Gmailアドレスを入力してください。");
    return; // Gmail以外のアドレスなら登録処理を中断
  }

  var data = {
    action: "register",
    parentName: parentName,
    childNumber: childNumber,
    childName: childName,
    mailAddress: mailAddress,
    newPassword: newPassword,
  };

  fetch(
    SCRIPT_URL,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        alert("登録成功");
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch((error) => {
      console.error("エラー", error);
      alert(
        "予期せぬエラーが発生しました。\nしばらくしてからもう一度お試しください。"
      );
    });
}
