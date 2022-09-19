const component = (props) => {
    let elseChild = false;
    let children = props.children;
    if(Array.isArray(props.children)){
        elseChild = props.children.find(child => child.type && child.type.name === "Else") || false;
        children = props.children.filter(child => child !== elseChild);
    }

    return props.expression ? children : elseChild;
}
export default component;

export const Else = (props) => props.children;