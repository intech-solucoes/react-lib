"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleFieldChange(context, event, parent) {
    var _a, _b;
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var name = event.target.name;
    var value = event.target.value;
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
exports.default = handleFieldChange;
