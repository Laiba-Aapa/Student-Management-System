"use client";
import Image from 'next/image';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 92, fill: "#c3ebfa" },
    { name: 'Group B', value: 8, fill: '#fae27c' },
];


const Performance = () => {
    return (
        <div className='bg-white rounded-md p-4 relative'>
            <div className="flex items-center justify-between">
                <h1 className='text-xl font-semibold'>Performance</h1>
                <Image src='/moreDark.png' alt='' height={16} width={16} />
            </div>
            <div style={{ width: '100%', height: 300 }}> {/* Ensure height is defined */}
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className='text-3xl font-bold'>9.2</h1>
                    <p className='text-xs text-gray-300'>of 10 max LTS</p>

                </div>
                <h2 className="absolute left-0 right-0 bottom-16 m-auto text-center font-bold">1st September - 2 september</h2>

            </div>
        </div>
    )
}
export default Performance;