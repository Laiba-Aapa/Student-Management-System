import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import LightPurpleButton from '@/components/Buttons/LightPurpleButton';

const Homepage: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full  sm:w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex justify-center flex-1">
          <Image src='/students.svg' alt="students" height={12} width={12} className="w-full h-auto hidden md:block" />
        </div>
        <div className="flex flex-1 flex-col justify-center items-center  p-6">
          <div className="bg-white p-6 h-screen flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to
              <br />
              School Management
              <br />
              System
            </h1>
            <p className="mt-6 mb-6">
              Streamline school management, class organization, and add students and faculty.
              Seamlessly track attendance, assess performance, and provide feedback.
              Access records, view marks, and communicate effortlessly.
            </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link href="/users" passHref>
                <LightPurpleButton fullWidth>
                  Login
                </LightPurpleButton>
              </Link>

              <p className="text-center">
                Don&apos;t have an account?
                <Link href="/adminRegister" className="text-purple-900">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
