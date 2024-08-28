import Image from "next/image"

const TableSearch = () => {
    return (
        <div className="w-full md:w-auto flex md:flex items-center gap-2 text-xs rounded-full border-[1.5px] border-gray-300 px-2">
            <Image src='/search.png' alt="search" width={14} height={14} />
            <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
        </div>
    )
}

export default TableSearch