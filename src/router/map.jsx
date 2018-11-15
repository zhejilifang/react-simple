import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouteMap extends React.Component {
    render() {
        const { routes } = this.props;
		const defaultRoute = <Route key={-1} exact path="/" component={() => {
            return <Redirect to="/vedio" />
        }}></Route>
        return (
            <Switch>
                {
                    routes.length && routes.map((item, ind) => {
                        const children = item.children === undefined ? [] : item.children;
                        return (
                            <Route key={ind} path={item.path} component={(routerConfig) => {
                                return <item.component routes={children} {...routerConfig}></item.component>
                            }} ></Route>
                        )
                    }).concat([defaultRoute])
                }
            </Switch>
        )
    }
}
export default RouteMap;