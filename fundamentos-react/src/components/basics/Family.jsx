import { cloneElement } from "react";

const family = (props) => props.children.map((child, i) => cloneElement(child, {...props, key: i}));

export default family;