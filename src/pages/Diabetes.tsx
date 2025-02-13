
import { Layout } from "@/components/Layout";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Diabetes = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Prediction Complete",
        description: "Based on the provided data, the risk of diabetes is low. Maintain a healthy lifestyle.",
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
        <h1 className="text-3xl font-bold mb-6">Diabetes Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="glucose">Glucose Level</Label>
              <Input id="glucose" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bp">Blood Pressure</Label>
              <Input id="bp" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bmi">BMI</Label>
              <Input id="bmi" type="number" step="0.1" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" required />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Processing..." : "Get Prediction"}
          </Button>
        </form>
      </motion.div>
    </Layout>
  );
};

export default Diabetes;
