import { FieldError } from "react-hook-form";

type inputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}


const InputFields = ({ label, type = 'text', register, name, defaultValue, error, inputProps }: inputFieldProps) => {
    return (
        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label htmlFor="" className="text-xs text-gray-500">{label}</label>
            <input type={type} {...register(name)} className="w-full border-[1.5px] border-gray-300 text-sm rounded-md outline-none p-2"
                {...inputProps}
                defaultValue={defaultValue} />
            {error?.message && <p className="text-xs text-red-400">{error.message.toString()}</p>}
        </div>
    )
}

export default InputFields