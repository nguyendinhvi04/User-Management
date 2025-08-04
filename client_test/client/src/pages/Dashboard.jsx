import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import UserManagement from '../components/UserManagement';

const Dashboard = () => {

  return (
    <div className="dashboard">
      {/* Header */}
      {/* <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-actions">
          <select 
            className="period-select"
            value={selectedPeriod}
            onChange={(e) => handlePeriodChange(e.target.value)}
          >
            <option value="7days">7 ngày qua</option>
            <option value="30days">30 ngày qua</option>
            <option value="90days">90 ngày qua</option>
          </select>
        </div>
      </div> */}

      {/* Stats Cards */}
      {/* <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon stat-icon-users">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="m22 21-3-3m0-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.totalUsers.toLocaleString()}</h3>
            <p className="stat-label">Tổng người dùng</p>
            <span className="stat-change positive">+12%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.activeUsers.toLocaleString()}</h3>
            <p className="stat-label">Người dùng hoạt động</p>
            <span className="stat-change positive">+8%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-new">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <line x1="19" y1="8" x2="19" y2="14" stroke="currentColor" strokeWidth="2"/>
              <line x1="22" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.newRegistrations}</h3>
            <p className="stat-label">Đăng ký mới</p>
            <span className="stat-change negative">-3%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-revenue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">${stats.revenue.toLocaleString()}</h3>
            <p className="stat-label">Doanh thu</p>
            <span className="stat-change positive">+15%</span>
          </div>
        </div>

      {/* Recent Users Table */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">Users Management </h2>
        </div>

         {/*UserManagemet */}
             <UserManagement/>
 
      </div>

      {/* Quick Actions */}
      {/* <div className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">Thao tác nhanh</h2>
        </div>
        
        <div className="quick-actions">
          <button className="quick-action-card">
            <div className="quick-action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <line x1="19" y1="8" x2="19" y2="14" stroke="currentColor" strokeWidth="2"/>
                <line x1="22" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span>Logout</span>
          </button>

          <button className="quick-action-card">
            <div className="quick-action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span>Xuất báo cáo</span>
          </button>

          <button className="quick-action-card">
            <div className="quick-action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span>Cài đặt</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;