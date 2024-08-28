

import ChooseUser from "@/components/Login/ChooseUser";

const Users = () => {


    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="flex flex-wrap justify-center gap-8">
                <ChooseUser user="Admin" bg="bg-lmsDarkSky" />
                <ChooseUser user="Student" bg="bg-lmsDarkYellow" />
                <ChooseUser user="Teacher" bg="bg-lmsDarkPurple" />

            </div>
        </div>
    );
}

export default Users;
