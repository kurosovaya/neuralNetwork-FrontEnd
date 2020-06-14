import React from "react";
import { Card, Button } from "react-bootstrap"

export class GoodsCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: null,
            loaded: false
        }
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    getResponse() {
        if (this.props.id != null)
        {
            fetch("http://localhost:5000/return_by_name/" + this.props.id + "/").then((response) =>
                response.json().then((data) => this.setState({ goods: data.result })))
        }
        this.state.loaded = true
    }

    getGoods() {
        if (this.state.goods != null)
        {
            console.log(this.state.goods)
            return (
                this.state.goods.map(item =>
                    <Card style={{ width: "200px", margin: "5px", height: "465px" }} key={item[0]}>
                        <Card.Img variant="top" src="logo192.png" />
                        <Card.Body>
                            <Card.Title>{item[1]}</Card.Title>
                            <Card.Text>
                                {Math.round(item[0] * 100) / 100}
                            </Card.Text>
                            <Card.Text>
                                {item[2] ? (<>according with your interests!</>) : (<>just a stuff</>)}
                            </Card.Text>
                            <Button size="sm" block onClick = {
                                async () => {
                                    await fetch(`http://localhost:5000/increase_weight/${this.props.id}/${item[3]}`)
                                    this.getResponse()
                                }
                            }>Increase weight</Button>
                            <Button variant="danger" size="sm" block onClick = {
                                async () => {
                                    await fetch(`http://localhost:5000/decrease_weight/${this.props.id}/${item[3]}`)
                                    this.getResponse()
                                }
                            }>Decrease weight</Button>
                        </Card.Body>
                    </Card>
                )
            )
        }
    }

    render() {
        if (!this.state.loaded)
        {
            this.getResponse()
        }
        return (
            <div>
                <div class="GoodsCards" >
                    {this.getGoods()}
                </div>
                <Button onClick={
                    () => {
                        this.nextPath('/')
                    }
                }>Log Out</Button>
            </div>
        );
    }
}