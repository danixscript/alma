import { useEffect, useContext } from "react";
import { ScrollContextP } from "./ScrollContainerP";

export default props => {
  const context = useContext(ScrollContextP);
  useEffect(() => context.addBlock(props), []);
  return props.children;
};
