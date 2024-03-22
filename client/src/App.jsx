import "./App.css";

// Components
// import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import DateTime from "./components/DateTime";

function App() {
  return (
    <>
      <div className="min-h-screen h-screen w-screen flex justify-center pt-20 bg-[#1E1F21] text-white">
        <div className="container w-5/6 md:w-3/5 max-w-[700px] flex flex-col space-y-12">
          <DateTime />
          {/* <InputTodo /> */}
          <ListTodos />
        </div>
      </div>
    </>
  );
}

export default App;
