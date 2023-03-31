import classes from "./EventContent.module.css";

interface Props {
  children: React.ReactNode;
}

const EventContent: React.FC<Props> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
