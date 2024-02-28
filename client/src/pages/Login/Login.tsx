import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/users";
import User from "../../models/users";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {
  setSelectedUser(selectedUser: User): void;
}

type LoginFormValues = {
	selectedUserId: string,
}

export default function Login({ setSelectedUser }: Props) {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then((users) => {
      setAllUsers(users);
    });
  }, []);

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<LoginFormValues >()

	const onSubmit: SubmitHandler<LoginFormValues > = async (data: LoginFormValues , event?: React.BaseSyntheticEvent) => {
    const user = allUsers.find((user) => user.id === Number(data.selectedUserId));

    // For TypeScript requirements
    if(!user) {
      return ;
    }

    event?.preventDefault();
		try {
			if (error) {
				setError(false);
			}
      setSelectedUser(user);
      navigate('/dashboard');
		} catch (e) {
			setError(true);
		}
	};

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="flex flex-col justify-center pr-4 pt-2">
      <h1 className="font-title text-4xl tracking-wide text-center text-sky-800 py-4 animate-pulse">My Life Chart</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center m-2">
          <select 
            id="users"
            {...register("selectedUserId",
            {required: true})}
            className="rounded py-1 px-2 text-sky-800 shadow-sm shadow-black hover:bg-slate-50 "
          >
            <option value="">Select user...</option>
            {allUsers.map((user) => {
              return (<option key={user.id} value={user.id}>{user.name}</option>)
            })}
          </select>
          {errors.selectedUserId?.type === "required" && (
            <p role="alert" className="text-red-500">Please select a user from the list</p>
          )}
        </div>
        <div className="flex justify-center m-2">
          <input
            type="submit"
            value="Login"
            className="w-28 cursor-pointer text-sm rounded-md border border-amber-500 border-b-2 hover:border-b text-amber-500 px-2 py-1 w-30 hover:scale-105 hover:bg-slate-150"
          />
        </div>
        <div className="flex justify-center m-2">
          <input           
            onClick={navigateToRegister}
            type="button"
            value="Register"
            className="w-28 cursor-pointer text-sm rounded-md border border-amber-500 border-b-2 hover:border-b text-amber-500 px-2 py-1 w-30 hover:scale-105 hover:bg-slate-150"
          />
        </div>
      </form>
      </div>
    <div className="bg-cover bg-[url('./assets/login-wallpaper.jpg')] w-full "></div>
    </>

  )
}