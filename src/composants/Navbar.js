const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo"><img src={process.env.PUBLIC_URL + '/assets/logoCesi.png'} alt="logo cesi"/></div>
      <h3>Groupe 7: Digitalisation Numérique</h3>
    </div>
  );
};

export default Navbar;
