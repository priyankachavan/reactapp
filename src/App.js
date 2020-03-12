import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';

class App extends React.Component{
  
  
  render()
  {
  return (
    <div className="App">
      <User render={(isLoggedIn) => isLoggedIn ? "piya"  : "guest"}/>
      <Counter 
        render={(count, incrementCount) => (<ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>)
       }/>
       <Counter 
        render={(count, incrementCount) => (<HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>)
       }/>
       {/* <ClickCounter2></ClickCounter2>

      <HoverCounter2></HoverCounter2>  */}
      {/* <HoverCounter></HoverCounter>
      <ClickCounter name="piya"></ClickCounter> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="SuperMan"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <Counter/> */}
     {/* <Greet name="piya" heroName="Batman"> 
     <p>this is children props</p>
     </Greet>
     <Greet name="cia" heroName="Batman">
        <button>click</button>
      </Greet>
     <Greet name="mia" heroName="Batman"/>
     <Welcome name="piya" heroName="Batman"/>
     <Welcome name="cia" heroName="Batman"/>
     <Welcome name="cia" heroName="Batman"/> */}

      {/*  <Hello/> */}
    </div>
    );
  }
}

export default App;
