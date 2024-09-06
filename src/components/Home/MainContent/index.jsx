import styles from "./index.module.css";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
import UpperRow from "./UpperRow";
import BottomRow from "./BottomRow";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
     <UpperRow />

     <BottomRow />
    </>
  );
};

export default MainContent;
