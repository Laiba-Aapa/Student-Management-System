import { FieldError } from "react-hook-form";

type inputFieldProps = {
    type?: string;
    register: any;
    name: string;
    error?: FieldError;
    placeholder: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}


const InputFields = ({ type = 'text', register, name, error, placeholder, inputProps }: inputFieldProps) => {
    return (

        <div>
            <input
                type={type}
                {...register(name)}
                className="w-full border-[1.5px] border-gray-300 text-sm rounded-md outline-none p-2"
                placeholder={placeholder}
                {...inputProps}
            />
            {error?.message && (
                <p className="text-xs text-red-400">{error.message.toString()}</p>
            )}
        </div>
    )
}

export default InputFields