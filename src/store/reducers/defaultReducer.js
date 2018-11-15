const defaultState = {
    data: []
}
export default function DefaultReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE":
            return { ...state, data: payload };
        default:
            return state;
    }
}