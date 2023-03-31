import classes from "./LogisticsItem.module.css";

interface Props {
  children: React.ReactNode;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const LogisticsItem: React.FC<Props> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
