import React from "react";
import RouteMap from "./map";
import Routes from "./routes";

class RouterView extends React.Component {
    render() {
        let { routes } = this.props;
        return (
            <RouteMap routes={routes ? routes : Routes} />
        )
    }
}
export default RouterView;