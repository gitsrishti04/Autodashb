import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, CreditCard, Smartphone, TrendingUp, Zap, Users } from "lucide-react"

export function WhatsAppDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
      {/* Cost Overview */}
      <Card className="dashboard-card group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="w-full h-full rounded-full glow-primary animate-pulse-glow"></div>
        </div>
        
        <CardHeader className="pb-4 relative z-10">
          <CardTitle className="text-xl font-semibold flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center glow-primary animate-float">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-gradient-primary">Message Costs</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">Real-time pricing</p>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-6 rounded-2xl glow-primary group/cost hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-white mb-1">₹0.25</p>
              <p className="text-sm text-white/90 font-medium">per message INR</p>
            </div>
            <div className="text-center p-6 rounded-2xl glow-info group/cost hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold text-white mb-1">$0.003</p>
              <p className="text-sm text-white/90 font-medium">per message USD</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-6 rounded-2xl glow-success">
            <div>
              <p className="text-sm font-medium text-white mb-1">Current Balance</p>
              <p className="text-2xl font-bold text-white">₹1,250.00</p>
            </div>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 animate-pulse-glow font-medium">
              <Zap className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="dashboard-card group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-info animate-shimmer"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-info/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardHeader className="pb-4 relative z-10">
          <CardTitle className="text-xl font-semibold flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center glow-info animate-float" style={{ animationDelay: '0.5s' }}>
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-gradient-primary">Quick Setup</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">Get started fast</p>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10">
          <Button className="w-full h-14 glow-primary hover:glow-success transition-all duration-500 text-lg font-medium group/btn">
            <Smartphone className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
            Connect Your Number
            <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button variant="outline" className="w-full h-14 border-2 border-dashed border-accent hover:bg-accent hover:text-white hover:border-solid transition-all duration-300 text-lg font-medium group/btn">
            <CreditCard className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
            Add Credits
            <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <div className="p-6 rounded-2xl glow-warning relative overflow-hidden group/progress">
            <p className="text-lg font-semibold text-white mb-3">Setup Progress</p>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-white h-4 rounded-full animate-pulse-glow transition-all duration-1000 ease-out" 
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-sm text-white/90 mt-3 font-medium">3 of 4 steps completed</p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <Card className="dashboard-card group relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-info animate-shimmer"></div>
        </div>
        
        <CardHeader className="pb-4 relative z-10">
          <CardTitle className="text-xl font-semibold flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
            <div>
              <span className="text-gradient-primary">Today's Activity</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">Live metrics</p>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-5 rounded-2xl glow-primary hover:scale-105 transition-all duration-300 group/stat">
              <p className="text-2xl font-bold text-white mb-1">156</p>
              <p className="text-xs text-white/90 font-medium">Messages Sent</p>
            </div>
            <div className="text-center p-5 rounded-2xl glow-success hover:scale-105 transition-all duration-300 group/stat">
              <p className="text-2xl font-bold text-white mb-1">89%</p>
              <p className="text-xs text-white/90 font-medium">Delivery Rate</p>
            </div>
            <div className="text-center p-5 rounded-2xl glow-info hover:scale-105 transition-all duration-300 group/stat">
              <p className="text-2xl font-bold text-white mb-1">23</p>
              <p className="text-xs text-white/90 font-medium">New Contacts</p>
            </div>
            <div className="text-center p-5 rounded-2xl glow-warning hover:scale-105 transition-all duration-300 group/stat">
              <p className="text-2xl font-bold text-white mb-1">12</p>
              <p className="text-xs text-white/90 font-medium">Responses</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border group/insight hover:bg-muted/70 transition-colors duration-300">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Performance Insight</p>
                <p className="text-xs text-muted-foreground">Your engagement is 15% above average</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}