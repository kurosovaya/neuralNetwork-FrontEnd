import React, { } from 'react';
import './App.css';
import { GoodsCards } from "./components/Goods";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: null
    }
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/1/").then((response) =>
  //     response.json().then((data) => { setMovies(data.result) }))
  // }, [])

  myCallback = (dataFromChild) => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState({ user_id: dataFromChild })
        console.log(dataFromChild)
        resolve();
      }, 0);
    });
  }

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <div>
            <Route exact path="/"
              render={(props) => <LogIn {...props} callbackFromParent={this.myCallback} />}
            />
            <Route path="/goods"
              render={(props) => <GoodsCards {...props} id={this.state.user_id} />}
            />
            <Route path="/registration"
              render={(props) => <SignUp {...props} callbackFromParent={this.myCallback} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// class App extends React.Component {
//   render(){
//       return (
//           <div>
//               <BrowserRouter>
//                   <div>
//                   <Route path="/"  component={LogIn} exact />
//                   <Route path="/surveys" component={Movies}/>      
//                   <Link to="/surveys">go to my surveys</Link>            
//                   </div>
//               </BrowserRouter>

//           </div>
//       )
//   }
// }

export default App;
