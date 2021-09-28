import "./App.css";
import KategorijaItem from "./components/KategorijaItem";
import KategorijaStore from "./components/KategorijaStore";
import PodKategorijaStore from "./components/PodKategorijaStore";
import ArtiklStore from "./components/ArtiklStore";
import { Provider } from "mobx-react";
import PodKategorijaItem from "./components/PodKategorijaItem";
import ArtiklItem from "./components/ArtiklItem";
import DashboardStore from "./components/DashboardStore";
import DashboardList from "./components/DashboardList";
import OrderList from "./components/OrderList";

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
{
  /* <Provider
KategorijaStore={KategorijaStore}
PodKategorijaStore={PodKategorijaStore}
ArtiklStore={ArtiklStore}
>
<KategorijaItem />
<PodKategorijaItem />
<ArtiklItem />
</Provider> */
}
