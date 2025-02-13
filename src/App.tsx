
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HeartDisease from "./pages/HeartDisease";
import Diabetes from "./pages/Diabetes";
import BreastCancer from "./pages/BreastCancer";
import LungCancer from "./pages/LungCancer";
import NeurologicalRisk from "./pages/NeurologicalRisk";
import ImmuneSystem from "./pages/ImmuneSystem";
import ComprehensiveHealth from "./pages/ComprehensiveHealth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/heart-disease" element={<HeartDisease />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/breast-cancer" element={<BreastCancer />} />
          <Route path="/lung-cancer" element={<LungCancer />} />
          <Route path="/neurological-risk" element={<NeurologicalRisk />} />
          <Route path="/immune-system" element={<ImmuneSystem />} />
          <Route path="/comprehensive-health" element={<ComprehensiveHealth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
