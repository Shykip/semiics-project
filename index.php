<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With');

    $conn = new mysqli('localhost', 'root', '', 'semiics');

    $method = $_POST['method'];

    // returns assignment data
    if ($method === "GetAssignment") {

        $std_id = $_POST['std_id'];
    
        $query = "SELECT * FROM students WHERE std_id = '$std_id'";
        $result = $conn->query($query);
        while($row = mysqli_fetch_array($result)) {
            $semester = $row['semester'];
        }
    

        $query = "SELECT * FROM assignments WHERE semester = '$semester' ORDER BY dead_date";
        $result = $conn->query($query);
        while($row = mysqli_fetch_array($result)) {
            $json_data[] = $row;
        }
        $response = [
            'message' => 'Success',
            'result' => $json_data
        ];

        echo json_encode($response);

    }

    // returns std_id if the username and password matches
    else if ($method === "AuthStudent") {
        
        $username = $_POST['username'];
        $password = $_POST['password'];

        $query = "SELECT * FROM students WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($query);
        while($row = mysqli_fetch_array($result)) {
            $std_id = $row['std_id'];
        }
        $response = [
            'message' => 'Success',
            'result' => $std_id
        ];

        echo json_encode($response);
    }

    // returns students info
    else if ($method === "GetStudentInfo") {
        
        $std_id = $_POST['std_id'];

        $query = "SELECT * FROM students WHERE std_id = '$std_id'";
        $result = $conn->query($query);
        while($row = mysqli_fetch_array($result)) {

            $json_data = [
                'full_name' => $row['full_name'],
                'semester' => $row['semester'],
                'course' => $row['course'],
                'profileImg' => $row['profile_pic']
            ];
        }
        $response = [
            'message' => 'Success',
            'result' => $json_data
        ];

        echo json_encode($response);
    }

    
?>
