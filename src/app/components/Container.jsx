
const Container = (element) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      {element.children}
    </div>
  );
};

export default Container;
