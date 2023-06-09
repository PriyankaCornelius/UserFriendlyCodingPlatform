import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import NavBar from './NavBar';
import Logout from './logout';
import CodeScreen from './codescreen';
import ButtonBases from './buttonBase';
import DemoCompiler from './demoCompiler';
import Problems from './problems';
import Feedback from './feedback';
//Create a Main Component
class Main extends Component {
        state = {
                cart:[1,2,3]
        }
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Router>
                    <Route path="/">
                        <NavBar></NavBar>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/logout">
                        <Logout></Logout>
                    </Route>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                    <Route path="/codescreen">
                        <CodeScreen></CodeScreen>
                    </Route>
                    <Route path="/democompiler">
                        <DemoCompiler></DemoCompiler>
                    </Route>
                    <Route path="/problems">
                        <Problems></Problems>
                    </Route>
                    <Route path="/feedback">
                        <Feedback></Feedback>
                    </Route>
                </Router>

            </div>
        )
    }
}
//Export The Main Component
export default Main;
