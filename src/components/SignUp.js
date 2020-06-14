import React from 'react';
import { Button } from 'react-bootstrap';

export class SignUp extends React.Component {    
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        // let checkboxForm = []
        // let checkboxGroup = []

        // for (let i = 0; i < 3; i++)
        // {
        //     for (let j = 0; j < 3; j++)
        //     {
        //         checkboxGroup.push(
        //             <div className="custom-control custom-checkbox mr-sm-2">
        //                 <input type="checkbox" className="custom-control-input" id="customControlAutosizing"></input>
        //                 <label className="custom-control-label" for="customControlAutosizing">Remember my preference</label>
        //             </div>
        //         )
        //     }
        //     checkboxForm.push(

        //     )
        // }
        const today = new Date();
        let bornDateOptions = []
        for (let j = today.getFullYear(); j >= today.getFullYear() - 120; j--)
        {
            bornDateOptions.push(
                <option value={String(j)}>{j}</option>
            )
        }

        return (
            <div>
                <form className="inputForm">
                    <label>Plese, enter your data for registration</label>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Name" id="name"></input>
                            <label>Choose</label>
                            <select id="selectorGender" className="form-control">
                                <option selected value="null">Gender</option>
                                <option value="0">Male</option>
                                <option value="1">Weman</option>
                            </select>
                            <select id="selectorAge" className="form-control">
                                <option selected value="null">Date of birth</option>
                                {bornDateOptions}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox0"></input>
                                <label className="custom-control-label" htmlFor="checkBox0">Anime figurs</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox1"></input>
                                <label className="custom-control-label" htmlFor="checkBox1">Phone</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox2"></input>
                                <label className="custom-control-label" htmlFor="checkBox2">Video card</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox3"></input>
                                <label className="custom-control-label" htmlFor="checkBox3">Paint bottle</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox4"></input>
                                <label className="custom-control-label" htmlFor="checkBox4">Programming courses for 3k rubels</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox5"></input>
                                <label className="custom-control-label" htmlFor="checkBox5">Firebird 1979</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox6"></input>
                                <label className="custom-control-label" htmlFor="checkBox6">Tickets abroad</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox7"></input>
                                <label className="custom-control-label" htmlFor="checkBox7">Books</label>
                            </div>
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="checkBox8"></input>
                                <label className="custom-control-label" htmlFor="checkBox8">Martines</label>
                            </div>
                        </div>
                    </div>
                    <Button variant="primary" onClick={
                        async () => {
                            let name = document.getElementById("name").value
                            let userData = []
                            userData.push((today.getFullYear() - document.getElementById("selectorAge").value) / 100)
                            userData.push(document.getElementById("selectorGender").value)
                            for (let i = 0; i < 9; i++)
                            {
                                userData.push(Number(document.getElementById("checkBox" + i).checked))
                            }                            
                            let query = `http://localhost:5000/create_user/${name}/${userData.join("+")}/`
                            let response = await fetch(query)
                            let result = await response.json()
                            console.log(result)
                            await this.props.callbackFromParent(name)
                            this.nextPath('/goods')
                        }
                    }>Apply</Button>{' '}
                </form>
            </div >
        )
    }
} 