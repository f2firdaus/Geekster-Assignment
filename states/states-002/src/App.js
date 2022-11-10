import Main from "./component/Main";
import Input from "./component/Input";
import { useState } from "react";


function App() {
  const [markuplang, setMarkuplang] = useState("");
  return (
    < div  style={{display : "flex"
    }}>
      <Input setdatafn={setMarkuplang}></Input>
      <Main markupdata={markuplang}></Main>
    </div>
  );
}

export default App;