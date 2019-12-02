"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleFieldChange(context, event, parent) {
    var _a, _b;
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (!disabled) {
        var _c = event.target, name = _c.name, value = _c.value, maxLength = _c.maxLength, disabled = _c.disabled, type = _c.type;
        if (type === "checkbox") {
            value = event.target.checked;
        }
        else {
            if (maxLength && maxLength > 0)
                value = value.slice(0, maxLength);
        }
        if (parent) {
            var parentObj = context.state[parent];
            parentObj[name] = value;
            context.setState((_a = {},
                _a[parent] = parentObj,
                _a));
        }
        else {
            context.setState((_b = {},
                _b[name] = value,
                _b));
        }
    }
}
exports.default = handleFieldChange;
