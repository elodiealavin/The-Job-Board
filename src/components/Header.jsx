import Title from "./components/Title";

const Header = (props) => {
  return (
    <h1 classeName="title">
      <Title name={props.name} />
    </h1>
  );
};

export default Header;
