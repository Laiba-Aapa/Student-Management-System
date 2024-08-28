"use client"
import { useRouter } from 'next/navigation'; // Correct import for server components

const ChooseUser = ({ user, bg, }: { user: string; bg: string; }) => {
    const router = useRouter();

    const navigateHandler = (user: string) => {
        if (user === "Admin") {
            router.push('/adminlogin');
        } else if (user === "Student") {
            router.push('/studentlogin');
        } else if (user === "Teacher") {
            router.push('/teacherlogin');
        }
    }

    return (
        <div onClick={() => navigateHandler(user)} className={` ${bg} text-white text-center p-8 rounded-lg shadow-md cursor-pointer w-1/4`}>
            <div className="mb-4">
                {/* Icon for Admin */}
            </div>
            <h2 className="text-xl font-bold mb-2">{user}</h2>
            Login as an {user === "Admin" ? "Administrator" : user} to access the dashboard to manage app data.
        </div>


    );
}

export default ChooseUser;
