const Snow = () => {
  const n = Array.from(Array(50).keys());
  return (
    <>
      {n?.length > 0 ? n.map((flakes) => (
        <div className="snowFlake" key={flakes}></div>
      )): null}
    </>
  );
};
export default Snow;