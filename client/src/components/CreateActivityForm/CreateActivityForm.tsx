import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserActivity } from "../../services/activities";
import User from "../../models/users";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
      <h2>My new activity</h2>
      <div className="flex flex-col gap-y-1 m-3">
				<label>Activity name:</label>
				<input
				{...register("name",
					{required: true})}
					aria-invalid={errors.name ? "true" : "false"}
				/>
				{errors.name?.type === "required" && (
          <p role="alert" className="text-red-500">Activity name is required</p>
        )}
			</div>
      <div className="flex flex-col gap-y-1 m-3">
				<label>Category</label>
				<input
				{...register("category",
					{required: true})}
					aria-invalid={errors.category ? "true" : "false"}
				/>
				{errors.category?.type === "required" && (
          <p role="alert" className="text-red-500">Category is required</p>
        )}
			</div>
      <div className="flex flex-col gap-y-1 m-3">
				<label>Distance(km):</label>
				<input
				{...register("distance",
					{required: true})}
					aria-invalid={errors.distance ? "true" : "false"}
				/>
				{errors.distance?.type === "required" && (
          <p role="alert" className="text-red-500">Distance is required</p>
        )}
			</div>
      <div className="flex flex-col gap-y-1 m-3">
				<label>Start:</label>
				<input
				{...register("start",
					{required: true})}
					aria-invalid={errors.start ? "true" : "false"}
          type="datetime-local"
				/>
				{errors.start?.type === "required" && (
          <p role="alert" className="text-red-500">Start time is required</p>
        )}
			</div>
      <div className="flex flex-col gap-y-1 m-3">
				<label>End:</label>
				<input
				{...register("end",
					{required: true})}
					aria-invalid={errors.end ? "true" : "false"}
          type="datetime-local"
				/>
				{errors.end?.type === "required" && (
          <p role="alert" className="text-red-500">End time is required</p>
        )}
			</div>
      <div>
        <input
          type="submit"
          value="Create"
          className="cursor-pointer rounded-md bg-orange-500 text-white p-1 w-20"
        />
      </div>
    </form>
  )
}

export default CreateActivyForm;