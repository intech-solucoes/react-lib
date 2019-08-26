export default function handleFieldChange(context: any, event: any, parent?: any | null) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var { name, value, maxLength, disabled } = event.target;

    if(!disabled) {
        if(maxLength && maxLength > 0)
            value = value.slice(0, maxLength);

        if(parent) {
            var parentObj = context.state[parent];
            parentObj[name] = value;

            context.setState({
                [parent]: parentObj
            });
        } else {
            context.setState({
                [name]: value
            });
        }
    }
}