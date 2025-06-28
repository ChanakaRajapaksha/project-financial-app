import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Clock, CheckCircle, XCircle, Search, Filter, Plus, ArrowUpRight, ArrowDownLeft, Globe } from 'lucide-react';

const recentTransfers = [
  {
    id: 1,
    type: 'sent',
    recipient: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    amount: 2500,
    currency: 'USD',
    targetCurrency: 'EUR',
    convertedAmount: 2287.50,
    status: 'completed',
    date: '2024-01-15',
    time: '14:30',
    fee: 12.50,
    exchangeRate: 0.915,
    country: 'Germany',
    flag: '🇩🇪'
  },
  {
    id: 2,
    type: 'received',
    recipient: 'Marcus Chen',
    email: 'marcus.chen@company.com',
    amount: 1840,
    currency: 'GBP',
    targetCurrency: 'USD',
    convertedAmount: 2324.16,
    status: 'pending',
    date: '2024-01-15',
    time: '12:15',
    fee: 8.75,
    exchangeRate: 1.263,
    country: 'United Kingdom',
    flag: '🇬🇧'
  },
  {
    id: 3,
    type: 'sent',
    recipient: 'Elena Rodriguez',
    email: 'elena.r@freelance.com',
    amount: 750,
    currency: 'USD',
    targetCurrency: 'EUR',
    convertedAmount: 686.25,
    status: 'completed',
    date: '2024-01-14',
    time: '09:45',
    fee: 5.25,
    exchangeRate: 0.915,
    country: 'Spain',
    flag: '🇪🇸'
  },
  {
    id: 4,
    type: 'sent',
    recipient: 'Yuki Tanaka',
    email: 'yuki.tanaka@tech.jp',
    amount: 3200,
    currency: 'USD',
    targetCurrency: 'JPY',
    convertedAmount: 479424,
    status: 'failed',
    date: '2024-01-13',
    time: '16:20',
    fee: 15.00,
    exchangeRate: 149.82,
    country: 'Japan',
    flag: '🇯🇵'
  }
];

const statusConfig = {
  completed: { color: 'text-lime-accent', bg: 'bg-lime-accent/20', icon: CheckCircle },
  pending: { color: 'text-yellow-400', bg: 'bg-yellow-400/20', icon: Clock },
  failed: { color: 'text-red-400', bg: 'bg-red-400/20', icon: XCircle }
};

export const TransfersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showNewTransfer, setShowNewTransfer] = useState(false);

  const filteredTransfers = recentTransfers.filter(transfer => {
    const matchesSearch = transfer.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transfer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || transfer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">International Transfers</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Send money globally with real-time tracking</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowNewTransfer(true)}
          className="flex items-center space-x-2 bg-lime-accent text-light-base dark:text-dark-base px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>New Transfer</span>
        </motion.button>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-lime-accent/20 rounded-lg">
              <Send className="w-5 h-5 text-lime-accent" />
            </div>
            <h3 className="font-medium text-light-text-secondary dark:text-dark-text-secondary">Total Sent</h3>
          </div>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">$47,290</p>
          <p className="text-sm text-lime-accent mt-1">This month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Globe className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-medium text-light-text-secondary dark:text-dark-text-secondary">Countries</h3>
          </div>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">12</p>
          <p className="text-sm text-blue-400 mt-1">Active destinations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-medium text-light-text-secondary dark:text-dark-text-secondary">Avg. Speed</h3>
          </div>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">2.4 min</p>
          <p className="text-sm text-purple-400 mt-1">Transfer time</p>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
          <input
            type="text"
            placeholder="Search transfers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl px-4 py-3 text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </motion.div>

      {/* Transfers List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6"
      >
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial mb-6">Recent Transfers</h3>
        
        <div className="space-y-4">
          {filteredTransfers.map((transfer, index) => {
            const StatusIcon = statusConfig[transfer.status as keyof typeof statusConfig].icon;
            
            return (
              <motion.div
                key={transfer.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="flex items-center justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl hover:border-lime-accent/30 border border-transparent transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${transfer.type === 'sent' ? 'bg-red-500/20' : 'bg-lime-accent/20'}`}>
                    {transfer.type === 'sent' ? (
                      <ArrowUpRight className="w-5 h-5 text-red-400" />
                    ) : (
                      <ArrowDownLeft className="w-5 h-5 text-lime-accent" />
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-light-text dark:text-dark-text font-editorial">{transfer.recipient}</p>
                      <span className="text-lg">{transfer.flag}</span>
                    </div>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{transfer.email}</p>
                    <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{transfer.country}</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-bold text-light-text dark:text-dark-text font-editorial">
                    {transfer.type === 'sent' ? '-' : '+'}{transfer.amount.toLocaleString()} {transfer.currency}
                  </p>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    ≈ {transfer.convertedAmount.toLocaleString()} {transfer.targetCurrency}
                  </p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                    Rate: {transfer.exchangeRate} • Fee: ${transfer.fee}
                  </p>
                </div>

                <div className="text-right">
                  <div className={`flex items-center space-x-2 ${statusConfig[transfer.status as keyof typeof statusConfig].color} mb-2`}>
                    <StatusIcon className="w-4 h-4" />
                    <span className="text-sm font-medium capitalize">{transfer.status}</span>
                  </div>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{transfer.date}</p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{transfer.time}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredTransfers.length === 0 && (
          <div className="text-center py-12">
            <Send className="w-12 h-12 text-light-text-secondary dark:text-dark-text-secondary mx-auto mb-4 opacity-50" />
            <p className="text-light-text-secondary dark:text-dark-text-secondary">No transfers found matching your criteria</p>
          </div>
        )}
      </motion.div>

      {/* New Transfer Modal */}
      {showNewTransfer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowNewTransfer(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial mb-6">New Transfer</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Recipient Email</label>
                <input
                  type="email"
                  placeholder="recipient@email.com"
                  className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Amount</label>
                  <input
                    type="number"
                    placeholder="1000"
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Currency</label>
                  <select className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Message (Optional)</label>
                <textarea
                  placeholder="Add a note..."
                  rows={3}
                  className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-lime-accent/50 transition-colors duration-300 resize-none"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => setShowNewTransfer(false)}
                className="flex-1 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text hover:border-lime-accent/30 transition-all"
              >
                Cancel
              </button>
              <button className="flex-1 py-3 bg-lime-accent text-light-base dark:text-dark-base rounded-xl font-medium hover:shadow-glow transition-all">
                Send Transfer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};