
import { Layout } from "@/components/Layout";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const HeartDisease = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Prediction Complete",
        description: "Based on the provided data, there is a moderate risk of heart disease. Please consult with a healthcare professional.",
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
        <h1 className="text-3xl font-bold mb-6">Heart Disease Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sex">Sex</Label>
              <select
                id="sex"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bp">Blood Pressure (mm Hg)</Label>
              <Input id="bp" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cholesterol">Cholesterol (mg/dl)</Label>
              <Input id="cholesterol" type="number" required />
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

export default HeartDisease;
