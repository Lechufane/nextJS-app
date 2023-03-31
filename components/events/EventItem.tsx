import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

import { Event } from "@/interfaces/event-interface";

import classes from "./EventItem.module.css";
import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

interface Props extends Event {}

const EventItem: React.FC<Props> = (props) => {
  const { id, title, description, location, date, image, isFeatured } = props;

  const niceDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const niceAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt='' />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{niceDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{niceAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
