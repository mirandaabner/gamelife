import { useState } from "react";
import AllPages from "./AllPages";
import HomePage from "./homePage";

export default function Routes(){
    const [showHome, setShowHome] = useState("false");

    return <>{showHome === "true" ? <HomePage/> : <AllPages/>}</>;
}