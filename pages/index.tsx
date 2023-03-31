import { useRouter } from "next/router";
import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { Event } from "@/interfaces/event-interface";

const HomePage: React.FC = () => {
  const router = useRouter();
  const events: Event[] = getAllEvents();

  const searchHandler = (year: string, month: string): void => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </>
  );
};

export default HomePage;
