import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  Eye, 
  Edit, 
  Trash2, 
  Download, 
  Filter,
  Search,
  MessageSquare
} from "lucide-react"
import { Input } from "@/components/ui/input"

const messageData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    message: "Welcome! Your order #1234 has been confirmed. We'll notify you once it ships.",
    sentTime: "2024-01-15 10:30 AM",
    phoneNumber: "+91 98765 43210",
    status: "Delivered",
    remarks: "Order confirmation"
  },
  {
    id: 2,
    name: "Priya Sharma",
    message: "Thank you for your inquiry. Our team will get back to you within 24 hours.",
    sentTime: "2024-01-15 09:45 AM",
    phoneNumber: "+91 87654 32109",
    status: "Read",
    remarks: "Customer inquiry"
  },
  {
    id: 3,
    name: "Amit Patel",
    message: "Your appointment is scheduled for tomorrow at 2 PM. Please arrive 15 minutes early.",
    sentTime: "2024-01-15 08:20 AM",
    phoneNumber: "+91 76543 21098",
    status: "Delivered",
    remarks: "Appointment reminder"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    message: "Flash Sale Alert! 50% off on all electronics. Valid until midnight. Shop now!",
    sentTime: "2024-01-14 06:15 PM",
    phoneNumber: "+91 65432 10987",
    status: "Failed",
    remarks: "Promotional message"
  },
  {
    id: 5,
    name: "Vikram Singh",
    message: "Hi! We noticed you left items in your cart. Complete your purchase with free shipping.",
    sentTime: "2024-01-14 04:30 PM",
    phoneNumber: "+91 54321 09876",
    status: "Read",
    remarks: "Cart abandonment"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Delivered":
      return <Badge className="bg-success/20 text-success border-success/30">Delivered</Badge>
    case "Read":
      return <Badge className="bg-primary/20 text-primary border-primary/30">Read</Badge>
    case "Failed":
      return <Badge className="bg-error/20 text-error border-error/30">Failed</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export function MessageLogs() {
  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-primary" />
            </div>
            Message Logs
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search messages..." 
              className="pl-10"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-card-border overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary/30">
              <TableRow>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Message</TableHead>
                <TableHead className="font-semibold">Sent Time</TableHead>
                <TableHead className="font-semibold">Phone Number</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Remarks</TableHead>
                <TableHead className="font-semibold text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messageData.map((row) => (
                <TableRow key={row.id} className="table-row">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          {row.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      {row.name}
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate" title={row.message}>
                      {row.message}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.sentTime}
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {row.phoneNumber}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(row.status)}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.remarks}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-error hover:text-error">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}