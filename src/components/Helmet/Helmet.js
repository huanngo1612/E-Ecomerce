function Helmet(props) {
  document.title = "Auction - " + props.title;
  return <div className="w-100">{props.children}</div>;
}

export default Helmet;
