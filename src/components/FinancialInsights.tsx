import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, PieChart, Calendar, Target } from 'lucide-react';

// Monthly profit data for the chart
const monthlyData = [
  { month: 'Jan', income: 8500, expenses: 6200, profit: 2300 },
  { month: 'Feb', income: 9200, expenses: 6800, profit: 2400 },
  { month: 'Mar', income: 7800, expenses: 5900, profit: 1900 },
  { month: 'Apr', income: 10500, expenses: 7200, profit: 3300 },
  { month: 'May', income: 11200, expenses: 8100, profit: 3100 },
  { month: 'Jun', income: 9800, expenses: 7400, profit: 2400 },
  { month: 'Jul', income: 12100, expenses: 8900, profit: 3200 },
  { month: 'Aug', income: 10800, expenses: 7800, profit: 3000 },
  { month: 'Sep', income: 11500, expenses: 8200, profit: 3300 },
  { month: 'Oct', income: 12800, expenses: 9100, profit: 3700 },
  { month: 'Nov', income: 13200, expenses: 9500, profit: 3700 },
  { month: 'Dec', income: 14100, expenses: 10200, profit: 3900 },
];

const expenseCategories = [
  { name: 'Housing', amount: 3200, percentage: 35, color: 'bg-blue-500' },
  { name: 'Food & Dining', amount: 1800, percentage: 20, color: 'bg-green-500' },
  { name: 'Transportation', amount: 1200, percentage: 13, color: 'bg-yellow-500' },
  { name: 'Entertainment', amount: 900, percentage: 10, color: 'bg-purple-500' },
  { name: 'Shopping', amount: 800, percentage: 9, color: 'bg-pink-500' },
  { name: 'Utilities', amount: 600, percentage: 7, color: 'bg-orange-500' },
  { name: 'Other', amount: 500, percentage: 6, color: 'bg-gray-500' },
];

export const FinancialInsights: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12M');
  
  const currentMonth = monthlyData[monthlyData.length - 1];
  const previousMonth = monthlyData[monthlyData.length - 2];
  const profitChange = ((currentMonth.profit - previousMonth.profit) / previousMonth.profit) * 100;
  
  const totalIncome = monthlyData.reduce((sum, month) => sum + month.income, 0);
  const totalExpenses = monthlyData.reduce((sum, month) => sum + month.expenses, 0);
  const totalProfit = totalIncome - totalExpenses;
  
  const maxValue = Math.max(...monthlyData.map(d => Math.max(d.income, d.expenses)));

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
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-editorial">Financial Insights</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Track your income, expenses, and profit trends</p>
        </div>
        <div className="flex items-center space-x-2 bg-light-glass dark:bg-dark-glass rounded-xl p-1">
          {['3M', '6M', '12M'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === period
                  ? 'bg-lime-accent text-light-base dark:text-dark-base'
                  : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-lime-accent/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-lime-accent" />
            </div>
            <h3 className="font-medium text-light-text-secondary dark:text-dark-text-secondary">Total Income</h3>
          </div>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">${totalIncome.toLocaleString()}</p>
          <p className="text-sm text-lime-accent mt-1">+12.5% from last year</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <TrendingDown className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-medium text-light-text-secondary dark:text-dark-text-secondary">Total Expenses</h3>
          </div>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">${totalExpenses.toLocaleString()}</p>
          <p className="text-sm text-red-400 mt-1">+8.2% from last year</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-medium text-light-text-secondary dark:text-dark-text-secondary">Net Profit</h3>
          </div>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">${totalProfit.toLocaleString()}</p>
          <p className={`text-sm mt-1 ${profitChange >= 0 ? 'text-lime-accent' : 'text-red-400'}`}>
            {profitChange >= 0 ? '+' : ''}{profitChange.toFixed(1)}% from last month
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Target className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-medium text-light-text-secondary dark:text-dark-text-secondary">Savings Rate</h3>
          </div>
          <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">{((totalProfit / totalIncome) * 100).toFixed(1)}%</p>
          <p className="text-sm text-lime-accent mt-1">Above recommended 20%</p>
        </motion.div>
      </div>

      {/* Monthly Profit Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Monthly Profit Analysis</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">Income vs Expenses breakdown</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-lime-accent rounded-full"></div>
              <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Income</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Expenses</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Profit</span>
            </div>
          </div>
        </div>

        <div className="relative h-80">
          <div className="absolute inset-0 flex items-end justify-between space-x-2">
            {monthlyData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-1 flex flex-col items-center space-y-2"
              >
                <div className="w-full flex flex-col space-y-1 items-center">
                  {/* Income Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.income / maxValue) * 200}px` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="w-full bg-lime-accent/80 rounded-t-sm relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-surface text-dark-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${data.income.toLocaleString()}
                    </div>
                  </motion.div>
                  
                  {/* Expenses Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.expenses / maxValue) * 200}px` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="w-full bg-red-400/80 relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-surface text-dark-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${data.expenses.toLocaleString()}
                    </div>
                  </motion.div>
                  
                  {/* Profit Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.profit / maxValue) * 200}px` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    className="w-full bg-blue-400/80 rounded-b-sm relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-surface text-dark-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${data.profit.toLocaleString()}
                    </div>
                  </motion.div>
                </div>
                
                <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary font-medium">
                  {data.month}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Expense Categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <PieChart className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-editorial">Expense Breakdown</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">Current month spending by category</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories List */}
          <div className="space-y-4">
            {expenseCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  <span className="font-medium text-light-text dark:text-dark-text">{category.name}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-light-text dark:text-dark-text">${category.amount.toLocaleString()}</p>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{category.percentage}%</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Chart */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {expenseCategories.map((category, index) => {
                  const startAngle = expenseCategories.slice(0, index).reduce((sum, cat) => sum + (cat.percentage * 3.6), 0);
                  const endAngle = startAngle + (category.percentage * 3.6);
                  const largeArcFlag = category.percentage > 50 ? 1 : 0;
                  
                  const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                  const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                  const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                  const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
                  
                  return (
                    <motion.path
                      key={category.name}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      className={`${category.color.replace('bg-', 'fill-')} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-light-text dark:text-dark-text font-editorial">
                    ${currentMonth.expenses.toLocaleString()}
                  </p>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Total Expenses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};