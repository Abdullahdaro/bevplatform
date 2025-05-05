

interface FeatureCardProps {
  icon: string;
  description: string;
}

function FeatureCard ({ icon, description }: FeatureCardProps) {
  return (
    <div className="flex grow flex-col items-stretch text-base text-black font-light text-center leading-5 max-md:mt-10">
      <img src={icon} className="aspect-[0.91] object-contain w-[29px] self-center" alt="" />
      <div className="mt-[18px]">{description}</div>
    </div>
  );
};

export default FeatureCard