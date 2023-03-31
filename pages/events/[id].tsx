import React, { useEffect } from "react";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/EventSummary";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import { getEventById } from "@/dummy-data";

const EventPage: React.FC = () => {
  const router = useRouter();

  // console.log(router.query.id);

  const eventId = router.query.id as string[] | undefined;
  const event = typeof eventId === "string" ? getEventById(eventId) : undefined;

  useEffect(() => {
    if (!event) {
      router.push("/404");
    }
  }, [event, router]);

  return (
    <div>
      <>
        <EventSummary title={event?.title} />
        <EventLogistics
          date={event?.date}
          address={event?.location}
          image={event?.image}
          imageAlt={event?.title}
        />
        <EventContent>
          <p>{event?.description}</p>
        </EventContent>
      </>
    </div>
  );
};

export default EventPage;
