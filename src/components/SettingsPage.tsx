import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Shield, 
  Bell, 
  CreditCard, 
  Globe, 
  Smartphone, 
  Lock, 
  Eye, 
  EyeOff,
  ChevronRight,
  Check,
  AlertTriangle
} from 'lucide-react';

const securitySettings = [
  { id: 'twoFactor', label: 'Two-Factor Authentication', description: 'Add an extra layer of security', enabled: true },
  { id: 'biometric', label: 'Biometric Login', description: 'Use fingerprint or face recognition', enabled: false },
  { id: 'loginAlerts', label: 'Login Alerts', description: 'Get notified of new device logins', enabled: true },
  { id: 'autoLock', label: 'Auto-Lock', description: 'Lock app after 5 minutes of inactivity', enabled: true },
];

const notificationSettings = [
  { id: 'transactions', label: 'Transaction Notifications', description: 'Get notified of all transactions', enabled: true },
  { id: 'marketing', label: 'Marketing Updates', description: 'Receive product updates and offers', enabled: false },
  { id: 'security', label: 'Security Alerts', description: 'Important security notifications', enabled: true },
  { id: 'monthly', label: 'Monthly Statements', description: 'Receive monthly account summaries', enabled: true },
];

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    security: securitySettings,
    notifications: notificationSettings
  });

  const toggleSetting = (category: 'security' | 'notifications', id: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: prev[category].map(setting =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    }));
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'preferences', label: 'Preferences', icon: Globe },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">Settings</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Manage your account and preferences</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-lime-accent/10 text-lime-accent'
                    : 'text-light-text dark:text-dark-text hover:bg-light-glass dark:hover:bg-dark-glass'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="ml-auto w-2 h-2 bg-lime-accent rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-8">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-lime-accent rounded-full flex items-center justify-center">
                      <span className="text-light-base dark:text-dark-base font-bold text-2xl">JD</span>
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-light-surface dark:bg-dark-surface border-2 border-light-border dark:border-dark-border rounded-full flex items-center justify-center hover:bg-lime-accent/10 transition-colors">
                      <User className="w-3 h-3 text-light-text dark:text-dark-text" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">John Doe</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary">Premium Member since 2023</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@email.com"
                      className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Country</label>
                    <select className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>

                <button className="bg-lime-accent text-light-base dark:text-dark-base px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all">
                  Save Changes
                </button>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-2">Password</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Update your password to keep your account secure</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="w-full px-4 py-3 pr-12 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-6">Security Settings</h3>
                  <div className="space-y-4">
                    {settings.security.map((setting) => (
                      <div key={setting.id} className="flex items-center justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${setting.enabled ? 'bg-lime-accent/20' : 'bg-gray-500/20'}`}>
                            {setting.id === 'twoFactor' && <Shield className={`w-5 h-5 ${setting.enabled ? 'text-lime-accent' : 'text-gray-400'}`} />}
                            {setting.id === 'biometric' && <Smartphone className={`w-5 h-5 ${setting.enabled ? 'text-lime-accent' : 'text-gray-400'}`} />}
                            {setting.id === 'loginAlerts' && <Bell className={`w-5 h-5 ${setting.enabled ? 'text-lime-accent' : 'text-gray-400'}`} />}
                            {setting.id === 'autoLock' && <Lock className={`w-5 h-5 ${setting.enabled ? 'text-lime-accent' : 'text-gray-400'}`} />}
                          </div>
                          <div>
                            <p className="font-medium text-light-text dark:text-dark-text">{setting.label}</p>
                            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{setting.description}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleSetting('security', setting.id)}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            setting.enabled ? 'bg-lime-accent' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        >
                          <motion.div
                            animate={{ x: setting.enabled ? 24 : 2 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-2">Notification Preferences</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Choose what notifications you want to receive</p>
                </div>

                <div className="space-y-4">
                  {settings.notifications.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${setting.enabled ? 'bg-lime-accent/20' : 'bg-gray-500/20'}`}>
                          <Bell className={`w-5 h-5 ${setting.enabled ? 'text-lime-accent' : 'text-gray-400'}`} />
                        </div>
                        <div>
                          <p className="font-medium text-light-text dark:text-dark-text">{setting.label}</p>
                          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{setting.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSetting('notifications', setting.id)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          setting.enabled ? 'bg-lime-accent' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <motion.div
                          animate={{ x: setting.enabled ? 24 : 2 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Methods Tab */}
            {activeTab === 'payment' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-2">Payment Methods</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Manage your cards and bank accounts</p>
                </div>

                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-r from-lime-accent to-lime-accent/80 rounded-xl text-light-base dark:text-dark-base">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm opacity-90">Primary Card</span>
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <p className="text-xl font-bold font-editorial mb-2">•••• •••• •••• 4567</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">John Doe</span>
                      <span className="text-sm opacity-90">12/26</span>
                    </div>
                  </div>

                  <div className="p-4 bg-light-glass dark:bg-dark-glass border-2 border-dashed border-light-border dark:border-dark-border rounded-xl text-center">
                    <CreditCard className="w-8 h-8 text-light-text-secondary dark:text-dark-text-secondary mx-auto mb-2" />
                    <p className="text-light-text-secondary dark:text-dark-text-secondary">Add new payment method</p>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-2">App Preferences</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Customize your app experience</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Default Currency</label>
                    <select className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300">
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                      <option>JPY - Japanese Yen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Language</label>
                    <select className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Time Zone</label>
                    <select className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300">
                      <option>UTC-5 (Eastern Time)</option>
                      <option>UTC-8 (Pacific Time)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC+1 (Central European Time)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};