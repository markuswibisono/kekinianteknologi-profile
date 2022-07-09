import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch }
              from 'react-router-dom';

              import './App.css';
              class App extends Component {
                render() {
                    return (
                  <Router basename={"/testing-hosting"}>
                      <Switch>
                        <Route exact path='/about'>
                         
                        </Route>
                      </Switch>      
                </Router>
                  );
                }
              }
                
              export default App;