import {
  Home,
  Target,
  BarChart3,
  Users,
  DollarSign,
  Mail,
  Settings,
  HelpCircle,
  Edit3,
  Send,
  Eye,
  Plus,
} from "lucide-react";
import Logo from "@/components/logo";

const CampaignDashboard = () => {
  const sidebarItems = [
    { icon: Home, label: "Dashboard Overview", active: true },
    { icon: Target, label: "My Campaigns" },
    { icon: BarChart3, label: "Analytics/Reports" },
    { icon: Users, label: "Supporters" },
    { icon: DollarSign, label: "Payouts/Earnings" },
    { icon: Mail, label: "Messages/Updates" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help/Support" },
  ];

  const metrics = [
    {
      title: "Total Raised",
      value: "৳125,000",
      subtitle: "+ 5,000 this week",
      bgColor: "bg-white",
      textColor: "text-red-600",
      subtitleColor: "text-gray-500",
    },
    {
      title: "Number of Donors",
      value: "78",
      subtitle: "+ 5 new donors",
      bgColor: "bg-white",
      textColor: "text-red-600",
      subtitleColor: "text-gray-500",
    },
    {
      title: "Progress to Goal",
      value: "65%",
      subtitle: "Goal: ৳200,000",
      bgColor: "bg-white",
      textColor: "text-red-600",
      subtitleColor: "text-gray-500",
    },
    {
      title: "Days Left",
      value: "15",
      subtitle: "Campaign ends: Nov 30",
      bgColor: "bg-white",
      textColor: "text-black",
      subtitleColor: "text-gray-500",
    },
    {
      title: "Total Monthly Pledged",
      value: "৳12,500",
      subtitle: "+ 500 this month",
      bgColor: "bg-white",
      textColor: "text-blue-600",
      subtitleColor: "text-gray-500",
    },
    {
      title: "Active Subscribers",
      value: "125",
      subtitle: "+ 10 new subscribers",
      bgColor: "bg-white",
      textColor: "text-blue-600",
      subtitleColor: "text-gray-500",
    },
    {
      title: "New Subscribers (Month)",
      value: "23",
      subtitle: "Up from 18 last month",
      bgColor: "bg-white",
      textColor: "text-black",
      subtitleColor: "text-gray-500",
    },
    {
      title: "Churn Rate",
      value: "3.5%",
      subtitle: "Lower is better",
      bgColor: "bg-white",
      textColor: "text-blue-600",
      subtitleColor: "text-gray-500",
    },
  ];

  const recentActivities = [
    {
      type: "donation",
      user: "Anika Rahman",
      action: "donated ৳1,000.",
      time: "2 hours ago",
      icon: "💰",
      iconColor: "text-green-600",
    },
    {
      type: "subscription",
      user: "Karim Ahmed",
      action: "subscribed to &apos;Gold Tier&apos;.",
      time: "5 hours ago",
      icon: "👥",
      iconColor: "text-blue-600",
    },
    {
      type: "comment",
      user: "Farah Yasmin",
      action: 'New Comment on "Project Update #3" by',
      time: "1 day ago",
      icon: "💬",
      iconColor: "text-orange-600",
    },
    {
      type: "backer",
      user: "Rohan Chowdhury",
      action: "backed &apos;Early Bird Special&apos;.",
      time: "2 days ago",
      icon: "💰",
      iconColor: "text-green-600",
    },
  ];

  const quickLinks = [
    {
      label: "Edit Current Campaign",
      icon: Edit3,
      color: "text-red-600",
    },
    {
      label: "Send Update to Supporters",
      icon: Send,
      color: "text-red-600",
    },
    {
      label: "View Supporters List",
      icon: Eye,
      color: "text-red-600",
    },
    {
      label: "Create New Campaign",
      icon: Plus,
      color: "text-red-600",
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
                  ? "bg-red-50 text-red-600 border-r-2 border-red-600"
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
              Here&apos;s an overview of your campaign activities.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`${metric.bgColor} rounded-lg p-6 border border-gray-200 shadow-sm`}
              >
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  {metric.title}
                </h3>
                <p className={`text-3xl font-bold ${metric.textColor} mb-1`}>
                  {metric.value}
                </p>
                <p className={`text-xs ${metric.subtitleColor}`}>
                  {metric.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
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
                            <span
                              className={`font-medium ${activity.iconColor}`}
                            >
                              {activity.type === "comment"
                                ? activity.action
                                : `New ${
                                    activity.type.charAt(0).toUpperCase() +
                                    activity.type.slice(1)
                                  }:`}
                            </span>
                            {activity.type !== "comment" && (
                              <>
                                {" "}
                                <span className="font-medium text-gray-900">
                                  {activity.user}
                                </span>{" "}
                                {activity.action}
                              </>
                            )}
                            {activity.type === "comment" && (
                              <>
                                {" "}
                                <span className="font-medium text-gray-900">
                                  {activity.user}
                                </span>
                              </>
                            )}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <p className="text-xs text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Quick Links
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center space-x-3 text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <link.icon className={`h-4 w-4 ${link.color}`} />
                        <span className={`${link.color} font-medium`}>
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDashboard;
