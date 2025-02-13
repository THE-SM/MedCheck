
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface DiseaseCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
  className?: string;
}

export const DiseaseCard = ({
  title,
  description,
  icon,
  path,
  className,
}: DiseaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={cn(
          "p-6 hover:shadow-lg transition-shadow duration-200",
          className
        )}
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-4xl">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={path}>
          <Button className="w-full">Start Prediction</Button>
        </Link>
      </Card>
    </motion.div>
  );
};
