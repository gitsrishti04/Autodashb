import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { 
  Bell, 
  Settings, 
  User, 
  Search,
  Menu,
  Save,
  RefreshCw,
  Sparkles
} from "lucide-react"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  return (
    <header className="bg-card/95 backdrop-blur-xl border-b border-card-border shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-info animate-shimmer"></div>
      
      <div className="flex items-center justify-between px-6 py-5 relative z-10">
        <div className="flex items-center gap-6">
          <SidebarTrigger className="lg:hidden hover:bg-muted rounded-lg p-2 transition-colors duration-200">
            <Menu className="w-5 h-5" />
          </SidebarTrigger>
          
          <div className="group">
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary animate-float" />
              <span className="text-gradient-primary">Automation Dashboard</span>
              <div className="w-3 h-3 rounded-full bg-success animate-pulse shadow-glow"></div>
            </h1>
            <p className="text-base text-muted-foreground mt-1 font-medium">
              Manage your WhatsApp automation and messaging
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
            <Input 
              placeholder="Search anything..." 
              className="pl-12 w-80 h-12 border-2 border-transparent focus:border-primary/50 transition-all duration-300 rounded-xl bg-muted/50 hover:bg-muted/70"
            />
          </div>

          {/* Action Buttons */}
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex h-11 px-4 border-2 border-dashed border-accent hover:bg-accent hover:text-white hover:border-solid transition-all duration-300 rounded-xl group"
          >
            <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Sync Data
          </Button>
          
          <Button 
            size="sm" 
            className="h-11 px-6 glow-primary hover:glow-success transition-all duration-500 rounded-xl group font-medium"
          >
            <Save className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Save Changes
          </Button>

          {/* Notifications */}
          <div className="relative group">
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative h-11 w-11 rounded-xl hover:bg-muted transition-colors duration-200"
            >
              <Bell className="w-5 h-5 group-hover:animate-pulse" />
              <Badge className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-error border-2 border-card p-0 flex items-center justify-center text-xs font-bold animate-pulse-glow">
                5
              </Badge>
            </Button>
          </div>

          {/* Settings */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-11 w-11 rounded-xl hover:bg-muted transition-colors duration-200 group"
          >
            <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-4 pl-6 border-l border-border">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-foreground">Admin User</p>
              <p className="text-xs text-muted-foreground font-medium">Super Admin</p>
            </div>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center glow-primary animate-pulse-glow cursor-pointer hover:scale-110 transition-transform duration-300 group">
              <User className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}