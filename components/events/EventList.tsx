import EventItem from "./EventItem";
import React from "react";
import { Event } from "@/interfaces/event-interface";
import classes from "./EventList.module.css";

interface Props {
  items: Event[];
}

const EventList: React.FC<Props> = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          description={event.description}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
};

export default EventList;
