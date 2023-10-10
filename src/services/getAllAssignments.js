import axios from "axios";


async function getAllAssignments(){
const response=await axios.get("http://localhost/semiics/login.php");

return response;

}

export default getAllAssignments