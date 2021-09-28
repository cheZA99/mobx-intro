import "./App.css";
import { Provider } from "mobx-react";
import DashboardStore from "./components/DashboardStore";
import DashboardList from "./components/DashboardList";

function App() {
  return (
    <Provider DashboardStore={DashboardStore}>
      <div className="dash">
        <div className="ctg">
          <DashboardList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
