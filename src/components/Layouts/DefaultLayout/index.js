import Sidebar from "./Sidebar";
import Header from "~/components/Layouts/sharedComponents/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <div className="container">
        <Header />
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
