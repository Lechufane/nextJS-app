import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

const EventsPage: React.FC = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Events Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default EventsPage;
