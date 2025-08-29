import { NavLink } from "react-router-dom"
import {
  Smartphone,
  Settings,
  Palette,
  Type,
  MousePointer,
  Mail,
  MessageCircle,
  Instagram,
  HelpCircle,
  Merge,
  Settings as SettingsIcon,
  BarChart3,
  ShoppingCart,
  ChevronRight,
  Bell,
  Menu,
} from "lucide-react"

interface AppSidebarProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const menuItems = [
  { title: "Mobile No", url: "/mobile", icon: Smartphone },
  { title: "Basic Settings", url: "/basic-settings", icon: Settings },
  { title: "Colors & Fonts", url: "/colors-fonts", icon: Palette },
  { title: "Edit Text", url: "/edit-text", icon: Type },
  { title: "Call to Action", url: "/call-to-action", icon: MousePointer },
  { title: "Email Popup", url: "/email-popup", icon: Mail },
  { title: "Live Chat", url: "/live-chat", icon: MessageCircle },
  { title: "Messenger/Instagram", url: "/messenger", icon: Instagram },
  { title: "Add FAQ", url: "/faq", icon: HelpCircle },
  { title: "Merge Chat", url: "/merge-chat", icon: Merge },
  { title: "Advanced Settings", url: "/advanced", icon: SettingsIcon },
  { title: "FB Pixel/GA", url: "/analytics", icon: BarChart3 },
  { title: "Add to Cart Links", url: "/cart-links", icon: ShoppingCart },
]

export function AppSidebar({ collapsed, setCollapsed }: AppSidebarProps) {
  return (
    <div
      className={`bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 ${
        collapsed ? "w-35" : "w-82"
      }`}
    >
      {/* Logo + Toggle Section */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-bold text-sidebar-foreground">AutoChat</h1>
              <p className="text-xs text-sidebar-foreground/60">Dashboard</p>
            </div>
          )}
        </div>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-2 p-1 rounded hover:bg-sidebar-accent"
        >
          <Menu className="w-5 h-5 text-sidebar-foreground" />
        </button>
      </div>

      {/* Notification Badge */}
      {!collapsed && (
        <div className="px-4 py-3">
          <div className="notification-badge flex items-center gap-2">
            <Bell className="w-4 h-4 text-sidebar-foreground" />
            <span className="text-sm">3 Abandoned Carts</span>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto">
        <p className="text-sidebar-foreground/60 uppercase tracking-wider text-xs font-medium px-4 mt-2">
          Menu
        </p>
        <ul className="mt-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-black shadow-md"
                      : "text-black hover:bg-sidebar-accent hover:text-black"
                  }`
                }
              >
                <item.icon className={`w-5 h-5 ${collapsed ? "mx-auto" : ""}`} />
                {!collapsed && (
                  <>
                    <span className="font-medium">{item.title}</span>
                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">AD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-sidebar-foreground">
                Admin User
              </p>
              <p className="text-xs text-sidebar-foreground/60">
                admin@example.com
              </p>
            </div>
            <div className="status-online"></div>
          </div>
        </div>
      )}
    </div>
  )
}
