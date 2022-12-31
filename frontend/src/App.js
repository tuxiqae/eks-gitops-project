import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [returnValue, setReturnValue] = useState();
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("http://localhost:8080", {
          mode: "cors",
        });
        setReturnValue(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  });
  return <div>API returned {returnValue}</div>;
}
export default App;
