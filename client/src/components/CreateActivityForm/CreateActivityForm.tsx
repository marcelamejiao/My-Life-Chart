import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserActivity } from "../../services/activities";
import User from "../../models/users";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock }from '@fortawesome/free-solid-svg-icons';

type Props = {
  selectedUser: User | null,
	setAdded: (added: number) => void,
  added: number
}

export type CreateActivityFormValues = {
  name: string,
  category: string,
  distance: number,
  start: string,
  end: string
}

const CreateActivyForm = ({ selectedUser, setAdded, added }:Props) => {
	const [error, setError] = useState(false);
	const navigate = useNavigate();
  
  const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<CreateActivityFormValues>()

  const onSubmit: SubmitHandler<CreateActivityFormValues> = async (data: CreateActivityFormValues, event?: React.BaseSyntheticEvent) => {
		event?.preventDefault();

    // For TypeScript requirements
    if(!selectedUser) {
      return ;
    }

    // To change the local timezone to UTC 
    const startObj = new Date(data.start);
    data.start = startObj.toJSON();
    const endObj =  new Date(data.end);
    data.end = endObj.toJSON();

		try {
			if (error) {
				setError(false);
			}
			await createUserActivity(data, selectedUser.id);
			setAdded(added + 1);
			navigate("/activities");
		} catch (e) {
			setError(true);
		}
	};

  return (
		<div className="p-2">
			<h1 className="text-2xl py-2 animate-pulse text-sky-700 text-center bg-gray-100 font-bold tracking-widest">My new activity</h1>
			<div className="flex justify-center items-center">
				<form onSubmit={handleSubmit(onSubmit)} className="w-3/4 gap-y-6 flex flex-col justify-center items-center px-4 py-6 shadow-md rounded">
					<div className="w-full flex items-center justify-center">
						<input
						{...register("name",
							{required: true})}
							aria-invalid={errors.name ? "true" : "false"}
							placeholder="Activity Name"
							className="w-3/4 rounded text-xl font-semibold text-amber-500 hover:bg-zinc-50 bg-slate-50 py-1 pl-1 border-0 outline-none border-solid border-b border-amber-500 hover:border-b-2"
						/>
						{errors.name?.type === "required" && (
							<p role="alert" className="text-red-500">Activity name is required</p>
						)}
					</div>
					<div className="w-3/4 flex items-center justify-center flex-row gap-x-4">
						<div className="w-5/6 flex items-center justify-center">
							<select
								id="categories"
								{...register("category",
									{required: true})}
									aria-invalid={errors.category ? "true" : "false"}
									className="w-full rounded text-md text-gray-500 hover:bg-zinc-50 bg-slate-50 pb-1 pl-1 outline-none border border-solid border-gray-300"
							>
								<option value="">Select category...</option>
								<option value="Run">Run</option>
								<option value="Run">Walk</option>
							</select>
							{errors.category?.type === "required" && (
								<p role="alert" className="text-red-500">Category is required</p>
							)}
						</div>
						<div className="w-1/6 flex items-center justify-start">
							<input
							{...register("distance",
								{required: true})}
								aria-invalid={errors.distance ? "true" : "false"}
								type="number"
								placeholder="Km"
								className="w-full rounded text-md text-gray-500 hover:bg-zinc-50 bg-slate-100 py-1 pl-1 outline-none border border-solid border-gray-300"
							/>
							{errors.distance?.type === "required" && (
								<p role="alert" className="text-red-500">Distance is required</p>
							)}
						</div>
					</div>
					<div className="flex justify-center items-center gap-y-1 m-3 text-md">
						<label className="text-gray-500 w-1/3"><FontAwesomeIcon icon={faClock} className="px-2 text-gray-500" />Start:</label>
						<input
						{...register("start",
							{required: true})}
							aria-invalid={errors.start ? "true" : "false"}
							type="datetime-local"
							className="w-2/3 rounded text-gray-500 hover:bg-zinc-50 bg-slate-100 p-1 outline-none border border-solid border-gray-300"
						/>
						{errors.start?.type === "required" && (
							<p role="alert" className="text-red-500">Start time is required</p>
						)}
					</div>
					<div className="flex justify-center items-center gap-y-1 m-3 text-md">
						<label className="text-gray-500 w-1/3"><FontAwesomeIcon icon={faClock} className="px-2 text-gray-500" />End:</label>
						<input
						{...register("end",
							{required: true})}
							aria-invalid={errors.end ? "true" : "false"}
							type="datetime-local"
							className="w-2/3 rounded text-gray-500 hover:bg-zinc-50 bg-slate-100 p-1 outline-none border border-solid border-gray-300"
						/>
						{errors.end?.type === "required" && (
							<p role="alert" className="text-red-500">End time is required</p>
						)}
					</div>
					<div>
						<input
							type="submit"
							value="Create"
							className="w-28 cursor-pointer text-sm rounded-md border border-amber-500 border-b-2 hover:border-b text-amber-500 px-2 py-1 w-30 hover:scale-105 hover:bg-slate-150"
						/>
					</div>
				</form>
			</div>
		</div>
  )
}

export default CreateActivyForm;