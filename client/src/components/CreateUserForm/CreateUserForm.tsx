import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { createUser } from "../../services/users";
import { useNavigate } from "react-router-dom";

export type CreateUserFormValues = {
	name: string,
	age : string
}

export default function CreateUserForm() {
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<CreateUserFormValues>()

	const onSubmit: SubmitHandler<CreateUserFormValues> = async (data: CreateUserFormValues, event?: React.BaseSyntheticEvent) => {
		event?.preventDefault();
		try {
			if (error) {
				setError(false);
			}
			await createUser(data);
			navigate("/")
		} catch (e) {
			setError(true);
		}
	};

	return(
		<div className="w-full flex flex-col items-center justify-center gap-4">
			<h1 className="w-3/4 text-2xl py-2 animate-pulse text-sky-700 text-center bg-gray-100 font-bold tracking-widest">Please create a user</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="w-3/4 gap-y-6 flex flex-col justify-center items-center px-4 py-6 shadow-md rounded">
				<div className="w-full flex  flex-col items-center justify-center">
					<label className="text-gray-500">Create a username:</label>
					<input
					{...register("name",
						{required: true})}
						aria-invalid={errors.name ? "true" : "false"}
						placeholder="E.g. Marcela"
						className="w-2/4 rounded text-md text-gray-500 hover:bg-zinc-50 bg-slate-50 pb-1 pl-1 outline-none border border-solid border-gray-300"
					/>
					{errors.name?.type === "required" && (
						<p role="alert" className="text-red-500">User's name is required</p>
					)}
				</div>
				<div className="w-full flex flex-col items-center justify-center">
					<label className="text-gray-500">How old are you?</label>
					<input
					{...register("age",
						{required: true})}
						aria-invalid={errors.name ? "true" : "false"}
						placeholder="E.g. 28"
						className="w-2/4 rounded text-md text-gray-500 hover:bg-zinc-50 bg-slate-50 pb-1 pl-1 outline-none border border-solid border-gray-300"
					/>
					{errors.age?.type === "required" && (
						<p role="alert" className="text-red-500">Age is required</p>
					)}
				</div>
				<div>
					<input
						type="submit"
						value="Save"
						className="w-28 cursor-pointer text-sm rounded-md border border-amber-500 border-b-2 hover:border-b text-amber-500 px-2 py-1 w-30 hover:scale-105 hover:bg-slate-150"
					/>
				</div>
			</form>
		</div>
	)
}