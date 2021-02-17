import MenuCard from "./MenuCard";

const MainPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        padding: "0 10vh",
        boxSizing: "border-box",
        flexWrap:"wrap"
      }}
    >
      <MenuCard linksTo="/smallCards" text="8 Pairs" backgroundColor="pink"/>
      <MenuCard linksTo="/midCards" text="12 Pairs" backgroundColor="aqua"/>
      <MenuCard linksTo="/fullCards" text="15 Pairs" backgroundColor="orange"/>
    </div>
  );
};

export default MainPage;
