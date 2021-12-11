const Snow = () => {
  const n = Array.from(Array(50).keys());
  return (
    <>
      {n.map((flakes) => (
        <div className="snowFlake" key={flakes}></div>
      ))}
    </>
  );
};
export default Snow;