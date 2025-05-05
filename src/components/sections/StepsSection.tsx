

// Define types for our data-driven approach
interface StepItem {
  number: number;
  title: React.ReactNode;
  description: string;
}

interface InfoItem {
  icon: React.ReactNode;
  description: string;
}

function StepsSection() {
  // Steps data
  const steps: StepItem[] = [
    {
      number: 1,
      title: <>Sign up on <span className="text-green-600">Bev</span></>,
      description: "After the application here and get access to your personal account"
    },
    {
      number: 2,
      title: <><span className="text-teal-500">Describe the projects or a civil work</span> you propose</>,
      description: "Approve. Only authorized that you are ready to accept"
    },
    {
      number: 3,
      title: <>Get a <span className="text-teal-500">selection of candidates</span> based on your criteria</>,
      description: "Put additional information"
    }
  ];

  // Info items data
  const infoItems: InfoItem[] = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#FF725E" strokeWidth="1.5"/>
          <path d="M12 8V16M8 12H16" stroke="#FF725E" strokeWidth="1.5"/>
        </svg>
      ),
      description: "Every volunteer on our platform undergoes a thorough screening process—including background checks and skill verification—to ensure the highest quality of service."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#FF725E" strokeWidth="1.5"/>
          <path d="M8 12H16" stroke="#FF725E" strokeWidth="1.5"/>
        </svg>
      ),
      description: "Our smart algorithm matches you with volunteers based on your specific needs, location, and exact task. For more complex scenarios, our team provides additional assistance."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#FF725E" strokeWidth="1.5"/>
          <path d="M12 8V16" stroke="#FF725E" strokeWidth="1.5"/>
        </svg>
      ),
      description: "Define your ideal volunteer for a weekend project or a long-term initiative. Our weekly events, job platform access, and perfect matches help you recruit efficiently."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF725E" strokeWidth="1.5"/>
          <path d="M12 16V16.5" stroke="#FF725E" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 7V13" stroke="#FF725E" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      description: "From food banks to festivals, we've helped hundreds and businesses build thriving volunteer programs."
    }
  ];

  return (
    <section className="w-full py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20">
        <div className="flex justify-center mb-12">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-800 font-bold">i</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {infoItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto mt-20 bg-gray-900 rounded-3xl py-10 px-8 text-center relative">
        <h3 className="text-white text-xl mb-4">Tell us which volunteers you are looking for!</h3>
        <input
          type="text"
          className="w-full bg-white rounded-full py-3 px-6 mb-6"
          placeholder="Enter your email"
        />
        <button className="bg-orange-500 text-white font-medium py-3 px-8 rounded-full">
          Sign Up
        </button>
        
        <div className="absolute bottom-0 right-0 translate-y-1/4">
          <img 
            src="/lovable-uploads/2ed39dd7-1ded-4cea-bd39-30b91d5af66f.png" 
            alt="Person at computer" 
            className="w-40 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default StepsSection;