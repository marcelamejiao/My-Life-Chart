import Activity from "../../components/Activity/Activity";
import ActivityModel from "../../models/activities";

type Props = {
  activities: ActivityModel[];
}  

const Activities = ({ activities }: Props) => {

  return (
    <div>
      {activities.length > 0 &&
        activities.map((activity) => {
          return (
            <Activity
              activity={activity}
              key={activity.id}
            />
          )
        })
      }      
    </div>
  )
}

export default Activities;