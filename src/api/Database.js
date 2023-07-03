import axios from 'axios'

class Database{

    constructor() {
        this.apiUrl = "http://localhost/semiics/index.php"
    }

    async fetchAssignData(std_id){

        let formdata = new FormData()
        formdata.append("std_id", std_id)

        formdata.append("method", "GetAssignment")

        try{
            const response = await axios.post(`${this.apiUrl}`, formdata)
            return response.data.result
            
        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async authStudent(username, password){

        let formdata = new FormData()
        formdata.append("username", username)
        formdata.append("password", password)

        formdata.append("method", "AuthStudent")

        try{
            const response = await axios.post(`${this.apiUrl}`, formdata)
            return response.data.result

        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async getStudentInfo(std_id){

        let formdata = new FormData()
        formdata.append("std_id", std_id)

        formdata.append("method", "GetStudentInfo")

        try{
            const response = await axios.post(`${this.apiUrl}`, formdata)
            return response.data.result

        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async submitAssignment(file, assign_id, file_message, std_id, std_name){
        const formData = new FormData()
        formData.append('method', 'AssignmentSubmit')
        formData.append('file', file)
        formData.append('assign_id', assign_id)
        formData.append('assign_msg', file_message)
        formData.append('std_id', std_id)
        formData.append('std_name', std_name)

        try{
            await axios.post(`${this.apiUrl}`, formData)

        } catch (error){
            console.error('Error fetching data', error)
        }
    }

}



export default Database