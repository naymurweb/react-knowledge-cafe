import profile from "../../assets/boy2.png";
const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-5 md:py-10">
      <div>
        <h2 className="md:text-4xl text-2xl font-bold">Knowledge Cafe</h2>
      </div>
      <div>
        <img src={profile} alt="" width="60px" />
      </div>
    </div>
  );
};

export default Header;
