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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <Dashboard />
                </div>
              </div>
            </SidebarProvider>
          } />
          
          {/* Sidebar Menu Routes */}
          <Route path="/mobile" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/basic-settings" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/colors-fonts" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/edit-text" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/call-to-action" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/email-popup" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/live-chat" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/messenger" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/faq" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/merge-chat" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/advanced" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/analytics" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          <Route path="/cart-links" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full bg-background">
                <AppSidebar />
                <div className="flex-1">
                  <PagePlaceholder />
                </div>
              </div>
            </SidebarProvider>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
