"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFields from "./InputFields";
import Image from "next/image";

const schema = z.object({
    userName: z
        .string()
        .min(3, { message: "UserName must be atleast 3 characters long!" })
        .max(20, { message: "UserName must be most 20 characters long!" }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
        .string()
        .min(8, { message: "Password must be atleast 8 characters long" }),
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    bloodGroup: z.string().min(1, { message: "Blood Group is required" }),
    birthday: z.date({ message: "Address is required" }),
    gender: z.enum(["male", "female"], { message: "Gender is required" }),
    img: z.instanceof(File, { message: "Image is required" }),
});
type inputs = z.infer<typeof schema>;

const TeacherForm = ({
    type,
    data,
}: {
    type: "create" | "update";
    data?: any; // will get previous values if type === "update" 
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<inputs>({
        resolver: zodResolver(schema),
    });

    return (
        <form
            action=""
            className="flex flex-col gap-8"
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
        >
            <h1 className="text-xl font-semibold">Create a new Teacher</h1>
            <span className="text-xs text-gray-400 font-medium">
                Authentication Informatin
            </span>
            <div className="flex justify-between flex-wrap gap-4 ">
                <InputFields
                    label="User Name"
                    name="userName"
                    defaultValue={data?.userName}
                    register={register}
                    error={errors?.userName}
                />
                <InputFields
                    label="Email"
                    name="email"
                    type="email"
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.email}
                />
                <InputFields
                    label="Password"
                    name="password"
                    type="password"
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />
            </div>

            <span className="text-xs text-gray-400 font-medium">
                Personal Informatin
            </span>


            <div className="flex justify-between flex-wrap gap-4 ">
                <InputFields
                    label="First Name"
                    name="firstName"
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors?.firstName}
                />
                <InputFields
                    label="Last Name"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors?.lastName}
                />
                <InputFields
                    label="Phone"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors?.phone}
                />
                <InputFields
                    label="Address"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors?.address}
                />
                <InputFields
                    label="Blood Group"
                    name="bloodGroup"
                    defaultValue={data?.bloodGroup}
                    register={register}
                    error={errors?.bloodGroup}
                />
                <InputFields
                    label="DOB"
                    name="birthday"
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors?.birthday}
                    type="date"
                />
            </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label htmlFor="" className="text-xs text-gray-500">Gender</label>
                    <select  {...register("gender")} className="w-full border-[1.5px] border-gray-300 rounded-md text-sm outline-none p-2" >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender?.message && <p className="text-xs text-red-400">{errors.gender?.message.toString()}</p>}
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label htmlFor="img" className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer">
                        <Image src='/upload.png' alt="" width={28} height={28} />
                        <span>Upload a Photo</span>
                    </label>
                    <input type="file" id="img" {...register('img')} className="hidden" />
                    {errors.img?.message && <p className="text-xs text-red-400">{errors.img?.message.toString()}</p>}
                </div></div>

            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    );
};

export default TeacherForm;
