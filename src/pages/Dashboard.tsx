import { WhatsAppDemo } from "@/components/WhatsAppDemo"
import { MessageLogs } from "@/components/MessageLogs"
import { ContactsList } from "@/components/ContactsList"
import { FloatingChat } from "@/components/FloatingChat"
import { DashboardHeader } from "@/components/DashboardHeader"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6 space-y-8">
        {/* WhatsApp Demo Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">WhatsApp Chat Demo</h2>
            <p className="text-muted-foreground">Monitor your automation costs and manage your messaging setup</p>
          </div>
          <WhatsAppDemo />
        </section>

        {/* Message Logs Section */}
        <section>
          <MessageLogs />
        </section>

        {/* Contacts Section */}
        <section>
          <ContactsList />
        </section>
      </main>

      {/* Floating Chat Widget */}
      <FloatingChat />
    </div>
  )
}