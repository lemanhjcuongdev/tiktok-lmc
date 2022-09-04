import Header from "~/layouts/sharedComponents/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
