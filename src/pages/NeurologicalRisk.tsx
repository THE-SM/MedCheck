
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NeurologicalRisk = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Neurological Risk Assessment",
        description: "Based on the provided data, the risk of neurological disorders appears to be low. Regular check-ups are recommended.",
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
        <h1 className="text-3xl font-bold mb-6">Neurological Disorder Risk Assessment</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="familyHistory">Family History of Neurological Disorders</Label>
              <select
                id="familyHistory"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="none">None</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cognitiveFunctions">Cognitive Function Score</Label>
              <Input id="cognitiveFunctions" type="number" max="100" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="physicalSymptoms">Physical Symptoms Intensity</Label>
              <select
                id="physicalSymptoms"
                className="w-full h-10 px-3 rounded-md border border-input"
                required
              >
                <option value="">Select</option>
                <option value="none">None</option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Get Risk Assessment"}
          </Button>
        </form>
      </motion.div>
    </Layout>
  );
};

export default NeurologicalRisk;
