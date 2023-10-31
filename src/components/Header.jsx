import Title from "./Title";

const Header = (props) => {
  return (
    <h1 className="header">
      <Title name={props.name} />
    </h1>
  );
};

export default Header;
