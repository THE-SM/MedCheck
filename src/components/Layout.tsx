import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { LucideHome, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { toast } from "sonner";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/", icon: <LucideHome className="w-5 h-5" /> },
    { name: "Heart Disease", path: "/heart-disease", icon: "💗" },
    { name: "Diabetes", path: "/diabetes", icon: "🩺" },
    { name: "Breast Cancer", path: "/breast-cancer", icon: "🎗️" },
    { name: "Lung Cancer", path: "/lung-cancer", icon: "🫁" },
    { name: "Neurological Risk", path: "/neurological-risk", icon: "🧠" },
    { name: "Immune System", path: "/immune-system", icon: "🛡️" },
    { name: "Comprehensive Health", path: "/comprehensive-health", icon: "📊" },
  ];

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center px-6 border-b">
              <Link to="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl text-primary">MedCheck</span>
              </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm rounded-lg hover:bg-gray-100 transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-white hover:bg-primary-600"
                      : "text-gray-700"
                  )}
                >
                  <span className="w-5 h-5 mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t">
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  toast.promise(
                    () => new Promise((resolve) => setTimeout(resolve, 1000)),
                    {
                      loading: 'Loading...',
                      success: 'Coming soon!',
                      error: 'This feature will be available soon.'
                    }
                  )
                }
              >
                Sign Out
              </Button>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Toggle */}
        <button
          className="fixed z-50 p-2 bg-white rounded-lg shadow-lg md:hidden left-4 top-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <main
          className={cn(
            "transition-all duration-200 ease-in-out",
            "md:ml-64 p-8"
          )}
        >
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </ErrorBoundary>
  );
};
