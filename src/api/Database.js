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

    async fetchClasses(){

        const formdata = new FormData()

        formdata.append("method", "GetClassInfo")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
            return response.data.result
            
        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async deleteAssignment(assign_id){

        let formdata = new FormData()
        formdata.append("assign_id", assign_id)

        formdata.append("method", "DeleteAssignment")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
            return response.data.result
            
        } catch(error) {
            console.error('Error fetching data', error)
        }
    }

    async addAssignment(semester, subject, description, post_date, dead_date, teacher_id){

        let formdata = new FormData()
        formdata.append("semester", semester)
        formdata.append("subject", subject)
        formdata.append("description", description)
        formdata.append("post_date", post_date)
        formdata.append("dead_date", dead_date)
        formdata.append("teacher_id", teacher_id)

        formdata.append("method", "AddAssignment")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
            console.log(response)
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

    async submitAssignment(file, assign_id, file_message, std_id, std_name, teacher_id){
        const formData = new FormData()
        formData.append('method', 'AssignmentSubmit')
        formData.append('file', file)
        formData.append('assign_id', assign_id)
        formData.append('assign_msg', file_message)
        formData.append('std_id', std_id)
        formData.append('std_name', std_name)
        formData.append('teacher_id', teacher_id)

        try{
            await axios.post(`${this.apiUrl}index.php`, formData)

        } catch (error){
            console.error('Error fetching data', error)
        }
    }

    async getAssignSubmits(teacher_id){

        let formdata = new FormData()
        formdata.append("teacher_id", teacher_id)

        formdata.append("method", "GetAssignSubmits")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
            return response.data.result

        } catch(error) {
            console.error('Error fetching data', error)
        }

    }

    async updateAssignStatus(status, asub_id, assign_id, std_id){

        let formdata = new FormData()
        formdata.append("status", status)
        formdata.append("asub_id", asub_id)
        formdata.append("assign_id", assign_id)
        formdata.append("std_id", std_id)
        

        formdata.append("method", "UpdateAssignStatus")

        try{
            const response = await axios.post(`${this.apiUrl}teacher.php`, formdata)
            return response.data.result

        } catch(error) {
            console.error('Error fetching data', error)
        }

    }

}



export default Database