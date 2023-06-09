import {BrowserRouter,Route} from "react-router-dom"
import { Header } from "./component/Header";
import { HomeScreen } from "./screen/HomeScreen";
import { UserLoginScreen } from "./screen/UserLoginScreen";
import { UserRegisterScreen } from "./screen/UserRegisterScreen";
import { MemoScreen } from "./screen/MemoScreen";
import { TodoScreen } from "./screen/TodoScreen";
import { EditMemoScreen } from "./screen/EditMemoScreen";
import { EditTodoScreen } from "./screen/EditTodoScreen";
import { UserProfileScreen } from "./screen/UserProfileScreen";

function App() {
  return (

    <BrowserRouter>
      <Route render={({history})=> <Header history={history}/>} />
      <main className="bg-gradient-to-tr from-teal-100 to-lime-300 min-h-screen min-w-screen">
        <Route path="/login" component={UserLoginScreen}/>
        <Route path="/register" component={UserRegisterScreen}/>
        <Route path="/user/profile" component={UserProfileScreen}/>
        <Route path="/memo/:id" component={EditMemoScreen} exact/>
        <Route path="/todo/:id" component={EditTodoScreen} exact/>
        <Route path="/memo" component={MemoScreen} exact/>
        <Route path="/todo" component={TodoScreen} exact/>
        <Route path="/" component={HomeScreen} exact/>
      </main>
    </BrowserRouter>
  );
}

export default App;
