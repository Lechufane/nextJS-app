import classes from "./EventSummary.module.css";

interface Props {
  title?: string;
}

const EventSummary: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
