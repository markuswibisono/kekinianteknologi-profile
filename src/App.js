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
                          page about 
                        </Route>
                        <Route exact path='/contact'>
                          page contact
                        </Route>
                      </Switch>      
                </Router>
                  );
                }
              }
                
              export default App;