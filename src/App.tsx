import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import PagePlaceholder from "./pages/PagePlaceholder";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full max-w-[100vw] overflow-x-hidden bg-background">
        {/* Sidebar with toggle */}
        <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={<Layout><Dashboard /></Layout>} />

          {/* Sidebar Menu Routes */}
          <Route path="/mobile" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/basic-settings" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/colors-fonts" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/edit-text" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/call-to-action" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/email-popup" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/live-chat" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/messenger" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/faq" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/merge-chat" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/advanced" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/analytics" element={<Layout><PagePlaceholder /></Layout>} />
          <Route path="/cart-links" element={<Layout><PagePlaceholder /></Layout>} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
