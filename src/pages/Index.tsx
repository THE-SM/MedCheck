import { Layout } from "../components/Layout";
// import { TestMutation } from "../components/TestMutation";
import useIsFetching from "../hooks/useIsFetching";
import { DiseaseCard } from "../components/DiseaseCard";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Droplet, 
  Microscope, 
  Stethoscope as LungsIcon, // Using Stethoscope as alternative for Lungs
  Brain, 
  Shield, 
  Activity 
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { isFetching, startFetching, stopFetching } = useIsFetching();
  const diseases = [
    {
      title: "Heart Disease Prediction",
      description: "Advanced cardiac risk assessment using comprehensive medical parameters",
      icon: <HeartPulse className="w-12 h-12 text-red-500" />,
      path: "/heart-disease",
      difficulty: "High Complexity Analysis",
      accuracy: "92% Accuracy"
    },
    {
      title: "Diabetes Screening",
      description: "Comprehensive metabolic health evaluation and diabetes risk detection",
      icon: <Droplet className="w-12 h-12 text-blue-500" />,
      path: "/diabetes",
      difficulty: "Medium Complexity",
      accuracy: "88% Accuracy"
    },
    {
      title: "Breast Cancer Detection",
      description: "AI-powered image analysis for early-stage breast cancer identification",
      icon: <Microscope className="w-12 h-12 text-purple-500" />,
      path: "/breast-cancer",
      difficulty: "Advanced Image Analysis",
      accuracy: "95% Accuracy"
    },
    {
      title: "Lung Cancer Screening",
      description: "Deep learning X-ray and CT scan interpretation for lung abnormalities",
      icon: <LungsIcon className="w-12 h-12 text-green-500" />,
      path: "/lung-cancer",
      difficulty: "Complex Image Processing",
      accuracy: "90% Accuracy"
    },
    {
      title: "Neurological Disorder Risk",
      description: "Advanced neural network analysis for early neurological condition detection",
      icon: <Brain className="w-12 h-12 text-teal-500" />,
      path: "/neurological-risk",
      difficulty: "High-Dimensional Analysis",
      accuracy: "85% Accuracy"
    },
    {
      title: "Immune System Profile",
      description: "Comprehensive immunological risk assessment and health monitoring",
      icon: <Shield className="w-12 h-12 text-indigo-500" />,
      path: "/immune-system",
      difficulty: "Multi-Factor Analysis",
      accuracy: "87% Accuracy"
    },
    {
      title: "Comprehensive Health Screening",
      description: "Holistic multi-disease prediction using integrated machine learning models",
      icon: <Activity className="w-12 h-12 text-emerald-500" />,
      path: "/comprehensive-health",
      difficulty: "Ultra-Complex Analysis",
      accuracy: "93% Accuracy"
    }
  ];

  const handleSomeAction = () => {
      startFetching();
  }; // Ensure proper closure of the component

  return (
    <Layout>
      {/* <TestMutation /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-primary mb-4"
          >
            MedCheckAI: AI-Powered Health Insights
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Leveraging cutting-edge machine learning to provide predictive health assessments across multiple complex medical domains
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {diseases.map((disease, index) => (
            <motion.div
              key={disease.path}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {disease.icon}
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    {disease.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{disease.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {disease.difficulty}
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {disease.accuracy}
                  </span>
                </div>
                <div className="mt-4">
                  <Link to={disease.path}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Start Prediction
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div> // Closing motion.div for disease card
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-100 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Why Choose MedCheck?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Advanced AI</h3>
                <p className="text-gray-600">
                  Cutting-edge machine learning models with high accuracy
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  End-to-end encryption and strict data protection
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Comprehensive Analysis</h3>
                <p className="text-gray-600">
                  Multi-dimensional health risk assessment
                </p>
              </div>
            </div>
          </div>
        </motion.div> {/* Closing motion.div for 'Why Choose MedCheck?' */}
      </motion.div> {/* Closing motion.div for main container */}
    </Layout>
  ); // Ensure proper closure of the Index component
}; // Ensure proper closure of the Index component

export default Index;
