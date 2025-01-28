/* eslint-disable react/prop-types */
export default function Menu(props) {
  const text = "Menu";

  return (
    <div ref={props.menuRef} className="text-lg font-medium leading-5 pointer-events-auto overflow-hidden">
      <span className="italic">( </span>
      <button type="button" className="relative cursor-pointer">
        <span className="inline-block overflow-visible">
          {text.split("").map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </span>

        <span className="absolute top-0 left-0 right-0">
          <span className="inline-block overflow-visible">
            {text.split("").map((letter, index) => (
              <span key={index} className="inline-block">
                {letter}
              </span>
            ))}
          </span>
        </span>

        <div id="hover" className="absolute inset-0"></div>
      </button>
      <span className="italic"> )</span>
    </div>
  );
}
