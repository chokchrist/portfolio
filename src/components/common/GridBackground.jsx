export default function GridBackground() {
  const divItems = Array.from({ length: 7 });

  return (
    <div className="fixed inset-0 grid grid-cols-8 gap-5 mx-5">
      {divItems.map((_, index) => (
        <div key={index} className="h-full w-[0.5px] bg-secondary-700"></div>
      ))}
      <div>
        <div className="h-full w-[0.5px] bg-secondary-700"></div>
        <div className="absolute right-0 top-0 h-full w-[0.5px] bg-secondary-700"></div>
      </div>
    </div>
  );
}
