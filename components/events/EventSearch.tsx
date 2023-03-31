import { useRef } from "react";
import Button from "../ui/Button";
import classes from "./EventSearch.module.css";

interface Props {
  onSearch?: (selectedYear: string, selectedMonth: string) => void;
}

const EventSearch: React.FC<Props> = (props) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedYear = yearInputRef.current!.value;
    const selectedMonth = monthInputRef.current!.value;

    if (props.onSearch) return props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>JAN</option>
            <option value='2'>FEB</option>
            <option value='3'>MAR</option>
            <option value='4'>APR</option>
            <option value='5'>MAY</option>
            <option value='6'>JUN</option>
            <option value='7'>JUL</option>
            <option value='8'>AUG</option>
            <option value='9'>SEPT</option>
            <option value='10'>OCT</option>
            <option value='11'>NOV</option>
            <option value='12'>DEC</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
