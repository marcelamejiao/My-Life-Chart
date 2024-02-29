import Activities from "../../containers/Activities/Activities";
import Activity from "../../models/activities";

type Props = {
  activities: Activity[];
}

const ActivitiesPage = ({ activities }: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl py-2 animate-pulse text-sky-700 text-center bg-gray-100 font-bold tracking-widest">My Activities</h1>
      <Activities
        activities={activities}
      />
    </div>
  )
}

export default ActivitiesPage;