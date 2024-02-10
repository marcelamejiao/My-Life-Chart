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
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
			<div className="flex flex-col gap-y-1 m-3">
				<label>Create a username:</label>
				<input
				{...register("name",
					{required: true})}
					aria-invalid={errors.name ? "true" : "false"}
					placeholder="E.g. Marcela"
					className=""
				/>
				{errors.name?.type === "required" && (
          <p role="alert" className="text-red-500">User's name is required</p>
        )}
			</div>
			<div className="flex flex-col gap-y-1 m-3">
				<label>How old are you?</label>
				<input
				{...register("age",
					{required: true})}
					aria-invalid={errors.name ? "true" : "false"}
					placeholder="E.g. 28"
				/>
				{errors.age?.type === "required" && (
          <p role="alert" className="text-red-500">Age is required</p>
        )}
			</div>
			<div>
			<input
          type="submit"
          value="Save"
          className="cursor-pointer rounded-md bg-orange-500 text-white p-1 w-20"
        />
			</div>
		</form>
	)
}