import { useState } from "react";

export { useState } from "react";

const Community = () => {
  console.log("Community Component - Pages Router");

  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      {" "}
      COMMUNITY
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};
export default Community;
