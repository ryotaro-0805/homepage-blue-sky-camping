<?php
// echo '<br />';
session_start();

?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>送信フォーム</h2>
    <p>お問い合わせ内容を送信しました。</p>
    <p>ありがとうございました。</p>
    <p>～送信内容～</p>
    <p>お名前：<?php echo $_SESSION['name']; ?></p>
    <p>E-mail：<?php echo $_SESSION['email']; ?></p>
    <p>お問い合わせ内容：<?php echo $_SESSION['message']; ?></p>
    <hr />
    <a href="http://127.0.0.1:5500/">戻る</a>
</body>

</html>