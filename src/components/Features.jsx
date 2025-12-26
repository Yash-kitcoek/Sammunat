const Features = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold text-xl mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Optimized solutions ensuring speed and reliability.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold text-xl mb-2">Secure Systems</h3>
          <p className="text-gray-600">
            Industry-standard security practices for data protection.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold text-xl mb-2">Scalable Design</h3>
          <p className="text-gray-600">
            Built to grow as your business grows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
