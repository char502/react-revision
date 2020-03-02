import React from "react";
import styled from "styled-components";
// import Greet from "./components/Greet";
// import ShowChildren from "./components/ShowChildren";
// import Welcome from "./components/Welcome";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// ================ Styling ================
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";
// ================ Forms ================
// import Form from "./components/Form";
// ================ Lifecycle Methods ================
// import LifecycleA from "./components/LifecycleA";
// ================ Fragments ================
// import FragmentDemo from "./components/FragmentDemo";

// import Tables from "./components/Tables";
// ================ Memo?? ================
// import ParentComp from "./components/ParentComp";
// ================ Refs ================
// import RefsDemo from "./components/RefsDemo";
// import FocusInput from "./components/FocusInput";
// import FRParentInput from "./components/FRParentInput";
// ================ Portals (extra DOM nodes) ================
// import PortalDemo from "./components/PortalDemo";
// ================ Error Boundaries ================
// import Hero from "./components/Hero";
// import ErrorBoundary from "./components/ErrorBoundary";
// ================ HOC's ================
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import HoverCounterTwo from "./components/HoverCounterTwo";
// ================ Render props ================
// import User from "./components/User";
// import CounterRenderProps from "./components/CounterRenderProps";
// import ClickCounterTwo from "./components/ClickCounterTwo";
// import HoverCounterTwo from "./components/HoverCounterTwo";
// ================ Practice go at render props ================
// import Tester from "./components/renderPropsTesterGo/Tester";
// import ChildTester from "./components/renderPropsTesterGo/ChildTester";
// ================ Context API ================
// import ComponentC from "./components/ContextAPIExample/ComponentC";
// import { UserProvider } from "./components/ContextAPIExample/UserContext";
// ================ API CALLS ================
// import PostList from "./components/FetchRequestExamples/PostList";
import PostForm from "./components/FetchRequestExamples/PostForm";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <div>
        <PostForm />
      </div>
      {/* <div>
        <PostList />
      </div> */}
      {/* <UserProvider value="Charlotte">
        <div>
          <ComponentC />
        </div>
      </UserProvider> */}

      {/* <div>
        <Tester
          render={(stateCount, increaseCountFunc) => (
            <ChildTester
              stateCount={stateCount}
              increaseCountFunc={increaseCountFunc}
            />
          )}
        />
      </div> */}
      {/* <div>
        <CounterRenderProps
          render={(count, incrementCount) => (
            <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}
            ></ClickCounterTwo>
          )}
        />
        <CounterRenderProps
          render={(count, incrementCount) => (
            <HoverCounterTwo
              count={count}
              incrementCount={incrementCount}
            ></HoverCounterTwo>
          )}
        />
      </div> */}
      {/* <div>
        <ClickCounterTwo />
      </div>
      <div>
        <HoverCounterTwo />
      </div>
      <div>
        <User render={(isLoggedIn) => (isLoggedIn ? "Charlotte" : "Guest")} />
        Render props pattern
        In React it is possible to use a prop who's value is a function to control what is actually rendered by a component 
        //==================================================================
        Other definition: The term 'render prop' refers to a technique for SHARING CODE  between React components using a prop whose value is a function
      </div> */}
      {/* <div>
        <ClickCounter name={"Charlotte"} />
      </div>
      <div>
        <HoverCounter />
      </div> */}
      {/* <ErrorBoundary>
        <div>
          <Hero heroName={"Batman"} />
        </div>
      </ErrorBoundary>
      Don't have to put error boundary around all components
      <ErrorBoundary>
        <div>
          <Hero heroName={"Joker"} />
          // Application with crash on this component as it is set that way
        </div>
        Will always see error during development but can click to close to see the alternative 'comething went wrong' component
      </ErrorBoundary> */}

      {/* <div>
        <PortalDemo />
      </div> */}
      {/* <div>
        <FRParentInput />
      </div> */}
      {/* <div>
        <FocusInput />
      </div> */}
      {/* <div>
        <RefsDemo />
      </div> */}
      {/* <div>
        <ParentComp />
      </div> */}
      {/* <div>
        <Tables />
      </div> */}
      {/* <div>
        <FragmentDemo />
      </div> */}
      {/* <div>
        <LifecycleA />
      </div> */}
      {/* <div>
        <Form />
      </div> */}
      {/* <div>
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
      <div>
        <Inline />
      </div> */}
      {/* <div>
        <Stylesheet primary={true} />
      </div> */}
      {/* <div>
        <NameList />
      </div> */}
      {/* <div>
        <UserGreeting />
      </div> */}
      {/* ======= Child Component communicating with parent ======== */}
      {/* ==== passing reference to a method in props to a child component ===== */}
      {/* <div>
        <ParentComponent />
      </div> */}
      {/* ======= Binding Events ========== */}
      {/* <div>
        <EventBind />
      </div> */}
      {/* ======= Click handler in a class component ========== */}
      {/* <div>
        <ClassClick />
      </div> */}
      {/* ======= Click handler in a stateless func component ========== */}
      {/* <div>
        <FunctionClick />
      </div> */}
      {/* ======= counter example ============ */}
      {/* <div>
        <Counter />
      </div> */}
      {/* ======= props example ============ */}
      {/* <div>
        <Welcome name={"Bruce Wayne"} heroName={"Batman"} />
      </div>
      <div>
        <Welcome name={"Diana Prince"} heroName={"Wonder Woman"} />
      </div> */}
      {/* ======= props.children example ============ */}
      {/* <div>
        <ShowChildren>This is a child component</ShowChildren>
      </div>
      <div>
        <ShowChildren>
          <button>This is a child component Button</button>
        </ShowChildren>
      </div> */}
      {/* ======= using State example ============ */}
      {/* <div>
        <Greet />
      </div> */}
    </AppContainer>
  );
}

export default App;
