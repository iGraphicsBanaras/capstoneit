import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import Blogs from "./pages/Blogs.tsx";
import FAQ from "./pages/FAQ.tsx";
import WebsiteDesign from "./pages/services/WebsiteDesign.tsx";
import GraphicDesign from "./pages/services/GraphicDesign.tsx";
import OracleDBA from "./pages/services/OracleDBA.tsx";
import MongoDBDevelopment from "./pages/services/MongoDBDevelopment.tsx";
import CRMSoftware from "./pages/services/CRMSoftware.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/oracle-dba" element={<OracleDBA />} />
          <Route path="/services/mongodb-development" element={<MongoDBDevelopment />} />
          <Route path="/services/crm-software" element={<CRMSoftware />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
