
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ImmuneSystem = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Immune System Profile",
        description: "Your immune system profile shows good overall health. Maintaining a balanced lifestyle is recommended.",
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
        <h1 className="text-3xl font-bold mb-6">Comprehensive Immune System Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stressLevel">Stress Level</Label>
              <select
                id="stressLevel"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleepQuality">Sleep Quality</Label>
              <select
                id="sleepQuality"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="poor">Poor</option>
                <option value="average">Average</option>
                <option value="excellent">Excellent</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dietQuality">Diet Quality</Label>
              <select
                id="dietQuality"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="poor">Poor</option>
                <option value="balanced">Balanced</option>
                <option value="optimal">Optimal</option>
              </select>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Generate Immune Profile"}
          </Button>
        </form>
      </motion.div>
    </Layout>
  );
};

export default ImmuneSystem;
