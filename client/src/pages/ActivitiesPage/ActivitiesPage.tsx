import Activities from "../../containers/Activities/Activities";
import Activity from "../../models/activities";

type Props = {
  activities: Activity[];
}

const ActivitiesPage = ({ activities }: Props) => {
  return (
    <>
      <Activities
        activities={activities}
      />
    </>
  )
}

export default ActivitiesPage;