import React from "react";


interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

// FC = Function Component
// FC props 类型定义
// 不能将类型“({ id, onChange, value, label, type }: InputProps) => React.JSX.Element”分配给类型“FC<{}>”
const Input:React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className="block rounded-md px-6 pt-6 pb-1 w-full text-base text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
            />
            <label htmlFor={id} className="absolute text-base text-zinc-400  duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{label}</label>
        </div>
    )
}
export default Input

// 1. tailwind: peer 的用法很棒
// 2. 如果有记住密码，刷新，邮箱密码会自动填充