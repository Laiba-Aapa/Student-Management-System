import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
    return (
        <div className='flex-1 p-4 flex flex-col xl:flex-row gap-4'>
            {/* left */}
            <div className="w-full xl:w-2/3 ">

                {/* top */}
                <div className="flex flex-col lg:flex-row gap-4 ">
                    {/* user info section */}
                    <div className="flex flex-1 gap-4 bg-lmsSky py-6 px-4 rounded-md">
                        <div className="w-1/2">
                            <Image src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        {/* teacher details */}
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <div className="flex items-center gap-4">

                                <h2 className="text-xl font-semibold">Allan Grace</h2>
                                <FormModal table="teacher" type="update" data={{
                                    id: 1, userName: "laiba", email: "laiba@lms", password: "password", firstName: "lara", lastName: "Duta", phone: "976676y", address: "abc chowk , pakistan", bloodGroup: "A-", birthday: "2000-02-02", gender: 'female', img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }} />
                            </div>

                            <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium ">

                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/blood.png' alt="" width={14} height={14} />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/date.png' alt="" width={14} height={14} />
                                    <span>January 2024</span>
                                </div>

                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/mail.png' alt="" width={14} height={14} />
                                    <span>teacher@lms.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                    <Image src='/phone.png' alt="" width={14} height={14} />
                                    <span>+19 923 58578 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* small cards */}
                    <div className="flex-1 flex flex-wrap justify-between gap-4">
                        {/* cards */}
                        <div className="flex gap-4 bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src='/singleAttendance.png' alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src='/singleBranch.png' alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src='/singleLesson.png' alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">9</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src='/singleClass.png' alt="" width={24} height={24} className="w-6 h-6" />
                            <div>
                                <h1 className="text-xl font-semibold">5</h1>
                                <span className="text-sm text-gray-400">classes</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* bottom */}
                <div className="mt-4 p-4 bg-white rounded-md h-[800px]">
                    <h1 className="text-lg font-semibold">Teacher&apos;s Schedule</h1>
                    <BigCalendar />
                </div>




            </div>
            {/* right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4 ">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                        <Link href='/' className="p-3 rounded-md bg-lmsSkyLight">Teacher&apos;s Classes</Link>
                        <Link href='/' className="p-3 rounded-md bg-lmsPurpleLight">Teacher&apos;s Students</Link>
                        <Link href='/' className="p-3 rounded-md bg-lmsYellowLight">Teacher&apos;s Lessons</Link>
                        <Link href='/' className="p-3 rounded-md bg-pink-50">Teacher&apos;s Exam</Link>
                        <Link href='/' className="p-3 rounded-md bg-lmsSkyLight">Teacher&apos;s Assignments</Link>
                    </div>
                </div>
                <Performance />
                <Announcements />
            </div>
        </div>
    )
}

export default SingleTeacherPage