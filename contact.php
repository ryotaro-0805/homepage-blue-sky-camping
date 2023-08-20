<?php
// echo '<br />';
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['email'] = $_POST['email'];
    $_SESSION['message'] = $_POST['message'];
    // echo 'これが名前です。：' . $name;
} else {
    echo ('エラーです。');
}

?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>入力された内容</p>
    <p>お名前：<?php echo $_SESSION['name']; ?></p>
    <p>E-mail：<?php echo $_SESSION['email']; ?></p>
    <p>お問い合わせ内容：<?php echo $_SESSION['message']; ?></p>
    <hr />
    <p>こちらの内容で送信してもよろしいでしょうか？</p>
    <!-- <button><a style="color:inherit; text-decoration:none;" href="http://localhost/2023-8-15-blueskycamping-hp-info/send.php">送信</a></button> -->
    <button><a style="color:inherit; text-decoration:none;" href="./send.php">送信</a></button>
    <a href="./index.html">戻る</a>
</body>

</html>