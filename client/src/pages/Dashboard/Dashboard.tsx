import User from "../../models/users";

type Props = {
  selectedUser: User|null
};

const Dashboard = ({ selectedUser }: Props) => {
  return (<div>
      {selectedUser?.name}
  </div>);
};

export default Dashboard;
