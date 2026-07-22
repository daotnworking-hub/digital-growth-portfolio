import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  DollarSign, 
  Zap, 
  Sliders, 
  Database, 
  CheckCircle2, 
  Layers, 
  Award,
  RefreshCw,
  Eye,
  Filter,
  Users,
  Video,
  PieChart,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Calendar,
  FileSpreadsheet,
  Download,
  Play,
  PhoneCall,
  UserCheck,
  Percent,
  Activity
} from 'lucide-react';

export default function InteractiveDashboardsShowcase() {
  const [timePeriod, setTimePeriod] = useState('month'); // 'week' | 'month' | 'year'
  const [activeModule, setActiveModule] = useState('telesale'); // 'telesale' | 'ads-cost' | 'automatic-bi'

  // --- STATE FOR MODULE 1: TELESALE PERFORMANCE & TRAINING ---
  const [telesaleTeamFilter, setTelesaleTeamFilter] = useState('ALL');
  
  // --- STATE FOR MODULE 2: ADS COST & ROAS MULTI-CHANNEL ---
  const [boostPercentage, setBoostPercentage] = useState(0);

  // --- STATE FOR MODULE 3: AUTOMATIC BI REPORTING ENGINE ---
  const [isRunningEngine, setIsRunningEngine] = useState(false);
  const [engineLogs, setEngineLogs] = useState([
    '[AUTO-BI v3.2] Ready. Connected to Facebook Graph API v19.0 & TikTok Business SDK.',
    '[CRM SYNC] Telesale CRM webhook status: ACTIVE | Daily sync schedule: Hourly (Cron 0 * * * *)',
    '[RECONCILE] Last reconcile check: 0.00% Variance detected. All lead statuses matched.'
  ]);

  // Dynamic calculations based on time period (`theo tuần, tháng, năm`)
  const multiplier = timePeriod === 'week' ? 0.25 : timePeriod === 'month' ? 1 : 12;
  const periodLabel = timePeriod === 'week' ? 'Tuần Này (Week 29)' : timePeriod === 'month' ? 'Tháng Này (Current Month)' : 'Năm Nay (Fiscal Year)';

  // Base Ads metrics
  const baseSpend = 150 * multiplier;
  const baseRevenue = 500 * multiplier;
  const currentSpend = (baseSpend + (boostPercentage * multiplier)).toFixed(1);
  const currentRevenue = (baseRevenue + (boostPercentage * 3.35 * multiplier)).toFixed(1);
  const currentRoas = (currentRevenue / currentSpend).toFixed(2);
  const grossProfit = (currentRevenue - currentSpend - (currentRevenue * 0.35)).toFixed(1); // Estimated net margin after COGS/Opex
  
  // Funnel & Offline conversion metrics (`Leads -> SĐT hợp lệ -> Lịch hẹn/Show-up -> Đơn chốt`)
  const totalLeads = Math.round(420 * multiplier);
  const validPhones = Math.round(385 * multiplier); // 91.6% valid phone rate
  const bookingsShowUp = Math.round(312 * multiplier); // 81.0% show-up / booking rate
  const closedDeals = Math.round(288 * multiplier); // 92.3% closing rate from show-up (overall 68.5% CVR)
  const aovValue = '1,736,000 VNĐ'; // Average Order Value
  const avgCvr = '68.5%';
  const cacCost = timePeriod === 'week' ? '182k' : timePeriod === 'month' ? '185k' : '180k';

  // Telesale performance rows
  const telesaleTeams = [
    { 
      id: 'TEAM_A', 
      name: 'Nhóm Senior (Telesale Chốt Đơn Chính)', 
      members: 6, 
      callsDay: 145, 
      leadsAssigned: Math.round(240 * multiplier), 
      validPhones: Math.round(225 * multiplier),
      showUpBookings: Math.round(188 * multiplier),
      closed: Math.round(172 * multiplier), 
      cvr: '71.6%', 
      aov: '1,732,000đ',
      revenue: (298 * multiplier).toFixed(1) + ' Tr', 
      status: 'Vượt KPI +15% 🔥' 
    },
    { 
      id: 'TEAM_B', 
      name: 'Nhóm Junior & Training (Khách Retarget)', 
      members: 4, 
      callsDay: 110, 
      leadsAssigned: Math.round(180 * multiplier), 
      validPhones: Math.round(160 * multiplier),
      showUpBookings: Math.round(124 * multiplier),
      closed: Math.round(116 * multiplier), 
      cvr: '64.4%', 
      aov: '1,741,000đ',
      revenue: (202 * multiplier).toFixed(1) + ' Tr', 
      status: 'Đạt Chuẩn KPI ✔' 
    },
  ];

  const filteredTeams = telesaleTeamFilter === 'ALL' 
    ? telesaleTeams 
    : telesaleTeams.filter(t => t.id === telesaleTeamFilter);

  // Channels for ads cost with exact CTR, CPC, CTA metrics
  const channels = [
    { 
      name: 'TikTok Ads (BOFU Video & Spark Ads)', 
      allocation: '45%', 
      spend: (currentSpend * 0.45).toFixed(1), 
      ctr: '4.85%',
      cpc: '2,320đ',
      ctaCvr: '19.2%',
      leads: Math.round(189 * multiplier), 
      revenue: (currentRevenue * 0.46).toFixed(1), 
      roas: '3.40x', 
      status: 'Active / Scaling 🔥', 
      color: 'cyan' 
    },
    { 
      name: 'Facebook Ads (TOFU/MOFU & CAPI Retarget)', 
      allocation: '35%', 
      spend: (currentSpend * 0.35).toFixed(1), 
      ctr: '3.20%',
      cpc: '2,680đ',
      ctaCvr: '17.8%',
      leads: Math.round(147 * multiplier), 
      revenue: (currentRevenue * 0.35).toFixed(1), 
      roas: '3.33x', 
      status: 'Active / CAPI Synced 📡', 
      color: 'pink' 
    },
    { 
      name: 'Google Ads (Search Intent & PMax)', 
      allocation: '20%', 
      spend: (currentSpend * 0.20).toFixed(1), 
      ctr: '6.45%',
      cpc: '3,150đ',
      ctaCvr: '18.4%',
      leads: Math.round(84 * multiplier), 
      revenue: (currentRevenue * 0.19).toFixed(1), 
      roas: '3.16x', 
      status: 'Active / High Intent 🎯', 
      color: 'orange' 
    },
  ];

  const handleRunAutomaticEngine = () => {
    setIsRunningEngine(true);
    setEngineLogs(prev => [
      ...prev,
      `[▶️ INITIATING ${new Date().toLocaleTimeString()}] Fetching raw lead tables from Telesale CRM...`,
      `[PROCESSING] Correlating ${totalLeads} leads with UTM parameters & adset spend across channels...`,
      `[SUCCESS] Generated Automatic Reconcile Sheet: ${periodLabel} | Total Revenue: ${currentRevenue} Triệu VNĐ | CAC: ${cacCost}/đơn.`
    ]);
    setTimeout(() => {
      setIsRunningEngine(false);
    }, 1000);
  };

  return (
    <section id="interactive-dashboards" className="py-40 lg:py-56 relative z-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800 my-24 sm:my-36">
      {/* Ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container relative z-20 max-w-7xl">
        {/* Section Header with Massive Space */}
        <div className="text-center max-w-4xl mx-auto mb-24 sm:mb-32">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold uppercase tracking-widest mb-8 shadow-lg shadow-emerald-500/10">
            <FileSpreadsheet size={16} className="text-emerald-400 animate-pulse" />
            Lady House Automatic BI & Telesale Analytics Portal (@daotnworking-hub)
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8">
            Hệ Thống Báo Cáo & Quản Trị <span className="bg-gradient-to-r from-cyan-400 sm:via-emerald-400 to-teal-400 bg-clip-text text-transparent">Telesale - Ads Live</span>
          </h2>
          
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Hệ thống Dashboard được thiết lập khoảng cách siêu thông thoáng <strong className="text-cyan-300">("không gian để thở")</strong>, tổng hợp báo cáo đầy đủ <strong className="text-white font-bold">Ngân sách Ads, CTR, CPC, CTA, Lợi nhuận gộp, phễu Leads -&gt; SĐT -&gt; Lịch hẹn -&gt; Khách đến và AOV</strong> theo <strong className="text-white font-bold">Tuần / Tháng / Năm</strong>.
          </p>
        </div>

        {/* TIME PERIOD SELECTOR (TUẦN / THÁNG / NĂM) - WITH MASSIVE BOTTOM MARGIN MY-20 SO IT NEVER TOUCHES MODULE TABS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-12 rounded-3xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl mb-24 sm:mb-32">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
              <Calendar size={32} />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider block mb-1">Khung Thời Gian Thống Kê (Timeframe Filter):</span>
              <div className="text-2xl sm:text-3xl font-black text-white">{periodLabel}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setTimePeriod('week')}
              className={`flex-1 sm:flex-initial px-6 py-4 rounded-2xl text-sm sm:text-base font-black transition-all cursor-pointer z-20 ${
                timePeriod === 'week'
                  ? 'btn-neon-cyan shadow-xl shadow-cyan-500/30 scale-105'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-white'
              }`}
            >
              📅 Theo Tuần (Weekly)
            </button>
            <button
              type="button"
              onClick={() => setTimePeriod('month')}
              className={`flex-1 sm:flex-initial px-6 py-4 rounded-2xl text-sm sm:text-base font-black transition-all cursor-pointer z-20 ${
                timePeriod === 'month'
                  ? 'btn-neon-cyan shadow-xl shadow-cyan-500/30 scale-105'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-white'
              }`}
            >
              📅 Theo Tháng (Monthly)
            </button>
            <button
              type="button"
              onClick={() => setTimePeriod('year')}
              className={`flex-1 sm:flex-initial px-6 py-4 rounded-2xl text-sm sm:text-base font-black transition-all cursor-pointer z-20 ${
                timePeriod === 'year'
                  ? 'btn-neon-cyan shadow-xl shadow-cyan-500/30 scale-105'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-white'
              }`}
            >
              📅 Theo Năm (Yearly BI)
            </button>
          </div>
        </div>

        {/* REPORT MODULE SWITCHER TABS - WITH MASSIVE SPACE MB-24 sm:MB-36 SO IT NEVER OVERLAPS ACTIVE MODULE BOX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14 mb-24 sm:mb-36">
          <button
            type="button"
            onClick={() => setActiveModule('telesale')}
            className={`p-8 sm:p-12 rounded-3xl text-left transition-all cursor-pointer z-20 border shadow-2xl flex flex-col justify-between ${
              activeModule === 'telesale'
                ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-105 ring-2 ring-cyan-400/40'
                : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900/80'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs sm:text-sm font-mono font-extrabold px-4 py-2 rounded-full ${activeModule === 'telesale' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                  Module 1: Telesale BI
                </span>
                <Users size={30} className={activeModule === 'telesale' ? 'text-cyan-400' : 'text-slate-500'} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Báo Cáo Hiệu Suất & Training Telesale</h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Theo dõi chất lượng chốt đơn của từng nhóm Telesale, đánh giá CVR, phễu SĐT hợp lệ, lịch hẹn/khách đến và hiệu quả training.
              </p>
            </div>
            {activeModule === 'telesale' && (
              <div className="mt-8 pt-6 border-t border-slate-800 text-sm font-extrabold text-cyan-400 flex items-center gap-2">
                <span>● Đang xem số liệu trực tiếp bên dưới</span> <ArrowRight size={16} />
              </div>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveModule('ads-cost')}
            className={`p-8 sm:p-12 rounded-3xl text-left transition-all cursor-pointer z-20 border shadow-2xl flex flex-col justify-between ${
              activeModule === 'ads-cost'
                ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-pink-400 shadow-2xl shadow-pink-500/20 scale-105 ring-2 ring-pink-400/40'
                : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900/80'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs sm:text-sm font-mono font-extrabold px-4 py-2 rounded-full ${activeModule === 'ads-cost' ? 'bg-pink-500/20 text-pink-300 border border-pink-400' : 'bg-slate-800 text-slate-400'}`}>
                  Module 2: Ads Cost Reconcile
                </span>
                <BarChart3 size={30} className={activeModule === 'ads-cost' ? 'text-pink-400' : 'text-slate-500'} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Báo Cáo Chi Phí Ads & Đối Soát ROAS</h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Tổng hợp ngân sách chi tiêu, chỉ số CTR, CPC, CTA, số lượng leads thực tế từng kênh và tính toán Lợi nhuận gộp.
              </p>
            </div>
            {activeModule === 'ads-cost' && (
              <div className="mt-8 pt-6 border-t border-slate-800 text-sm font-extrabold text-pink-400 flex items-center gap-2">
                <span>● Đang xem số liệu trực tiếp bên dưới</span> <ArrowRight size={16} />
              </div>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveModule('automatic-bi')}
            className={`p-8 sm:p-12 rounded-3xl text-left transition-all cursor-pointer z-20 border shadow-2xl flex flex-col justify-between ${
              activeModule === 'automatic-bi'
                ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-emerald-400 shadow-2xl shadow-emerald-500/20 scale-105 ring-2 ring-emerald-400/40'
                : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900/80'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs sm:text-sm font-mono font-extrabold px-4 py-2 rounded-full ${activeModule === 'automatic-bi' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                  Module 3: Automatic Engine
                </span>
                <Database size={30} className={activeModule === 'automatic-bi' ? 'text-emerald-400' : 'text-slate-500'} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Mô Hình Automatic Reporting Engine</h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Quy trình tự động hóa xuất file Excel/BI, kết nối API trực tiếp từ nền tảng quảng cáo với CRM Telesale.
              </p>
            </div>
            {activeModule === 'automatic-bi' && (
              <div className="mt-8 pt-6 border-t border-slate-800 text-sm font-extrabold text-emerald-400 flex items-center gap-2">
                <span>● Đang xem số liệu trực tiếp bên dưới</span> <ArrowRight size={16} />
              </div>
            )}
          </button>
        </div>

        {/* =========================================================================
            ACTIVE MODULE PANEL (SUPER SPACIOUS CONTAINER WITH BREATHING ROOM)
        ========================================================================= */}
        {activeModule === 'telesale' && (
          <div className="glass-mirror rounded-3xl p-8 sm:p-16 lg:p-20 border border-cyan-500/50 shadow-2xl bg-slate-950/95 animate-fadeIn my-16">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 mb-14 border-b border-slate-800 gap-8">
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-3">
                  ● ACTIVE MODULE: TELESALE PERFORMANCE & OFFLINE CONVERSION FUNNEL ({periodLabel.toUpperCase()})
                </span>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  Phễu Chuyển Đổi Telesale & Tỷ Lệ Chốt Đơn
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold text-slate-300 mr-2">Lọc Nhóm Telesale:</span>
                <button
                  type="button"
                  onClick={() => setTelesaleTeamFilter('ALL')}
                  className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer z-20 ${
                    telesaleTeamFilter === 'ALL' ? 'btn-neon-cyan' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-400'
                  }`}
                >
                  Tất Cả Nhóm (All Teams)
                </button>
                <button
                  type="button"
                  onClick={() => setTelesaleTeamFilter('TEAM_A')}
                  className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer z-20 ${
                    telesaleTeamFilter === 'TEAM_A' ? 'btn-neon-cyan' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-400'
                  }`}
                >
                  Nhóm Senior
                </button>
                <button
                  type="button"
                  onClick={() => setTelesaleTeamFilter('TEAM_B')}
                  className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer z-20 ${
                    telesaleTeamFilter === 'TEAM_B' ? 'btn-neon-cyan' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-400'
                  }`}
                >
                  Nhóm Junior
                </button>
              </div>
            </div>

            {/* KPI Summary Boxes With Funnel Metrics (Leads -> SĐT -> Lịch hẹn -> Đơn chốt -> AOV) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-16">
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">1. Tổng Leads Phân Bổ</span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono mb-2">{totalLeads} <span className="text-sm font-normal text-slate-400">Leads</span></div>
                <span className="text-xs text-cyan-400 font-semibold block">● Data thô đa kênh</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">2. SĐT Hợp Lệ / Kết Nối</span>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono mb-2">{validPhones} <span className="text-sm font-normal text-slate-400">SĐT</span></div>
                <span className="text-xs text-cyan-400 font-semibold block">● Tỷ lệ nghe máy 91.6%</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">3. Lịch Hẹn / Khách Đến</span>
                <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono mb-2">{bookingsShowUp} <span className="text-sm font-normal text-slate-400">Khách</span></div>
                <span className="text-xs text-purple-300 font-semibold block">🔥 Tỷ lệ Show-up 81.0%</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">4. Đơn Chốt Thành Công</span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mb-2">{closedDeals} <span className="text-sm font-normal text-slate-400">Đơn</span></div>
                <span className="text-xs text-emerald-400 font-semibold block">✔ CVR trung bình {avgCvr}</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">5. Giá Trị Đơn Trung Bình (AOV)</span>
                <div className="text-2xl sm:text-3xl font-black text-pink-400 font-mono mb-2">{aovValue}</div>
                <span className="text-xs text-pink-300 font-semibold block">🔥 Tối ưu combo dịch vụ</span>
              </div>
            </div>

            {/* Telesale Teams Table With Generous Spacing */}
            <div className="bg-slate-900/60 rounded-3xl p-8 sm:p-12 border border-slate-800/80 overflow-x-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
                <h4 className="text-2xl font-extrabold text-white flex items-center gap-3.5">
                  <PhoneCall size={28} className="text-cyan-400" /> Bảng Phân Tích Phễu Chốt Đơn & Hiệu Suất Từng Nhóm Telesale
                </h4>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30 font-bold">
                  ● TRAINING KỊCH BẢN CHỐT ĐƠN: HOÀN TẤT
                </span>
              </div>

              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    <th className="py-6 px-5">Tên Nhóm Telesale & Vai Trò</th>
                    <th className="py-6 px-5">Nhân Sự / Lượt Gọi</th>
                    <th className="py-6 px-5">Leads Nhận</th>
                    <th className="py-6 px-5">SĐT Hợp Lệ</th>
                    <th className="py-6 px-5">Lịch Hẹn/Show-up</th>
                    <th className="py-6 px-5">Đơn Chốt</th>
                    <th className="py-6 px-5">CVR / AOV</th>
                    <th className="py-6 px-5">Doanh Thu Thu Về</th>
                    <th className="py-6 px-5">Đánh Giá</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-base">
                  {filteredTeams.map((team, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/90 transition-colors">
                      <td className="py-7 px-5 font-extrabold text-white flex items-center gap-3">
                        <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 shrink-0"></span>
                        <div>
                          <div>{team.name}</div>
                          <div className="text-xs font-normal text-slate-400 mt-1">{team.members} Người ({team.callsDay} cuộc/ngày)</div>
                        </div>
                      </td>
                      <td className="py-7 px-5 font-mono font-bold text-slate-300">{team.callsDay * team.members} Cuộc/ngày</td>
                      <td className="py-7 px-5 font-mono font-bold text-cyan-300 text-lg">{team.leadsAssigned}</td>
                      <td className="py-7 px-5 font-mono font-bold text-slate-300 text-lg">{team.validPhones}</td>
                      <td className="py-7 px-5 font-mono font-bold text-purple-400 text-lg">{team.showUpBookings}</td>
                      <td className="py-7 px-5 font-mono font-extrabold text-emerald-400 text-xl">{team.closed}</td>
                      <td className="py-7 px-5 font-mono font-bold text-pink-400">
                        <div className="text-base font-extrabold">{team.cvr}</div>
                        <div className="text-xs text-slate-400">{team.aov}</div>
                      </td>
                      <td className="py-7 px-5 font-mono font-extrabold text-emerald-400 text-xl">{team.revenue}</td>
                      <td className="py-7 px-5">
                        <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-4 py-2 rounded-xl border border-emerald-500/40 flex items-center gap-2 w-max">
                          <CheckCircle2 size={16} /> {team.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            MODULE 2: ADS COST & ROAS MULTI-CHANNEL RECONCILE (SPEND, REVENUE, PROFIT, CTR, CPC, CTA)
        ========================================================================= */}
        {activeModule === 'ads-cost' && (
          <div className="glass-mirror rounded-3xl p-8 sm:p-16 lg:p-20 border border-pink-500/50 shadow-2xl bg-slate-950/95 animate-fadeIn my-16">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 mb-14 border-b border-slate-800 gap-8">
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-pink-400 block mb-3">
                  ● ACTIVE MODULE: MULTI-CHANNEL SPEND, PROFIT & AD METRICS RECONCILIATION ({periodLabel.toUpperCase()})
                </span>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  Ngân Sách, Lợi Nhuận & Chỉ Số Ads (CTR, CPC, CTA)
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBoostPercentage(prev => prev + 15)}
                  className="btn-neon-cyan px-6 py-4 rounded-2xl text-sm font-extrabold flex items-center gap-2.5 shadow-xl cursor-pointer z-20"
                >
                  <Zap size={18} /> Mô Phỏng Boost Ngân Sách (+15 Tr)
                </button>
                {boostPercentage > 0 && (
                  <button
                    type="button"
                    onClick={() => setBoostPercentage(0)}
                    className="px-5 py-4 rounded-2xl text-sm font-bold bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30 transition-all cursor-pointer z-20"
                  >
                    Reset Ngân Sách
                  </button>
                )}
              </div>
            </div>

            {/* Cost Breakdown & Profit Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-16">
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Ngân Sách Chi Tiêu (Spend)</span>
                <div className="text-3xl sm:text-4xl font-black text-pink-400 font-mono mb-2">{currentSpend} <span className="text-sm font-bold text-slate-300">Triệu</span></div>
                <span className="text-xs text-pink-300 font-semibold block">● Đa kênh TikTok/FB/GG</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Doanh Thu Thu Về (Revenue)</span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mb-2">{currentRevenue} <span className="text-sm font-bold text-slate-300">Triệu</span></div>
                <span className="text-xs text-emerald-400 font-semibold block">✔ Đối soát khớp lệnh CRM</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Lợi Nhuận Gộp (Gross Profit)</span>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono mb-2">{grossProfit} <span className="text-sm font-bold text-slate-300">Triệu</span></div>
                <span className="text-xs text-cyan-300 font-semibold block">🔥 Lợi nhuận sau chi phí Ads/COGS</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">ROAS Chiến Dịch</span>
                <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono mb-2">{currentRoas}x</div>
                <span className="text-xs text-purple-300 font-semibold block">🔥 Đạt chuẩn scale 3.33x+</span>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Chỉ Số CTR / CPC Trung Bình</span>
                <div className="text-2xl sm:text-3xl font-black text-orange-400 font-mono mb-2">4.85% / 2,450đ</div>
                <span className="text-xs text-orange-300 font-semibold block">✔ Hook 3s tối ưu nhấp chuột</span>
              </div>
            </div>

            {/* Channels Breakdown Table With CTR, CPC, CTA columns */}
            <div className="bg-slate-900/60 rounded-3xl p-8 sm:p-12 border border-slate-800/80 overflow-x-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
                <h4 className="text-2xl font-extrabold text-white flex items-center gap-3.5">
                  <Activity size={28} className="text-pink-400" /> Bảng Phân Bổ Ngân Sách & Chỉ Số Chi Tiết Từng Kênh ({periodLabel})
                </h4>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30 font-bold">
                  ● CAPI SERVER-SIDE TRACKING ACTIVE
                </span>
              </div>

              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    <th className="py-6 px-5">Kênh Quảng Cáo (Platform & Funnel)</th>
                    <th className="py-6 px-5">Ngân Sách ({periodLabel})</th>
                    <th className="py-6 px-5">CTR (Tỷ Lệ Nhấp)</th>
                    <th className="py-6 px-5">CPC (Chi Phí/Click)</th>
                    <th className="py-6 px-5">CTA / Form CVR</th>
                    <th className="py-6 px-5">Số Leads Mang Về</th>
                    <th className="py-6 px-5">Doanh Thu ({periodLabel})</th>
                    <th className="py-6 px-5">ROAS</th>
                    <th className="py-6 px-5">Trạng Thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-base">
                  {channels.map((c, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/90 transition-colors">
                      <td className="py-7 px-5 font-extrabold text-white flex items-center gap-3">
                        <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${c.color === 'cyan' ? 'bg-cyan-400' : c.color === 'pink' ? 'bg-pink-400' : 'bg-orange-400'}`}></span>
                        <div>
                          <div>{c.name}</div>
                          <div className="text-xs font-normal text-slate-400 mt-1">Phân bổ {c.allocation} ngân sách</div>
                        </div>
                      </td>
                      <td className="py-7 px-5 font-mono font-bold text-cyan-300 text-xl">{c.spend} Tr</td>
                      <td className="py-7 px-5 font-mono font-extrabold text-emerald-400 text-lg">{c.ctr}</td>
                      <td className="py-7 px-5 font-mono font-bold text-slate-300 text-lg">{c.cpc}</td>
                      <td className="py-7 px-5 font-mono font-extrabold text-purple-400 text-lg">{c.ctaCvr}</td>
                      <td className="py-7 px-5 font-mono font-extrabold text-cyan-300 text-xl">{c.leads}</td>
                      <td className="py-7 px-5 font-mono font-extrabold text-emerald-400 text-xl">{c.revenue} Tr</td>
                      <td className="py-7 px-5">
                        <span className="px-4 py-2 rounded-xl bg-pink-500/20 border border-pink-500/40 font-mono font-extrabold text-pink-300 text-base">
                          {c.roas}
                        </span>
                      </td>
                      <td className="py-7 px-5">
                        <span className="text-xs font-bold text-emerald-300 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            MODULE 3: AUTOMATIC REPORTING & RECONCILIATION ENGINE
        ========================================================================= */}
        {activeModule === 'automatic-bi' && (
          <div className="glass-mirror rounded-3xl p-8 sm:p-16 lg:p-20 border border-emerald-500/50 shadow-2xl bg-slate-950/95 animate-fadeIn my-16">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 mb-14 border-b border-slate-800 gap-8">
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-3">
                  ● ACTIVE MODULE: AUTOMATIC BI REPORTING ENGINE & EXCEL MACROS ({periodLabel.toUpperCase()})
                </span>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  Mô Hình Automatic Reporting & Xuất Báo Cáo Kinh Doanh
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleRunAutomaticEngine}
                  disabled={isRunningEngine}
                  className="btn-neon-cyan px-8 py-4 rounded-2xl text-sm font-extrabold flex items-center gap-3 shadow-xl cursor-pointer z-20"
                >
                  <Play size={18} className={isRunningEngine ? 'animate-spin text-slate-950' : ''} />
                  {isRunningEngine ? 'Đang Chạy Pipeline Khớp Lệnh...' : '⚡ Kích Hoạt Khớp Lệnh Automatic BI'}
                </button>
              </div>
            </div>

            {/* Architecture Explanation Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-lg">
                <div className="flex items-center gap-3 text-cyan-400 font-extrabold text-xl mb-4">
                  <Database size={26} /> 1. Thu Thập Dữ Liệu Tự Động
                </div>
                <p className="text-base text-slate-300 font-light leading-relaxed">
                  Tự động đồng bộ tín hiệu CAPI từ Facebook & TikTok Ads qua webhook, ghi nhận chính xác ID đơn hàng và UTM Campaign.
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-lg">
                <div className="flex items-center gap-3 text-emerald-400 font-extrabold text-xl mb-4">
                  <RefreshCw size={26} /> 2. Khớp Lệnh Telesale CRM
                </div>
                <p className="text-base text-slate-300 font-light leading-relaxed">
                  Đoạn script/macro tự động đối soát trạng thái đơn hàng trên Telesale CRM (Chốt đơn / Hủy / Đang xử lý) với chi phí quảng cáo.
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-lg">
                <div className="flex items-center gap-3 text-pink-400 font-extrabold text-xl mb-4">
                  <FileSpreadsheet size={26} /> 3. Xuất Báo Cáo BI Tuần/Tháng/Năm
                </div>
                <p className="text-base text-slate-300 font-light leading-relaxed">
                  Tự động xuất bảng tổng hợp chỉ số CAC, ROAS và Lợi nhuận gộp theo từng khoảng thời gian cho Ban Giám Đốc mà không tốn công thủ công.
                </p>
              </div>
            </div>

            {/* Live Terminal & Pipeline Log Output */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 font-mono text-sm text-slate-300 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 text-emerald-400 font-bold">
                <span>// LIVE AUTOMATIC BI ENGINE PIPELINE OUTPUT (@daotnworking-hub)</span>
                <span className="text-xs bg-emerald-500/20 px-3.5 py-1.5 rounded">STATUS: RUNNING CRON SCHEDULE</span>
              </div>
              
              <div className="space-y-3.5 max-h-80 overflow-y-auto pr-4">
                {engineLogs.map((log, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border text-base ${
                    log.includes('[SUCCESS]') || log.includes('[RECONCILE]') ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-semibold' :
                    log.includes('[▶️ INITIATING') || log.includes('[AUTO-BI') ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 font-semibold' :
                    'bg-slate-900/70 border-slate-800 text-slate-300'
                  }`}>
                    <span className="text-slate-500 mr-3">&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
