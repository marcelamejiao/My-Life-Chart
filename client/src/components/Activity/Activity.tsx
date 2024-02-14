import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import duration from "dayjs/plugin/duration";
import relativeTime from 'dayjs/plugin/relativeTime';
import ActivityModel from "../../models/activities";

type Props = {
  activity: ActivityModel
}

const Activity = ({ activity }: Props) => {

  // Show the activity date
  dayjs.extend(localizedFormat)
  const startDate = dayjs(activity.start).format('llll');

  // Calculate duration of the activity
  dayjs.extend(duration);
  dayjs.extend(relativeTime);
  const durationTime = dayjs.duration(dayjs(activity.end).diff(activity.start)).format("H [hours] m [minutes]");

  return (
    <>
      <h1>{activity.name}</h1>
      <h2>{activity.category}</h2>
      <p>{activity.distance}</p>
      <p>{startDate}</p>
      <p>Duration: {durationTime} </p>
    </>
  )
}

export default Activity;