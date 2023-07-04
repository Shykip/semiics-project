import axios from 'axios'

class Database{

    constructor() {
        this.apiUrl = "http://localhost/semiics/"
    }

    async fetchAssignData(std_id){

        let formdata = new FormData()
        formdata.append("std_id", std_id)

        formdata.append("method", "GetAssignment")

        try{
            const response = await axios.post(`${this.apiUrl}index.php`, formdata)
            return response.data.result
            
        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async fetchAssignDataTeacher(teacher_id){

        let formdata = new FormData()
        formdata.append("teacher_id", teacher_id)

        formdata.append("method", "GetAssignmentTeacher")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
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
            const response = await axios.post(`${this.apiUrl}index.php`, formdata)
            return response.data.result

        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async authTeacher(username, password){

        let formdata = new FormData()
        formdata.append("username", username)
        formdata.append("password", password)

        formdata.append("method", "AuthTeacher")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
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
            const response = await axios.post(`${this.apiUrl}index.php`, formdata)
            return response.data.result

        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async getTeacherInfo(teacher_id){

        let formdata = new FormData()
        formdata.append("teacher_id", teacher_id)

        formdata.append("method", "GetTeacherInfo")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
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
            await axios.post(`${this.apiUrl}index.php`, formData)

        } catch (error){
            console.error('Error fetching data', error)
        }
    }

    async createAssignment(file, assign_id, file_message, std_id, std_name){
        const formData = new FormData()
        formData.append('method', 'AssignmentSubmit')
        formData.append('file', file)
        formData.append('assign_id', assign_id)
        formData.append('assign_msg', file_message)
        formData.append('std_id', std_id)
        formData.append('std_name', std_name)

        try{
            await axios.post(`${this.apiUrl}index.php`, formData)

        } catch (error){
            console.error('Error fetching data', error)
        }
    }

}



export default Database