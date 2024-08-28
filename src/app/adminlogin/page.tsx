import Login from "@/components/Login/Login"

const AdminLogin = () => {
    return (
        <div className=''>
            <Login user="adminLogin" heading="Admin Login" description="Welcome back! Please enter your details" link="/admin" />
        </div>
    )
}

export default AdminLogin