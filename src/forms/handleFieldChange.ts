export default function handleFieldChange(context: any, event: any, parent?: any | null) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if(!disabled) {
        var { name, value, maxLength, disabled, type } = event.target;

        if(type === "checkbox") {
            value = event.target.checked;
        }
        else {
            if(maxLength && maxLength > 0)
                value = value.slice(0, maxLength);
        }

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