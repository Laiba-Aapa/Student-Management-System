"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputFields from './InputFields';
import Link from "next/link";

const schema = z.object({
    adminName: z
        .string()
        .min(3, { message: "adminName must be atleast 3 characters long!" })
        .max(20, { message: "adminName must be most 20 characters long!" }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
        .string()
        .min(8, { message: "Password must be atleast 8 characters long" }),
    schoolName: z.string().min(1, { message: "School Name is required" }),
    rollnumber: z.string().min(1, { message: "Roll Number is required" }),

});
type inputs = z.infer<typeof schema>;



const Login = ({ user, heading, description, link }: { user: string; heading: string; description: string; link: string; }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<inputs>({
        resolver: zodResolver(schema),
    });
    return (
        <div className="flex h-screen">
            <div className="flex flex-col justify-center w-full max-w-md p-8 bg-white mx-auto">
                <h1 className="text-3xl font-semibold text-purple-900 mb-4 text-center">{heading}</h1>
                <p className={`text-sm mb-6 ${heading === "AdminRegister" ? "" : "text-center"}`}>
                    {description}
                </p>
                <form className="space-y-4" onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}>
                    {
                        user === "student" ? (<InputFields
                            name="rollnumber"
                            register={register}
                            placeholder='Roll Number'
                            error={errors?.rollnumber}
                        />) : (<InputFields
                            name="adminName"
                            register={register}
                            placeholder='Admin Name'
                            error={errors?.adminName}
                        />)
                    }

                    {
                        user === "AdminRegister" &&

                        <InputFields
                            name="schoolName"
                            register={register}
                            error={errors?.schoolName}
                            placeholder="Create your school name"
                        />
                    }
                    <InputFields
                        name="email"
                        register={register}
                        error={errors?.email}
                        placeholder="Enter your email"
                    />
                    <InputFields
                        name="password"
                        type='password'
                        register={register}
                        error={errors?.email}
                        placeholder="password"
                    />
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                    </div>
                    <Link href={link}>
                        <button

                            className="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-md"
                        >
                            Register
                        </button>
                    </Link>
                </form>

                <div className="mt-4 flex justify-between text-sm">
                    {
                        user === "adminLogin" || user === "adminRegister" ? (
                            <>
                                <p>{user === "adminLogin" ? "Don't have an account?" : "Already have an account?"}</p>
                                <a href={user === "adminLogin" ? "/adminRegister" : "/adminlogin"} className="text-purple-600 hover:underline">
                                    {user === "adminLogin" ? "Sign-up" : "Login"}
                                </a>
                            </>
                        ) : (
                            ""
                        )
                    }

                </div>
            </div>

        </div >
    );
};

export default Login;
