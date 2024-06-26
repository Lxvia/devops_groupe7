const Diagnostic = () => {
  return (
    <div className="diagnostic">
      <main>
      <h1>Résultats et Recommandations</h1>
      {data.map((item, index) => (
        <Axis key={index} axis={item.axis} questions={item.questions} />
      ))}
    </main>
    </div>
  );
};

export default Diagnostic;
