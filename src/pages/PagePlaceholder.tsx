import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Construction } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

export default function PagePlaceholder() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const getPageTitle = (pathname: string) => {
    const titles: { [key: string]: string } = {
      '/mobile': 'Mobile Number Configuration',
      '/basic-settings': 'Basic Settings',
      '/colors-fonts': 'Colors & Fonts Customization',
      '/edit-text': 'Text Editor',
      '/call-to-action': 'Call to Action Setup',
      '/email-popup': 'Email Popup Configuration',
      '/live-chat': 'Live Chat Settings',
      '/messenger': 'Messenger & Instagram Integration',
      '/faq': 'FAQ Management',
      '/merge-chat': 'Chat Merge Settings',
      '/advanced': 'Advanced Settings',
      '/analytics': 'Facebook Pixel & Google Analytics',
      '/cart-links': 'Add to Cart Links'
    }
    return titles[pathname] || 'Page'
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <Card className="dashboard-card">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              {getPageTitle(location.pathname)}
            </CardTitle>
            <p className="text-muted-foreground">
              This feature is coming soon! We're working hard to bring you the best automation experience.
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Advanced Features</h3>
                <p className="text-xs text-muted-foreground">Comprehensive automation tools</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Easy Integration</h3>
                <p className="text-xs text-muted-foreground">Seamless setup process</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-sm mb-2">24/7 Support</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            
            <Button className="glow-primary">
              Get Notified When Ready
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}