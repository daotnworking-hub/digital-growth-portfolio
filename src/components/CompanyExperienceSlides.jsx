import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  FileSpreadsheet, 
  Target, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Layers,
  Database,
  BarChart3,
  Video,
  Edit3,
  Globe,
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  DollarSign,
  Activity
} from 'lucide-react';

export default function CompanyExperienceSlides() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const companies = [
    {
      id: 'ladyhouse',
      name: 'CÔNG TY TNHH LADY HOUSE',
      role: 'DIGITAL MARKETING SPECIALIST & DATA ANALYTIC',
      period: '09/2024 - NOW',
      badge: 'Trọng Tâm & Quản Trị Toàn Diện',
      badgeColor: 'cyan',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      description: 'Chịu trách nhiệm toàn diện điều phối hệ thống quảng cáo đa kênh (150 Tr -> 500 Tr/tháng), kiêm nhiệm Data Analytics, tự động hóa hệ thống báo cáo kinh doanh và trực tiếp quản trị & training đội ngũ Telesale.',
      categories: [
        {
          title: 'Quản Trị & Training Đội Ngũ Telesale Chuyên Sâu',
          icon: <Users className="text-cyan-400" size={26} />,
          items: [
            'Trực tiếp quản trị đội ngũ Telesale, xây dựng và chuẩn hóa kịch bản tư vấn chốt đơn cho từng dịch vụ/thẻ liệu trình.',
            'Đào tạo (Training) định kỳ kỹ năng xử lý từ chối, nâng cao chất lượng cuộc gọi và tối ưu tỷ lệ chuyển đổi (CVR >68.5%).',
            'Đánh giá hiệu suất cá nhân Telesale, phân bổ lead tự động theo điểm hiệu suất (Lead Scoring) và theo dõi sát sao phễu khách hàng.'
          ]
        },
        {
          title: 'Quản Trị Ngân Sách & Chỉ Số Ads (CTR, CPC, CTA)',
          icon: <Target className="text-pink-400" size={26} />,
          items: [
            'Trực tiếp quản lý và scale ngân sách 150 Triệu VNĐ/tháng trên TikTok Ads, Facebook Ads, Google Ads đạt ROAS ~3.33x+.',
            'Theo dõi và tối ưu các chỉ số cốt lõi: Tỷ lệ nhấp chuột CTR (đạt 4.85% trên TikTok, 3.20% trên FB), chi phí nhấp chuột CPC thấp (~2,450đ/click).',
            'Tối ưu chỉ số hành động chuyển đổi (CTA / Form Submit CVR đạt 18.5%), áp dụng Conversion API (CAPI) tinh chỉnh phễu TOFU -> BOFU.'
          ]
        },
        {
          title: 'Phễu Chuyển Đổi Offline & Hệ Thống Báo Cáo Automatic BI',
          icon: <FileSpreadsheet className="text-emerald-400" size={26} />,
          items: [
            'Kiểm soát toàn diện phễu chuyển đổi Offline: 420 Leads/tháng -> 385 SĐT hợp lệ (91.6%) -> 312 Lịch hẹn / Khách đến trải nghiệm (81.0%).',
            'Tối ưu Giá trị đơn hàng trung bình (AOV - Average Order Value) đạt 1,736,000 VNĐ / Đơn nhờ chiến lược upsell và combo gói.',
            'Xây dựng mô hình automatic tổng hợp file thống kê theo Tuần / Tháng / Năm, đối soát chi phí Ads với CRM không thất thoát 1 đồng.'
          ]
        }
      ]
    },
    {
      id: 'vmge',
      name: 'CÔNG TY TNHH VMGE',
      role: 'GAME CONTENT SOCIAL SPECIALIST',
      period: '06/2023 - 05/2024',
      badge: 'Media & Game Marketing',
      badgeColor: 'emerald',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      description: 'Chuyên gia sáng tạo nội dung truyền thông xã hội và quản trị đa kênh cho các tựa game nổi bật tại thị trường Việt Nam (Siêu Rồng Thần Huyền Thoại, Hội Quán Đấu Sĩ) và thị trường Đông Nam Á - SEA (Pirate Legends, Epic Pirate Adventure).',
      categories: [
        {
          title: 'Sản Xuất Nội Dung Đa Phương Tiện & Video Short',
          icon: <Video className="text-emerald-400" size={26} />,
          items: [
            'Tự tay cắt ghép, chỉnh sửa và sản xuất hàng trăm video short bắt trend trên TikTok, YouTube Shorts và Facebook Reels.',
            'Sử dụng thành thạo Adobe Photoshop (PTS) để thiết kế banner sự kiện, hình ảnh truyền thông hấp dẫn tối ưu theo thị hiếu game thủ.',
            'Tạo các hook 3 giây đầu mạnh mẽ giúp giữ chân người xem và gia tăng tỷ lệ tải game (CTR & CVR cao).'
          ]
        },
        {
          title: 'Phân Tích Dữ Liệu Lượt Xem & Nhân Khẩu Học',
          icon: <BarChart3 className="text-cyan-400" size={26} />,
          items: [
            'Nghiên cứu chuyên sâu dữ liệu nhân khẩu học, độ tuổi và sở thích của tệp người chơi game thị trường VN & SEA.',
            'Đánh giá sâu các chỉ số lượt xem (Views), tương tác (Engagement) và phản hồi để điều hướng hướng phát triển nội dung phù hợp.',
            'Đóng vai trò cầu nối hiệu quả giữa cộng đồng người chơi (Gamers) và nhóm phát triển (Dev) để cải thiện trải nghiệm sản phẩm.'
          ]
        }
      ]
    },
    {
      id: 'acaci',
      name: 'ACACI LABS',
      role: 'CONTENT WRITER',
      period: '04/2023 - 06/2023',
      badge: 'Copywriting & Campaign Strategy',
      badgeColor: 'purple',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
      description: 'Phụ trách sáng tạo và biên tập nội dung chính cho trang Facebook chính thức của Acaci Labs Vietnam, phối hợp chặt chẽ với bộ phận Marketing để thúc đẩy các chiến dịch chuyển đổi.',
      categories: [
        {
          title: 'Sáng Tạo & Biên Tập Nội Dung Chuyên Sâu',
          icon: <Edit3 className="text-purple-400" size={26} />,
          items: [
            'Viết bài chuẩn SEO và xây dựng nội dung logic cho các chiến dịch quảng cáo và thương hiệu Acaci Labs Vietnam.',
            'Phối hợp nhịp nhàng với bộ phận Paid Ads để sản xuất các mẫu quảng cáo (Ad copy) tối ưu tỷ lệ nhấp chuột.',
            'Lập kế hoạch nội dung theo tháng (Monthly Content Calendar) đảm bảo tính nhất quán của nhận diện thương hiệu.'
          ]
        }
      ]
    },
    {
      id: 'wiimob',
      name: 'WIIMOB STUDIO',
      role: 'CONTENT CREATOR & MEDIA SPECIALIST',
      period: '10/2022 - 03/2023',
      badge: 'Bilingual Media & KOL Booking',
      badgeColor: 'pink',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
      description: 'Chuyên viên truyền thông song ngữ Anh - Việt cho hệ sinh thái DotArcade NFT Game, trực tiếp sản xuất video và liên hệ booking KOLs/KOCs lan tỏa thương hiệu.',
      categories: [
        {
          title: 'Biên Tập Song Ngữ & Quản Trị Cộng Đồng Đa Kênh',
          icon: <Globe className="text-pink-400" size={26} />,
          items: [
            'Sử dụng TOEIC 635 thành thạo viết nội dung đa kênh (Facebook, Twitter, Telegram) bằng cả Tiếng Anh và Tiếng Việt cho hệ sinh thái game toàn cầu.',
            'Chỉnh sửa và sản xuất video chất lượng cao trên YouTube và TikTok (@DotArcadeNFTGame/videos) bằng CapCut và Adobe Premiere.',
            'Trực tiếp liên hệ, đàm phán và booking người nổi tiếng (KOLs/KOCs TikToker) để triển khai chiến dịch quảng cáo & seeding thương hiệu.'
          ]
        }
      ]
    }
  ];

  const currentCompany = companies[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? companies.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" className="py-40 sm:py-56 relative z-10 bg-slate-950 border-y border-slate-800 my-20 sm:my-32">
      {/* Decorative lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container relative z-10 max-w-7xl">
        {/* Section Header with massive breathing space */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-extrabold uppercase tracking-widest mb-8 shadow-lg shadow-cyan-500/10">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            Timeline Quản Trị & Slide Hành Trình Sự Nghiệp
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8">
            Quá Trình Làm Việc & <span className="bg-gradient-to-r from-cyan-400 sm:via-purple-400 to-pink-500 bg-clip-text text-transparent">Kinh Nghiệm Thực Chiến</span>
          </h2>
          
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Trình bày rõ ràng từng giai đoạn công việc, phân tích sâu về <strong className="text-cyan-400">Ngân sách Ads, CTR, CPC, CTA, số lượng Leads, SĐT, Lịch hẹn/Khách đến</strong> và <strong className="text-pink-400">Giá trị đơn hàng trung bình (AOV)</strong>.
          </p>
        </div>

        {/* SLIDE NAVIGATION BAR WITH PREV/NEXT ARROWS AND INDICATORS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 sm:mb-16 p-6 sm:p-10 rounded-3xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl">
          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm font-mono font-black px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400">
              SLIDE {currentSlideIndex + 1} / {companies.length}
            </span>
            <span className="text-xl sm:text-3xl font-black text-white">
              {currentCompany.name}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            {/* Prev Button */}
            <button
              onClick={handlePrevSlide}
              className="flex-1 sm:flex-initial px-6 sm:px-8 py-4 rounded-2xl bg-slate-950 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-white transition-all flex items-center justify-center gap-2.5 font-extrabold text-sm sm:text-base shadow-lg hover:scale-105 cursor-pointer z-20 whitespace-nowrap"
            >
              <ArrowLeft size={20} className="text-cyan-400 shrink-0" /> Slide Trước
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextSlide}
              className="flex-1 sm:flex-initial px-6 sm:px-8 py-4 rounded-2xl btn-neon-cyan flex items-center justify-center gap-2.5 font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 cursor-pointer z-20 whitespace-nowrap"
            >
              Slide Tiếp Theo <ArrowRight size={20} className="shrink-0" />
            </button>
          </div>
        </div>

        {/* FL v3: PAGINATION DOTS WITH ZIGZAG TIMELINE AXIS
            Per spec: dots glow --fl-fire-2 at rest, flare --fl-bolt-1 when active
            Axis is a horizontal zigzag (mini-lightning) instead of straight line */}
        <div className="relative mb-16 sm:mb-24 overflow-visible px-4 sm:px-0">
          {/* Horizontal zigzag SVG connecting the 4 company milestone dots */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none px-12 sm:px-20 hidden sm:block" style={{zIndex:0}}>
            <svg width="100%" height="32" viewBox="0 0 800 32" preserveAspectRatio="none" style={{overflow:'visible'}}>
              <defs>
                <linearGradient id="zz-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"    stopColor="#FFB020" stopOpacity="0.9" />
                  <stop offset="50%"   stopColor="#FF5A1F" stopOpacity="0.6" />
                  <stop offset="100%"  stopColor="#7CF5FF" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Zigzag path: horizontal, crosses 3 gaps between 4 dots */}
              <polyline
                points="0,16 60,6 120,26 180,6 240,26 320,16 380,6 440,26 500,6 560,26 620,16 680,6 740,26 800,16"
                fill="none"
                stroke="url(#zz-grad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{filter:'drop-shadow(0 0 4px #FFB020) drop-shadow(0 0 8px #7CF5FF)'}}
              />
            </svg>
          </div>

          {/* Company tab buttons with milestone dots */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 relative" style={{zIndex:1}}>
            {companies.map((company, index) => (
              <button
                key={company.id}
                onClick={() => setCurrentSlideIndex(index)}
                className={`p-6 sm:p-8 rounded-3xl text-left transition-all border relative overflow-hidden flex flex-col justify-between cursor-pointer z-20 ${
                  currentSlideIndex === index
                    ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-105 ring-2 ring-cyan-400/40'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 text-slate-400'
                }`}
              >
                {/* FL v3: Timeline dot — fire-2 at rest, flares to bolt-1 when active */}
                <div
                  className="w-4 h-4 rounded-full mx-auto mb-4 transition-all duration-500"
                  style={{
                    background: currentSlideIndex === index ? 'var(--fl-bolt-1, #7CF5FF)' : 'var(--fl-fire-2, #FFB020)',
                    boxShadow: currentSlideIndex === index
                      ? '0 0 12px var(--fl-bolt-1, #7CF5FF), 0 0 24px var(--fl-bolt-1, #7CF5FF)'
                      : '0 0 6px var(--fl-fire-2, #FFB020)',
                  }}
                  aria-hidden="true"
                ></div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-extrabold px-3 py-1.5 rounded-xl ${
                    currentSlideIndex === index
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {company.period}
                  </span>
                  {company.id === 'ladyhouse' && (
                    <span className="text-[11px] bg-gradient-to-r from-cyan-500 to-pink-500 text-slate-950 font-black px-2.5 py-0.5 rounded animate-pulse">
                      TRỌNG TÂM
                    </span>
                  )}
                </div>

                <div>
                  <div className={`text-lg sm:text-xl font-black tracking-tight mb-2 ${
                    currentSlideIndex === index ? 'text-white' : 'text-slate-300'
                  }`}>
                    {company.name}
                  </div>
                  <div className="text-xs font-medium text-slate-400 line-clamp-1">
                    {company.role}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>


        {/* SELECTED COMPANY SHOWCASE SLIDE CONTAINER (MASSIVE BREATHING ROOM) */}
        <div key={currentCompany.id} className="glass-mirror rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950/95 animate-fadeIn">
          {/* Top Banner & Header Info */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden border-b border-slate-800">
            <img 
              src={currentCompany.image} 
              alt={currentCompany.name} 
              className="w-full h-full object-cover filter brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

            <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 right-8 sm:right-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs font-mono font-extrabold px-3.5 py-1.5 rounded-full border ${
                    currentCompany.badgeColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400' :
                    currentCompany.badgeColor === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400' :
                    currentCompany.badgeColor === 'purple' ? 'bg-purple-500/20 text-purple-300 border-purple-400' :
                    'bg-pink-500/20 text-pink-300 border-pink-400'
                  }`}>
                    {currentCompany.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2 bg-slate-900/90 px-4 py-1.5 rounded-full border border-slate-700">
                    <Calendar size={14} className="text-cyan-400" /> {currentCompany.period}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                  {currentCompany.name}
                </h3>
                <div className="text-lg sm:text-2xl font-bold text-cyan-400 mt-3 flex items-center gap-2.5">
                  <Briefcase size={22} /> {currentCompany.role}
                </div>
              </div>

              <div className="text-right hidden md:block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Môi Trường Làm Việc</span>
                <span className="text-2xl font-black font-mono text-emerald-400">100% Thực Chiến & KPI</span>
              </div>
            </div>
          </div>

          {/* Detailed Job Description & Responsibilities Categories With Massive Space */}
          <div className="p-8 sm:p-14 lg:p-20">
            <p className="text-slate-300 text-lg sm:text-2xl font-light leading-relaxed mb-16 pb-12 border-b border-slate-800/80 max-w-5xl">
              {currentCompany.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-14">
              {currentCompany.categories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/60 transition-all flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800">
                      <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                        {cat.icon}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                        {cat.title}
                      </h4>
                    </div>

                    <ul className="space-y-6">
                      {cat.items.map((point, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                          <CheckCircle2 size={22} className="text-cyan-400 shrink-0 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentCompany.id === 'ladyhouse' && idx === 1 && (
                    <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-sm font-bold text-emerald-400">
                      <span>⚡ Khám phá Dashboard Báo Cáo ngay bên dưới</span>
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Slide Switcher Helper Inside Slide (BULLETPROOF WRAP WITHOUT CUTTING OFF) */}
            <div className="mt-20 pt-14 border-t border-slate-800 flex flex-wrap items-center justify-between gap-6">
              <button
                onClick={handlePrevSlide}
                className="px-8 py-5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-white transition-all flex items-center justify-center gap-3 font-extrabold text-base sm:text-lg shadow-xl cursor-pointer z-20 w-full sm:w-auto whitespace-nowrap"
              >
                <ArrowLeft size={22} className="text-cyan-400 shrink-0" /> Xem Công Ty Trước
              </button>
              
              <span className="text-base sm:text-lg font-bold text-slate-400 text-center w-full sm:w-auto py-2">
                ● Đang xem <strong className="text-white">{currentCompany.name}</strong> ({currentSlideIndex + 1} / {companies.length})
              </span>

              <button
                onClick={handleNextSlide}
                className="px-8 py-5 rounded-2xl btn-neon-cyan flex items-center justify-center gap-3 font-extrabold text-base sm:text-lg shadow-xl hover:scale-105 cursor-pointer z-20 w-full sm:w-auto whitespace-nowrap"
              >
                Xem Công Ty Tiếp Theo <ArrowRight size={22} className="shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
