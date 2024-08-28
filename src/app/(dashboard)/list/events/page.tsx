
import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { assignmentsData, eventsData, examsData, resultsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Results = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;


}
const columns = [
    {
        header: 'Title', accessor: 'title',
    },
    {
        header: 'Class', accessor: 'class',
    },
    {
        header: 'Date', accessor: 'date', className: 'hidden md:table-cell',
    },

    {
        header: 'Start Time', accessor: 'startTime', className: 'hidden md:table-cell',
    }, {
        header: 'End Time', accessor: 'endTime', className: 'hidden md:table-cell',
    },
    {
        header: 'Actions', accessor: 'actions',
    },


]
const EventsListPage = () => {
    const renderRow = (item: Results) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lmsPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.title}</h3>
                </div>
            </td>
            <td >{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.startTime}</td>
            <td className="hidden md:table-cell">{item.endTime}</td>
            <td>
                <div className="flex items-center gap-2">

                    {
                        role === 'admin' && (
                            <>
                                <FormModal table="event" type="update" data={item} />
                                <FormModal table="event" type="delete" id={item.id} />
                            </>
                        )
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <div className=' bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* top */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">Results</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lmsYellow">
                            <Image src='/filter.png' alt="" height={14} width={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lmsYellow">
                            <Image src='/sort.png' alt="" height={14} width={14} />
                        </button>
                        <FormModal table="event" type="create" />
                    </div>
                </div>

            </div>

            {/* Table list */}
            <Table columns={columns} renderRow={renderRow} data={eventsData} />

            {/* pagination */}
            <Pagination />
        </div>
    )
}

export default EventsListPage;