import React from "react";
import { Button, Alert } from "react-bootstrap";

export class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: "1"
        }
    }


    nextPath(path) {
        this.props.history.push(path);
    }


    render() {
        let response = null
        let result = null
        return (
            <div className = "inputForm">
                <h1>Hello</h1>
                <input type="text" className="form-control" id="lname" name="lname" placeholder="Name"></input>
                <div>
                    <Button className = "button" variant="primary" onClick={
                        async () => {
                            await this.props.callbackFromParent(document.getElementById("lname").value)
                            response = await fetch("http://localhost:5000/return_by_name/" + document.getElementById("lname").value + "/")
                            result = await response.json()
                            if (result.result != null) this.nextPath('/goods')
                            else
                            {
                                alert("user doesn't exist! 228322")
                            }
                        }
                    }>Log In</Button>{' '}
                    <Button className = "button" variant="primary" onClick={
                        () => {
                            this.nextPath('/registration')
                        }
                    }>Sign Up</Button>{' '}
                </div>
            </div>
        )
    }
}

function FailedLogIn() {
    return (
        <Alert key={1} variant={'primary'}>
            This is a alert—check it out!
        </Alert>
    )
}