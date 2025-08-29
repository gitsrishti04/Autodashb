import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Users, 
  Edit, 
  Phone, 
  Mail,
  Search,
  Plus,
  MoreVertical,
  Building
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const contactsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    department: "Sales",
    phoneNumber: "+91 98765 43210",
    email: "rajesh.k@company.com",
    status: "Active",
    lastSeen: "2 hours ago"
  },
  {
    id: 2,
    name: "Priya Sharma",
    department: "Marketing",
    phoneNumber: "+91 87654 32109", 
    email: "priya.s@company.com",
    status: "Active",
    lastSeen: "Online"
  },
  {
    id: 3,
    name: "Amit Patel",
    department: "Support",
    phoneNumber: "+91 76543 21098",
    email: "amit.p@company.com", 
    status: "Away",
    lastSeen: "1 day ago"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    department: "HR",
    phoneNumber: "+91 65432 10987",
    email: "sneha.r@company.com",
    status: "Active", 
    lastSeen: "30 min ago"
  },
  {
    id: 5,
    name: "Vikram Singh",
    department: "Finance",
    phoneNumber: "+91 54321 09876",
    email: "vikram.s@company.com",
    status: "Away",
    lastSeen: "3 hours ago"
  },
  {
    id: 6,
    name: "Anita Desai",
    department: "Design",
    phoneNumber: "+91 43210 98765",
    email: "anita.d@company.com",
    status: "Active",
    lastSeen: "Online"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-success/20 text-success border-success/30">Active</Badge>
    case "Away":
      return <Badge className="bg-warning/20 text-warning border-warning/30">Away</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

const getStatusIndicator = (status: string) => {
  return status === "Active" ? "status-online" : "status-away"
}

export function ContactsList() {
  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-accent" />
            </div>
            Contacts & Users
          </CardTitle>
          <Button className="glow-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search contacts..." 
              className="pl-10"
            />
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            {contactsData.length} contacts
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactsData.map((contact) => (
            <Card key={contact.id} className="hover-lift bg-gradient-to-br from-card to-secondary/10 border border-card-border">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className={`absolute -bottom-1 -right-1 ${getStatusIndicator(contact.status)}`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{contact.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Building className="w-3 h-3" />
                        {contact.department}
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-popover border border-border shadow-lg">
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Contact
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    <span className="font-mono">{contact.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-3 h-3" />
                    <span>{contact.email}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {getStatusBadge(contact.status)}
                  <span className="text-xs text-muted-foreground">
                    {contact.lastSeen}
                  </span>
                </div>

                <Button variant="outline" className="w-full mt-3" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}