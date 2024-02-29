import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import duration from "dayjs/plugin/duration";
import relativeTime from 'dayjs/plugin/relativeTime';
import ActivityModel from "../../models/activities";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning, faCalendarDays, faClock }from '@fortawesome/free-solid-svg-icons';

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
    <div className="flex items-center justify-center">
      <div className="flex items-center w-3/4 text-gray-600 hover:text-gray-700 m-3 pl-2 pr-4 py-3 shadow-sm shadow-purple-200 rounded hover:shadow-sm hover:shadow-purple-400">
        <div className="w-1/4 text-sm">
          <h2 className="p-1 text-center text-sky-700 rounded shadow-sm">{activity.name}</h2>
        </div>
        <div className="w-2/4 p-2 text-sm">
          <h2><FontAwesomeIcon icon={faPersonRunning} className="px-2 text-amber-500"/>Category: {activity.category}</h2>
          <p><FontAwesomeIcon icon={faCalendarDays} className="px-2 text-amber-500" />Date: {startDate}</p>
          <p><FontAwesomeIcon icon={faClock} className="px-2 text-amber-500" />Duration: {durationTime}</p>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center">
          <div className="px-2 text-center text-2xl text-amber-500">{activity.distance}Km</div>
        </div>
      </div>

    </div>
  )
}

export default Activity;