import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TajMahalTour from "./pages/TajMahalTour";
import HampiTour from "./pages/HampiTour";
import KonarkTour from "./pages/KonarkTour";
import QutubMinarTour from "./pages/QutubMinarTour";
import AjantaTour from "./pages/AjantaTour";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tour/taj-mahal" element={<TajMahalTour />} />
          <Route path="/tour/hampi" element={<HampiTour />} />
          <Route path="/tour/konark" element={<KonarkTour />} />
          <Route path="/tour/qutub-minar" element={<QutubMinarTour />} />
          <Route path="/tour/ajanta" element={<AjantaTour />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
