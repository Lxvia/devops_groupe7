import Axis from './Axis';
import { data } from '../Data'; 

const Diagnostic = () => {
  console.log(data); // Vérification des données dans la console

  return (
    <div className="diagnostic">
      <h1>Résultats du diagnostic :</h1>
      <div className="axis-list">
        {data.map((item, index) => (
          <Axis key={index} axis={item.axis} questions={item.questions} />
        ))}
      </div>
    </div>
  );
};

export default Diagnostic;
