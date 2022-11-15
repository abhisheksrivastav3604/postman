import React, {Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import Navbar from "./navbar";
import Home from "./home";

class main extends Component{
    state={
    };
    render(){
        return (

            <div className="">
                <Navbar/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </div>
        );

    }
}
export default main;