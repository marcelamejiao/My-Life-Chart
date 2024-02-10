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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <select 
          id="users"
          {...register("selectedUserId",
          {required: true})}
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
      <div>
        <input
            type="submit"
            value="Login"
            className="cursor-pointer rounded-md bg-orange-500 text-white p-1 w-20"
        />
			</div>
      <div>
      <input
          onClick={navigateToRegister}
          type="url"
          value="Register"
          className="cursor-pointer underline-offset-1"
      />
      </div>
    </form>
  )
}