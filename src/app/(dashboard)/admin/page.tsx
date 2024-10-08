import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountCharts from "@/components/CountCharts"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCards from "@/components/UserCards"

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row bg-[#f7f8fa] max-h-max'>
            {/* left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* cards */}
                <div className="flex flex-wrap gap-4 justify-between">
                    <UserCards type="Students" />
                    <UserCards type="Teachers" />
                    <UserCards type="Staffs" />
                </div>
                {/* middle charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountCharts />
                    </div>
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* bottom chart */}
                <div className="w-full height-[500px]">
                    <FinanceChart />
                </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default AdminPage