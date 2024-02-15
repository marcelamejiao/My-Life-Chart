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
      <h1 className="font-title text-4xl tracking-wide text-center text-sky-800 py-4">My Life Chart</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center m-2">
          <select 
            id="users"
            {...register("selectedUserId",
            {required: true})}
            className="rounded p-2 text-sky-800 shadow-sm shadow-black "
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
              className="cursor-pointer rounded-md  shadow-sm shadow-black  bg-amber-500 hover:bg-lime-500 text-white p-1 w-20"
          />
        </div>
        <div className="flex justify-center m-2">
          <p           
            onClick={navigateToRegister}
            className="text-center cursor-pointer rounded-md  shadow-sm shadow-black  bg-amber-500 hover:bg-lime-500 text-white p-1 w-20"
          >Register
          </p>
        </div>
      </form>
      </div>
    <div className="bg-cover bg-[url('./assets/login-wallpaper.jpg')] w-full "></div>
    </>

  )
}