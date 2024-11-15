const Stats = () => {
  const stats = [
    {
      number: "1000+",
      label: "Personas empleadas",
    },
    {
      number: "500+",
      label: "Empresas aliadas",
    },
    {
      number: "95%",
      label: "Tasa de retención",
    },
    {
      number: "80%",
      label: "Mejora salarial",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-[#9333EA] text-5xl font-extrabold">{stat.number}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;