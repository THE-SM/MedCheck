
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ComprehensiveHealth = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Comprehensive Health Screening",
        description: "Your holistic health assessment indicates overall good health with some areas for potential improvement.",
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6">Comprehensive Health Screening</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bodyMassIndex">Body Mass Index (BMI)</Label>
              <Input id="bodyMassIndex" type="number" step="0.1" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bloodPressure">Blood Pressure (Systolic/Diastolic)</Label>
              <Input id="bloodPressure" type="text" placeholder="e.g., 120/80" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cholesterolLevel">Cholesterol Level</Label>
              <Input id="cholesterolLevel" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exerciseFrequency">Exercise Frequency</Label>
              <select
                id="exerciseFrequency"
                aria-label="Exercise Frequency"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="sedentary">Sedentary</option>
                <option value="occasional">Occasional</option>
                <option value="regular">Regular</option>
                <option value="intense">Intense</option>
              </select>
            </div>
            <div className="space-y-2">
              <select
                id="nutritionQuality"
                aria-label="Nutrition Quality"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="poor">Poor</option>
                <option value="average">Average</option>
                <option value="excellent">Excellent</option>
              </select>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Generate Health Report"}
          </Button>
        </form>
      </motion.div>
    </Layout>
  );
};

export default ComprehensiveHealth;
