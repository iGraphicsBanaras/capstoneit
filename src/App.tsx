import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
// Service Pages
import WebsiteDesign from "./pages/services/WebsiteDesign.tsx";
import GraphicDesign from "./pages/services/GraphicDesign.tsx";
import OracleDBA from "./pages/services/OracleDBA.tsx";
import MongoDBDevelopment from "./pages/services/MongoDBDevelopment.tsx";
import CRMSoftware from "./pages/services/CRMSoftware.tsx";
import AndroidApp from "./pages/services/AndroidApp.tsx";
import IOSApp from "./pages/services/IOSApp.tsx";
import FlutterApp from "./pages/services/FlutterApp.tsx";
import HybridApp from "./pages/services/HybridApp.tsx";
import WearableApp from "./pages/services/WearableApp.tsx";
import PHPMySQL from "./pages/services/PHPMySQL.tsx";
import Laravel from "./pages/services/Laravel.tsx";
import ReactDev from "./pages/services/ReactDev.tsx";
import Angular from "./pages/services/Angular.tsx";
import WordPress from "./pages/services/WordPress.tsx";
import DigitalMarketing from "./pages/services/DigitalMarketing.tsx";
// Technology Pages
import AndroidTech from "./pages/technologies/Android.tsx";
import IOSTech from "./pages/technologies/IOS.tsx";
import ReactNativeTech from "./pages/technologies/ReactNative.tsx";
import FlutterTech from "./pages/technologies/Flutter.tsx";
import WordPressTech from "./pages/technologies/WordPress.tsx";
import ShopifyTech from "./pages/technologies/Shopify.tsx";
import MagentoTech from "./pages/technologies/Magento.tsx";
import JavaTech from "./pages/technologies/Java.tsx";
import PHPTech from "./pages/technologies/PHP.tsx";
import NodeJSTech from "./pages/technologies/NodeJS.tsx";
import OracleTech from "./pages/technologies/Oracle.tsx";
import DotNetTech from "./pages/technologies/DotNet.tsx";

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
          {/* Service Routes */}
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/oracle-dba" element={<OracleDBA />} />
          <Route path="/services/mongodb-development" element={<MongoDBDevelopment />} />
          <Route path="/services/crm-software" element={<CRMSoftware />} />
          <Route path="/services/android-app" element={<AndroidApp />} />
          <Route path="/services/ios-app" element={<IOSApp />} />
          <Route path="/services/flutter-app" element={<FlutterApp />} />
          <Route path="/services/hybrid-app" element={<HybridApp />} />
          <Route path="/services/wearable-app" element={<WearableApp />} />
          <Route path="/services/php-mysql" element={<PHPMySQL />} />
          <Route path="/services/laravel" element={<Laravel />} />
          <Route path="/services/react" element={<ReactDev />} />
          <Route path="/services/angular" element={<Angular />} />
          <Route path="/services/wordpress" element={<WordPress />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          {/* Technology Routes */}
          <Route path="/technologies/android" element={<AndroidTech />} />
          <Route path="/technologies/ios" element={<IOSTech />} />
          <Route path="/technologies/react-native" element={<ReactNativeTech />} />
          <Route path="/technologies/flutter" element={<FlutterTech />} />
          <Route path="/technologies/wordpress" element={<WordPressTech />} />
          <Route path="/technologies/shopify" element={<ShopifyTech />} />
          <Route path="/technologies/magento" element={<MagentoTech />} />
          <Route path="/technologies/java" element={<JavaTech />} />
          <Route path="/technologies/php" element={<PHPTech />} />
          <Route path="/technologies/nodejs" element={<NodeJSTech />} />
          <Route path="/technologies/oracle" element={<OracleTech />} />
          <Route path="/technologies/dotnet" element={<DotNetTech />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
