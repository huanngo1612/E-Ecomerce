import Header from "..//Header/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container1">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
