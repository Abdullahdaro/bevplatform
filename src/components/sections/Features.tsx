import  FeatureCard  from '@ui/FeatureCard';

const featuresItem = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/63bc6ffb4f85400cab7b8cf07ee4f66e/cfef395e181845cd1bcd3ded750e7427a90bcf85?placeholderIfAbsent=true",
        desc: "Simple selection. All information about the candidates in one place",
    },
    {
          icon:"https://cdn.builder.io/api/v1/image/assets/63bc6ffb4f85400cab7b8cf07ee4f66e/7998d4cdd4919f1891ba952c72a1239211e2094e?placeholderIfAbsent=true",
          desc:"Safely We offer only verified profiles"
    },
    {
        icon:"https://cdn.builder.io/api/v1/image/assets/63bc6ffb4f85400cab7b8cf07ee4f66e/17fdb54b06738bc1d412215a73131e2bbb66f3db?placeholderIfAbsent=true",
        desc:"No need to wait for responses You can immediately select candidates from a selection"
  }
]

 function Features()  {
  return (
    <section className="w-[796px] max-w-full ml-[74px] mt-[97px] max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            { featuresItem?.length > 0 ?  featuresItem.map((item, index) => 
            <div className="w-[36%] max-md:w-full max-md:ml-0">
            <FeatureCard key={index} icon={item.icon} description={item.desc} />
            </div>) : null }

      </div>
    </section>
  );
};

export default Features