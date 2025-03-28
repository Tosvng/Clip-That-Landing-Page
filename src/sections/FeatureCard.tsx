import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
      <div className="text-4xl text-teal-400">{icon}</div>
      <h3 className="text-xl font-bold text-teal-400">{title}</h3>
      <p className="text-sm text-center text-gray-400">{description}</p>
    </div>
  );
};
