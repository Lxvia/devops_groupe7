import PrimaryBtn from './PrimaryBtn';


const Header = () => {
    return (
      <div className="header">
        <h1>Découvrez où se situe votre entreprise dans sa transformation numérique.</h1>
        <p>Recevez un rapport complet avec des recommandations personnalisées pour améliorer votre stratégie digitale.</p>
        <PrimaryBtn path="https://docs.google.com/forms/d/e/1FAIpQLScnu2gYDKOaJ6x7wnD5C3yW0gc7DTszGr5UYJVo3rW2o6yoYA/viewform">
          Commencez votre diagnostic maintenant !
        </PrimaryBtn>  
      </div>
    );
  };
  
  export default Header;