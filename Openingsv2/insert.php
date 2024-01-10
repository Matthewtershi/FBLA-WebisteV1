<?php
// installation https://www.youtube.com/watch?v=dnBa2pTKYY0&ab_channel=ProgrammingKnowledge2
$date = strtotime($_POST['date']);
$date = date('Y-m-d', $date);
$name = $_POST["name"];
$email = $_POST["email"];
$resume = $_POST["resume"];
$position = $_POST["position"];

if (!empty($date) || !empty($name) || !empty($email) || !empty($resume) || !empty($position)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "register";

    $connection = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if (mysqli_connect_error()) {
        die("Connect Error('.mysqli_connect_errno().')".mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From register Where email = ? Limit 1";
        $INSERT = "INSERT Into register (date, name, email, resume, position) values(?, ?, ?, ?, ?)";

        $statement = $connection->prepare($SELECT);
        $statement->bind_param("s", $email);
        $statement->execute();
        $statement->bind_result($email);
        $statement->store_result();
        $rnum = $statement->num_rows;

        if ($rnum == 0) {
            $statement->close();

            $statement = $connection->prepare($INSERT);
            $statement->bind_param("sssss", $date, $name, $email, $resume, $position);
            $statement->execute();
            echo "New record inserted successfully!";
        } else {
            echo "Someone already registered using that email!";
        }

        $statement->close();
        $connection->close();
    }
} else {
    echo "All fields are required";
    die();
}

?>