import React, {ReactNode} from "react";
import Card from './card'
import styles from './activity-list.module.css'

interface Event {
    id: string;
    title: string;
    startDateTime: Date;
    endDateTime: Date;
}

const events = [
  {
    id: "1",
    title: "Yoga",
    startDateTime: new Date("2023-04-15T13:00:00Z"),
    endDateTime: new Date("2023-04-15T15:00:00Z"),
  },
  {
    id: "2",
    title: "Walk",
    startDateTime: new Date("2023-04-16T10:00:00Z"),
    endDateTime: new Date("2023-04-16T12:00:00Z"),
  },
];

function ActivityList() {
  return (
    <Card title="Recent Activities">
      <ul className={styles.activityList}>
        {events.map((event) => (
          <li key={event.id} className={styles.eventItem}>
            <div className={styles.eventMarker}></div>
            <div className={styles.eventContent}>
            <p>
                {event.startDateTime.toLocaleString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
                {" at "}
                {event.startDateTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                -
                {event.endDateTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className={styles.eventTitle}>{event.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default ActivityList;