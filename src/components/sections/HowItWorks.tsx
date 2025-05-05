


function HowItWorks () {
  return (
    <section className="w-full bg-gray-900 rounded-3xl py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How it works?</h2>
          <p className="text-lg mb-8">
            This is a feature that will help you find reliable volunteers.<br />
            Fill out the application and we will offer you options.
          </p>
        </div>
        <div>
          <img 
            src="/lovable-uploads/2ed39dd7-1ded-4cea-bd39-30b91d5af66f.png" 
            alt="Two people working together" 
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks