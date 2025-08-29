import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  X, 
  Send,
  Phone,
  Video,
  MoreVertical,
  ArrowRight
} from "lucide-react"
import { Input } from "@/components/ui/input"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const messages = [
    { 
      id: 1, 
      text: "Hello! How can I help you today?", 
      sender: "support", 
      time: "2:30 PM",
      isBot: true 
    },
    { 
      id: 2, 
      text: "I need help with my order status", 
      sender: "user", 
      time: "2:31 PM",
      isBot: false 
    },
    { 
      id: 3, 
      text: "I'd be happy to help! Please provide your order number.", 
      sender: "support", 
      time: "2:31 PM",
      isBot: true 
    }
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("")
      // Handle message sending logic here
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 w-14 h-14 rounded-full shadow-lg glow-primary z-50 hover:scale-110 transition-all duration-200"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
          <Badge className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-error border-2 border-white p-0 flex items-center justify-center text-xs">
            3
          </Badge>
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 left-6 w-80 h-96 shadow-xl z-50 border border-card-border">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">WhatsApp Support</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-xs opacity-90">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-primary-foreground hover:bg-white/20">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-primary-foreground hover:bg-white/20">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-primary-foreground hover:bg-white/20">
                <MoreVertical className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-primary-foreground hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-white to-secondary/10 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl shadow-sm ${
                    msg.isBot
                      ? 'bg-secondary text-secondary-foreground rounded-bl-sm'
                      : 'chat-bubble'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-primary to-success p-3 rounded-lg text-center">
              <p className="text-sm text-white mb-2">Continue this conversation on WhatsApp</p>
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-white text-primary hover:bg-white/90"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Open WhatsApp
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>

          {/* Chat Input */}
          <div className="p-3 border-t border-card-border bg-card">
            <div className="flex items-center gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                size="sm" 
                onClick={handleSendMessage}
                className="h-9 w-9 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}