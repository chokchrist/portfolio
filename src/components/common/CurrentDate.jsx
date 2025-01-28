/* eslint-disable react/prop-types */
export default function CurrentDate(props) {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="hidden text-sm font-medium overflow-hidden sm:flex">
      <span
        ref={props.dateRef}
        className="overflow-hidden inline-block align-bottom"
      >
        {date}
      </span>
    </div>
  );
}
