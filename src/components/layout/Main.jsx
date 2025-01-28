import CursorPointer from "../common/CursorPointer";
import GridBackground from "../common/GridBackground";

import Homepage from "./Homepage";

export default function Main() {
  return (
    <main className="w-full">
      <CursorPointer />
      <GridBackground />
      <Homepage />
    </main>
  );
}
