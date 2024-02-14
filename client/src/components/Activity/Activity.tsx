import ActivityModel from "../../models/activities";

type Props = {
  activity: ActivityModel
}

const Activity = ({ activity }: Props) => {

  // Show the time 
  const startTime = activity.start;
  console.log(startTime);

  // Calculate duration of the activity 

  return (
    <>
      <h1>{activity.name}</h1>
      <h2>{activity.category}</h2>
      <p>{activity.distance}</p>
      {/* <p>{activity.start}</p>
      <p>{activity.end}</p> */}
      <p>Duration:</p>

    
    
    </>
  )
}

export default Activity;