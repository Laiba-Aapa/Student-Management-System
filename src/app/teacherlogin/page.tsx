import Login from "@/components/Login/Login"

const TeacherLogin = () => {
    return (
        <div className=''>
            <Login user="teacher" heading="Teacher Login" description="Welcome back! Please enter your details" link="/teacher" />
        </div>
    )
}

export default TeacherLogin;