import {
  Home,
  Users,
  Layers,
  FileText,
  DollarSign,
  BarChart3,
  Mail,
  Settings,
  HelpCircle,
  Plus,
  Eye,
  Edit3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

const CreatorDashboard = () => {
  const sidebarItems = [
    { icon: Home, label: "Overview", active: true },
    { icon: Users, label: "My Patrons" },
    { icon: Layers, label: "Tiers" },
    { icon: FileText, label: "Posts" },
    { icon: DollarSign, label: "Earnings & Payouts" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Mail, label: "Messages" },
    { icon: Settings, label: "Page Settings" },
    { icon: HelpCircle, label: "Help/Support" },
  ];

  const metrics = [
    {
      title: "Current Monthly Pledged Amount",
      value: "৳12,500",
      subtitle: "earned this month",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Total Active Patrons",
      value: "150",
      subtitle: "total active supporters",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "New Patrons This Month",
      value: "12",
      subtitle: "new supporters",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Average Pledge Amount",
      value: "৳83.33",
      subtitle: "average donation",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Estimated Next Payout",
      value: "৳11,875",
      subtitle: "next payout (after fees)",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
  ];

  const recentActivities = [
    {
      type: "new_member",
      user: "Aisha Rahman",
      action: "just became a Gold Member.",
      time: "2 min ago",
      icon: "👤",
    },
    {
      type: "comment",
      user: "Karim Ahmed",
      action: 'commented on your post "Behind the Scenes".',
      time: "15 min ago",
      icon: "💬",
    },
    {
      type: "upgrade",
      user: "Fatima Begum",
      action: "upgraded to Platinum Member.",
      time: "1 hour ago",
      icon: "⭐",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <Logo />
          </div>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome, Creator Name!
            </h1>
            <p className="text-gray-600">
              Here&apos;s a snapshot of your subscription activity.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`${metric.bgColor} rounded-lg p-6 border border-gray-200`}
              >
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  {metric.title}
                </h3>
                <p className={`text-3xl font-bold ${metric.textColor} mb-1`}>
                  {metric.value}
                </p>
                <p className="text-xs text-gray-500">{metric.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Create New Post
            </Button>
            <Button
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200"
            >
              <Eye className="mr-2 h-4 w-4" />
              View My Patrons
            </Button>
            <Button
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200"
            >
              <Edit3 className="mr-2 h-4 w-4" />
              Edit Tiers
            </Button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Activity
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">{activity.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium text-green-600">
                          {activity.user}
                        </span>{" "}
                        {activity.action}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
