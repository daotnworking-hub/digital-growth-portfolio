import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  DollarSign, 
  Zap, 
  ShieldCheck, 
  Users, 
  Layers, 
  ArrowRight, 
  Mail, 
  Phone, 
  Filter, 
  CheckCircle2, 
  Sliders, 
  Database, 
  Share2, 
  PieChart, 
  Award, 
  Calendar, 
  Briefcase, 
  Video, 
  Globe, 
  Sparkles, 
  FileSpreadsheet,
  Flame,
  Eye,
  X,
  ExternalLink,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Send,
  Loader2
} from 'lucide-react';
import InteractiveDashboardsShowcase from './components/InteractiveDashboardsShowcase';
import CompanyExperienceSlides from './components/CompanyExperienceSlides';
import FractureLineSVG from './components/FractureLineSVG';

// Custom SVG Icons
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// CountUp Component — FL v3: JetBrains Mono + jolt animation on land + gradient underline
const CountUp = ({ end, decimals = 0, suffix = "", prefix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [jolted, setJolted] = useState(false); // FL v3: jolt state
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTime = null;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          setCount(easeProgress * end);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
            // FL v3: trigger jolt ("dòng điện giật") when number lands
            setJolted(true);
            setTimeout(() => setJolted(false), 380);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    // FL v3: inline-block so gradient underline fills exact number width
    <span ref={ref} className="inline-block">
      {/* JetBrains Mono + ember gold color + jolt class */}
      <span className={`fl-mono font-extrabold tracking-tight${jolted ? ' fl-jolt-active' : ''}`}>
        {prefix}{count.toFixed(decimals)}{suffix}
      </span>
      {/* Gradient underline: fire-1 → bolt-1 */}
      <span className="fl-stat-underline" aria-hidden="true"></span>
    </span>
  );
};

// HTML5 Canvas Fire & Lightning Particle Background
const MaximalistCanvas = ({ enabled }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Fire & Neon Particles
    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedY: -(Math.random() * 1.8 + 0.5),
      speedX: (Math.random() - 0.5) * 1.2,
      color: ['#00f0ff', '#ff007f', '#a855f7', '#ff8c00'][Math.floor(Math.random() * 4)],
      alpha: Math.random() * 0.8 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01
    }));

    // Occasional Lightning flashes
    let lightningTimer = 0;
    let lightningFlash = false;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lightning flash
      lightningTimer++;
      if (lightningTimer > 300 && Math.random() < 0.03) {
        lightningFlash = true;
        lightningTimer = 0;
      }
      if (lightningFlash) {
        ctx.fillStyle = 'rgba(0, 240, 255, 0.08)';
        ctx.fillRect(0, 0, width, height);
        // Draw lightning bolt across top/center
        ctx.beginPath();
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#00f0ff';
        let lx = Math.random() * width * 0.3;
        let ly = 0;
        ctx.moveTo(lx, ly);
        while (ly < height * 0.7) {
          lx += (Math.random() - 0.5) * 150;
          ly += Math.random() * 80 + 20;
          ctx.lineTo(lx, ly);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
        lightningFlash = false;
      }

      // Draw floating fire/neon particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(lightningTimer * p.pulseSpeed) * 0.02;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-1" style={{ opacity: 0.85 }} />;
};

// 3D Tilt Card Component for Skills & Projects
const TiltCard = ({ children, className = "", tiltStrength = 12 }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * tiltStrength;
    const rotateY = (x / (rect.width / 2)) * tiltStrength;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      style={style} 
      className={`glass-mirror fl-card ${className}`}
    >
      {children}
    </div>
  );
};

function App() {
  const [fxEnabled, setFxEnabled] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('info'); // 'info' | 'simulation' | 'code'
  const [activeFilter, setActiveFilter] = useState('All');

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error

  // ROAS Simulator State
  const [adSpend, setAdSpend] = useState(150); // 150 Triệu VNĐ
  const [roasBenchmark, setRoasBenchmark] = useState(3.33);
  const [avgOrderValue, setAvgOrderValue] = useState(0.5); // 500k VNĐ

  const projectedRevenue = Math.round(adSpend * roasBenchmark);
  const estimatedOrders = Math.round(projectedRevenue / avgOrderValue);
  const estimatedCAC = Math.round((adSpend * 1000) / estimatedOrders);
  const estimatedProfit = Math.round(projectedRevenue * 0.45 - adSpend);

  // FL v3: Nav active section — tracks which section is centered in viewport
  const [activeSection, setActiveSection] = useState('about');
  useEffect(() => {
    const sectionIds = ['about','stats','skills','experience','interactive-dashboards','projects','simulator','contact'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-5% 0px -65% 0px' }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // FL v3: Scroll-reveal — watches .fl-reveal elements and adds .fl-visible on entry
  useEffect(() => {
    const els = document.querySelectorAll('.fl-reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fl-visible');
            io.unobserve(entry.target); // reveal once
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Projects & Case Studies (MAXIMALIST SHOWCASE)
  const caseStudies = [
    {
      id: 1,
      title: "Quản Trị Ngân Sách 150Tr/Tháng → Doanh Thu 500Tr/Tháng",
      category: "Paid Ads Scaling",
      roas: "3.33x+ ROAS",
      metrics: "Công Ty TNHH Lady House (09/2024 - NOW)",
      description: "Thực hiện triển khai và tối ưu hóa chiến dịch quảng cáo đa nền tảng (TikTok Ads, Facebook Ads, Google Ads). Xây dựng quy trình đối soát số liệu trực tiếp với đội ngũ Telesale, lập báo cáo phân tích hiệu suất hằng ngày/tuần nhằm giữ vững ROAS trong bối cảnh cạnh tranh khốc liệt.",
      detailedSolutions: [
        "Thiết lập cấu trúc cam phân lớp TOFU (Cold Audience) -> MOFU -> BOFU (Dynamic Retargeting).",
        "Tích hợp Conversion API (CAPI) để khắc phục tình trạng mất signal chuyển đổi.",
        "Kết nối hằng ngày với Telesale để phân tích lý do lead rớt và điều chỉnh target Angle quảng cáo ngay lập tức."
      ],
      tags: ["Facebook Ads", "TikTok Ads", "Google Ads", "Telesale Sync", "ROAS Scaling"],
      badgeColor: "cyan",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Sản Xuất Media & Banner Cho Game Thị Trường VN & SEA",
      category: "Social Media & Gaming",
      roas: "High Engagement",
      metrics: "Công Ty TNHH VMGE (06/2023 - 05/2024)",
      description: "Sản xuất nội dung, chỉnh sửa video ngắn và thiết kế banner bằng Adobe Photoshop cho các tựa game nổi tiếng: Siêu Rồng Thần Huyền Thoại, Hội Quán Đấu Sĩ (VN) và Pirate Legends, Epic Pirate Adventure (SEA). Nghiên cứu nhân khẩu học người chơi để tối ưu hóa tỷ lệ CTR và tương tác.",
      detailedSolutions: [
        "Sử dụng Adobe Photoshop thiết kế hơn 200+ bộ banner sự kiện trong game và quảng cáo Fanpage.",
        "Nghiên cứu sở thích (demographics) của game thủ SEA và Việt Nam để tùy biến màu sắc, nhân vật hút mắt nhất.",
        "Đóng vai trò cầu nối giải quyết phản hồi giữa cộng đồng game thủ và nhóm Dev phát triển game."
      ],
      tags: ["Gaming Marketing", "Photoshop", "SEA Market", "Video Short", "Demographic Analysis"],
      badgeColor: "emerald",
      gallery: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Sáng Tạo Nội Dung Đa Ngôn Ngữ (Anh - Việt) Cho Web3/Game",
      category: "Content Strategy & Video",
      roas: "TOEIC 635",
      metrics: "Wiimob Studio (10/2022 - 03/2023)",
      description: "Biên tập nội dung đa kênh (Facebook, Twitter, Telegram) bằng cả tiếng Anh và tiếng Việt cho dự án DotArcade NFT Game. Hỗ trợ chiến dịch tiếp thị, seeding cộng đồng, sản xuất video CapCut/Premiere và liên hệ booking người nổi tiếng (KOL/TikToker).",
      detailedSolutions: [
        "Biên tập thông cáo báo chí và bài viết hướng dẫn người chơi quốc tế bằng tiếng Anh chuẩn chỉnh.",
        "Sản xuất video review và trailer game bằng CapCut và Adobe Premiere thu hút lượng tương tác tự nhiên lớn trên YouTube (@DotArcadeNFTGame/videos).",
        "Booking KOLs/TikToker review game giúp tạo sóng lan tỏa (seeding) cực mạnh trong cộng đồng."
      ],
      tags: ["Bilingual English-Vietnamese", "KOL Booking", "Premiere/CapCut", "Community Growth"],
      badgeColor: "pink",
      gallery: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "Hệ Thống Báo Cáo & Đối Soát Dữ Liệu Kinh Doanh Thực Tế",
      category: "Data Analytics & BI",
      roas: "100% Data-driven",
      metrics: "Tối Ưu Hóa CAC & Lợi Nhuận Gộp",
      description: "Sử dụng kỹ năng Microsoft Office (Excel nâng cao) kết hợp tư duy phân tích dữ liệu để đánh giá các chỉ số từ lượt xem, phản hồi đến chi phí chuyển đổi thực tế. Cầu nối giữa Marketing, Telesale và Ban lãnh đạo để ra quyết định phân bổ ngân sách.",
      detailedSolutions: [
        "Tự động hóa bảng tính đối soát chi phí từng chiến dịch với doanh thu chốt đơn của Telesale.",
        "Phát hiện sớm các nhóm quảng cáo có tỷ lệ hoàn đơn hoặc rớt đơn cao để cắt giảm ngân sách kịp thời.",
        "Duy trì minh bạch tài chính quảng cáo, tối ưu chi phí thu nạp khách hàng (CAC)."
      ],
      tags: ["Data Reporting", "Excel Advanced", "CAC Optimization", "Telesale Analytics"],
      badgeColor: "orange",
      gallery: [
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      title: "Xây Dựng Nội Dung & Chuyển Đổi Cho Trang Acaci Labs Vietnam",
      category: "Content Strategy & Video",
      roas: "Brand Growth",
      metrics: "Acaci Labs (04/2023 - 06/2023)",
      description: "Đảm nhận vai trò Content Writer cho Fanpage Facebook của Acaci Labs. Phối hợp chặt chẽ cùng các bộ phận liên quan (Marketing, Design, Ads) để sản xuất nội dung chuyên sâu, hấp dẫn, đúng định hướng nhận diện thương hiệu.",
      detailedSolutions: [
        "Viết content định kỳ và kịch bản viral cho Fanpage acacilabsvietnam.",
        "Phối hợp chéo với đội ngũ thiết kế và chạy quảng cáo để tối ưu tỷ lệ nhấp (CTR)."
      ],
      tags: ["Facebook Content", "Copywriting", "Cross-functional Team"],
      badgeColor: "cyan",
      gallery: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  // Work Experience Data (NO 84WIN strictly enforced)
  const experiences = [
    {
      role: "DIGITAL MARKETING SPECIALIST",
      company: "CÔNG TY TNHH LADY HOUSE",
      period: "09/2024 - NOW",
      highlights: [
        "Chạy quảng cáo đa nền tảng các kênh: TikTok Ads, Facebook Ads, Google Ads.",
        "Trực tiếp quản lý và tối ưu ngân sách 150 triệu VNĐ/tháng, đem về doanh thu đều đặn 500 triệu VNĐ/tháng (ROAS ~3.33x+).",
        "Làm báo cáo định kỳ, lập kế hoạch (Plan) và đối soát trực tiếp số liệu chuyển đổi thực tế với bộ phận Telesale để tinh chỉnh target."
      ],
      badgeColor: "cyan"
    },
    {
      role: "GAME CONTENT SOCIAL SPECIALIST",
      company: "CÔNG TY TNHH VMGE",
      period: "06/2023 - 05/2024",
      highlights: [
        "Sản xuất nội dung đa phương tiện (hình ảnh, video short) trên các nền tảng Facebook, TikTok, YouTube cho các tựa game nổi bật: Siêu Rồng Thần Huyền Thoại, Hội Quán Đấu Sĩ (Thị trường VN) và Pirate Legends, Epic Pirate Adventure (Thị trường SEA).",
        "Sử dụng thành thạo Adobe Photoshop (PTS) để thiết kế, chỉnh sửa banner hấp dẫn và tối ưu hóa theo thị hiếu người chơi.",
        "Nghiên cứu nhân khẩu học, đánh giá sâu dữ liệu lượt xem, phản hồi và phạm vi tiếp cận để lên hướng phát triển nội dung.",
        "Đóng vai trò cầu nối hiệu quả giữa cộng đồng game thủ và nhóm phát triển (Dev) để giải quyết thắc mắc, cải thiện trải nghiệm game."
      ],
      badgeColor: "emerald"
    },
    {
      role: "CONTENT WRITER",
      company: "ACACI LABS",
      period: "04/2023 - 06/2023",
      highlights: [
        "Sáng tạo và biên tập nội dung chính cho trang Facebook chính thức: Acaci Labs Vietnam.",
        "Phối hợp nhịp nhàng với bộ phận Marketing và Quảng cáo để sản xuất nội dung chất lượng cao, phục vụ các chiến dịch chuyển đổi."
      ],
      badgeColor: "purple"
    },
    {
      role: "CONTENT CREATOR & MEDIA SPECIALIST",
      company: "WIIMOB STUDIO",
      period: "10/2022 - 03/2023",
      highlights: [
        "Viết nội dung đa kênh (Facebook, Twitter, Telegram) bằng cả Tiếng Anh và Tiếng Việt cho hệ sinh thái DotArcade NFT Game.",
        "Chỉnh sửa và sản xuất video chất lượng cao trên YouTube, TikTok (@DotArcadeNFTGame/videos) bằng CapCut và Adobe Premiere.",
        "Hỗ trợ liên hệ & booking người nổi tiếng (KOLs/KOCs TikToker) để triển khai các chiến dịch quảng cáo, seeding lan tỏa thương hiệu."
      ],
      badgeColor: "pink"
    }
  ];

  // Handle Contact Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen relative text-white">
      {/* Maximalist Particle Fire & Lightning Canvas FX */}
      <MaximalistCanvas enabled={fxEnabled} />

      {/* Sticky Header Glass */}
      <header className="glass-header sticky top-0 z-50 py-3.5 px-4 transition-all">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center font-extrabold text-lg text-slate-950 shadow-lg shadow-cyan-500/40 relative group">
              <span className="relative z-10">TND</span>
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
                TRẦN NGỌC ĐẠO
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold uppercase tracking-widest animate-pulse-glow">
                  PRO
                </span>
              </span>
              <span className="text-xs text-slate-400 block -mt-1 font-medium">
                Media Online • Digital MKT • Data Analytics
              </span>
            </div>
          </div>

          {/* FL v3: Nav links with active section tracking via fl-nav-active class */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-slate-300">
            {[
              { id:'about',                  label:'Giới Thiệu',      icon: null,                          hoverCls:'hover:text-cyan-400' },
              { id:'stats',                   label:'Số Liệu Thực',    icon: null,                          hoverCls:'hover:text-pink-400' },
              { id:'experience',              label:'Kinh Nghiệm',     icon:<Briefcase size={13}/>,          hoverCls:'hover:text-cyan-400' },
              { id:'skills',                  label:'Kỹ Năng',         icon: null,                          hoverCls:'hover:text-purple-400' },
              { id:'interactive-dashboards',  label:'Demo UI',         icon:<Sliders size={13}/>,            hoverCls:'hover:text-emerald-400' },
              { id:'projects',                label:'Dự Án',           icon: null,                          hoverCls:'hover:text-cyan-400' },
              { id:'simulator',               label:'Tính ROAS',       icon:<Sliders size={13}/>,            hoverCls:'hover:text-pink-400' },
              { id:'contact',                 label:'Liên Hệ',         icon: null,                          hoverCls:'hover:text-pink-400' },
            ].map(({ id, label, icon, hoverCls }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${hoverCls} transition-colors flex items-center gap-1 relative ${
                  activeSection === id ? 'fl-nav-active' : ''
                }`}
              >
                {icon} {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Particle Toggle Button */}
            <button 
              onClick={() => setFxEnabled(!fxEnabled)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-cyan-400 transition-all flex items-center gap-1.5"
              title="Toggle Fire & Lightning FX"
            >
              <Flame size={14} className={fxEnabled ? "text-orange-400 animate-bounce" : "text-slate-600"} />
              <span className="hidden sm:inline">FX:</span> {fxEnabled ? "ON ⚡" : "OFF"}
            </button>

            <a 
              href="https://github.com/daotnworking-hub" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
              title="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>

            <a href="tel:+84969896723" className="btn-neon-cyan text-xs sm:text-sm py-2 px-4 shadow-lg">
              <Phone size={15} /> +84 969 896 723
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section (Maximalist Showcase) — Fire & Lightning v3 enhancements: breathing gradient overlays + ember particles */}
      <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        {/* FL v3: Breathing gradient glow nodes (fire bottom-right, bolt top-left) */}
        <div className="fl-hero-breathe" aria-hidden="true"></div>
        <div className="fl-hero-breathe-bolt" aria-hidden="true"></div>
        {/* FL v3: CSS-only ember particles ≤12 (no library) */}
        <div className="fl-ember-container" aria-hidden="true">
          <div className="fl-ember fl-e1"></div>
          <div className="fl-ember fl-e2"></div>
          <div className="fl-ember fl-e3"></div>
          <div className="fl-ember fl-e4"></div>
          <div className="fl-ember fl-e5"></div>
          <div className="fl-ember fl-e6"></div>
          <div className="fl-ember fl-e7"></div>
          <div className="fl-ember fl-e8"></div>
          <div className="fl-ember fl-e9"></div>
          <div className="fl-ember fl-e10"></div>
          <div className="fl-ember fl-e11"></div>
          <div className="fl-ember fl-e12"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-wider animate-float shadow-lg shadow-pink-500/20">
                <Sparkles size={14} /> Maximalist Performance Portfolio
              </div>

              {/* FL v3: Bebas Neue display font + dual-layer fire glow text-shadow */}
              <h1 className="fl-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
                TRẦN NGỌC ĐẠO <br />
                <span className="gradient-maximalist">QUẢNG CÁO ĐA KÊNH</span> <br />
                <span className="gradient-fire">& MEDIA ONLINE</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
                Trình diễn năng lực thực chiến kết hợp giữa <strong className="neon-text-cyan font-bold">Facebook / TikTok / Google Ads</strong> (ROAS 3.33x+), kỹ năng <strong className="neon-text-pink font-bold">Sản xuất Video Premiere/CapCut & Photoshop</strong> và tư duy <strong className="text-emerald-400 font-bold">Đối soát Dữ liệu Kinh doanh</strong> chính xác.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                {/* FL v3: fl-btn-bolt adds one-shot lightning streak on hover */}
                <a href="#projects" className="btn-neon-pink fl-btn-bolt text-base px-7 py-4 shadow-xl">
                  <Zap size={18} /> Khám Phá Dự Án Thực Tế
                </a>
                <a href="#simulator" className="btn-glass fl-btn-bolt text-base px-7 py-4">
                  <Sliders size={18} className="text-emerald-400" /> Mô Phỏng ROAS Ngân Sách
                </a>
              </div>

              {/* Status Pills */}
              <div className="flex flex-wrap gap-3 pt-6 text-xs font-bold text-slate-400">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 size={14} /> Lady House (09/2024 - NOW)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-pink-500/30 flex items-center gap-1.5 text-pink-300">
                  <Award size={14} /> TOEIC 635 (Anh - Việt)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-emerald-500/30 flex items-center gap-1.5 text-emerald-300">
                  <TrendingUp size={14} /> 150 Tr → 500 Tr Revenue
                </span>
              </div>
            </div>

            {/* Right Column: Floating Maximalist Portrait Card */}
            <div className="lg:col-span-5">
              <TiltCard className="p-8 text-center border-glow-cyan bg-gradient-to-b from-slate-900/90 to-purple-950/80 animate-float shadow-2xl">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto mb-6 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-pink-500 to-orange-500 shadow-2xl shadow-cyan-500/40">
                  <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden flex items-center justify-center relative">
                    {/* Simulated High-Contrast Cyber Portrait Avatar */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                      alt="Trần Ngọc Đạo Portrait" 
                      className="w-full h-full object-cover filter contrast-125"
                    />
                  </div>
                </div>

                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3 animate-pulse-glow">
                  ● AVAILABLE FOR SCALE & MEDIA
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-1">
                  TRẦN NGỌC ĐẠO
                </h3>
                <p className="text-sm text-cyan-300 font-semibold mb-6">
                  +84 969 896 723 • contact@daotnworking.com
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-bold pt-4 border-t border-slate-800">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">CURRENT ROLE</span>
                    <span className="text-white">Lady House MKT</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">CORE SKILL</span>
                    <span className="text-pink-400">Ads & PTS/Premiere</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* FL v3: Fracture Line — Hero → Stats */}
      <FractureLineSVG id="fl-frac-hero" height={160} segments={6} />

      {/* Impact Stats Section (Real-Time Count-Up with Sparks) */}
      <section id="stats" className="py-16 relative z-10 border-y border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="container">
          {/* FL v3: scroll-reveal applied to section header */}
          <div className="text-center mb-10 fl-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">Impact Stats</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Số Liệu Thực Tế Khẳng Định Năng Lực</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            <TiltCard className="p-6 text-center border-cyan-500/30">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3 shadow-lg shadow-cyan-500/20">
                <DollarSign size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={150} suffix=" Tr+" />
              </div>
              <div className="text-xs font-bold text-cyan-300 mt-1">Ngân Sách/Tháng</div>
            </TiltCard>

            <TiltCard className="p-6 text-center border-emerald-500/30">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3 shadow-lg shadow-emerald-500/20">
                <TrendingUp size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={500} suffix=" Tr+" />
              </div>
              <div className="text-xs font-bold text-emerald-300 mt-1">Doanh Thu Thu Về</div>
            </TiltCard>

            <TiltCard className="p-6 text-center border-pink-500/30">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-400 mb-3 shadow-lg shadow-pink-500/20">
                <Zap size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={3.33} decimals={2} suffix="x+" />
              </div>
              <div className="text-xs font-bold text-pink-300 mt-1">ROAS Trung Bình</div>
            </TiltCard>

            <TiltCard className="p-6 text-center border-purple-500/30">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-3 shadow-lg shadow-purple-500/20">
                <Target size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={3} suffix="+" />
              </div>
              <div className="text-xs font-bold text-purple-300 mt-1">Nền Tảng Ads Chính</div>
            </TiltCard>

            <TiltCard className="p-6 text-center border-orange-500/30">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-500/10 border border-orange-400/30 flex items-center justify-center text-orange-400 mb-3 shadow-lg shadow-orange-500/20">
                <Award size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={635} />
              </div>
              <div className="text-xs font-bold text-orange-300 mt-1">TOEIC Anh - Việt</div>
            </TiltCard>

            <TiltCard className="p-6 text-center border-cyan-500/30">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3 shadow-lg shadow-cyan-500/20">
                <Database size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={100} suffix="%" />
              </div>
              <div className="text-xs font-bold text-cyan-300 mt-1">Đối Soát Telesale</div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* FL v3: Fracture Line — Stats → Skills */}
      <FractureLineSVG id="fl-frac-stats" height={140} segments={5} />

      {/* Skills Section (Grid with 3D Tilt & Glows) - MOVED RIGHT AFTER HERO/ABOUT AS REQUESTED */}
      <section id="skills" className="py-40 sm:py-52 bg-slate-950 border-y border-slate-800 relative z-10 my-16 sm:my-24">
        <div className="container max-w-7xl">
          {/* FL v3: scroll-reveal applied to section header + stagger on description */}
          <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28 fl-reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/30">
              Chuyên Môn & Kỹ Năng Cốt Lõi
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-6 mb-6 tracking-tight">
              Khối Kỹ Năng Chuyên Sâu
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed fl-reveal fl-reveal-d2">
              Trang bị toàn diện từ <strong className="text-cyan-400">Paid Ads Scaling, Data Analytics & BI</strong> đến <strong className="text-pink-400">Media Production & Quản trị Telesale</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Skill 1: Paid Ads */}
            <TiltCard className="p-8 sm:p-10 border-cyan-500/30 group bg-slate-900/80 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-8 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-cyan-300">
                Paid Ads & Scaling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                Quản trị và scale ngân sách lớn trên Facebook Ads, TikTok Ads, Google Ads mà không bị suy giảm ROAS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 font-bold">#FacebookAds</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 font-bold">#TikTokAds</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 font-bold">#GoogleAds</span>
              </div>
            </TiltCard>

            {/* Skill 2: Media & Video */}
            <TiltCard className="p-8 sm:p-10 border-pink-500/30 group bg-slate-900/80 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-400/40 flex items-center justify-center text-pink-400 mb-8 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
                <Video size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-pink-300">
                Media & Video Production
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                Tự cắt ghép video short bắt trend, tạo hook 3 giây đầu cho TikTok/FB và thiết kế banner sự kiện bằng Adobe Photoshop.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-pink-500/30 text-pink-300 font-bold">#CapCut</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-pink-500/30 text-pink-300 font-bold">#Premiere</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-pink-500/30 text-pink-300 font-bold">#Photoshop</span>
              </div>
            </TiltCard>

            {/* Skill 3: Data Analytics & BI */}
            <TiltCard className="p-8 sm:p-10 border-emerald-500/30 group bg-slate-900/80 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <PieChart size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-emerald-300">
                Data Analytics & Đối Soát
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                Sử dụng Excel nâng cao để đối soát số liệu trực tiếp với Telesale, đánh giá chỉ số chi phí và tối ưu hóa lợi nhuận CAC.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-emerald-300 font-bold">#ExcelAdvanced</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-emerald-300 font-bold">#TelesaleSync</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-emerald-300 font-bold">#CAC</span>
              </div>
            </TiltCard>

            {/* Skill 4: Soft Skills & Languages */}
            <TiltCard className="p-8 sm:p-10 border-orange-500/30 group bg-slate-900/80 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-400/40 flex items-center justify-center text-orange-400 mb-8 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-orange-300">
                Ngoại Ngữ & Kỹ Năng Mềm
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                TOEIC 635 thành thạo biên tập song ngữ Anh - Việt, đàm phán thuyết phục, booking KOLs và lập kế hoạch nội dung logic.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-orange-500/30 text-orange-300 font-bold">#TOEIC635</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-orange-500/30 text-orange-300 font-bold">#KOLBooking</span>
                <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-orange-500/30 text-orange-300 font-bold">#Negotiation</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* FL v3: Fracture Line — Skills → Experience */}
      <FractureLineSVG id="fl-frac-skills" height={160} segments={7} />

      {/* Career Journey & Timeline Section - Interactive Company Slides */}
      <CompanyExperienceSlides />

      {/* FL v3: Fracture Line — Experience → Dashboard */}
      <FractureLineSVG id="fl-frac-exp" height={140} segments={5} />

      {/* Main Interactive Dashboards & Demo UIs Showcase from GitHub (@daotnworking-hub) */}
      <InteractiveDashboardsShowcase />

      {/* FL v3: Fracture Line — Dashboard → Projects */}
      <FractureLineSVG id="fl-frac-dash" height={160} segments={6} />

      {/* Projects / Case Studies Section with Glass Modal & Gallery */}
      <section id="projects" className="py-40 sm:py-56 relative z-10 my-16 sm:my-24 border-t border-slate-800">
        <div className="container">
          {/* FL v3: fl-reveal on section headers + fl-btn-bolt on filter buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="fl-reveal">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-2">Showcase Gallery</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Dự Án & Case Studies Thực Chiến</h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Paid Ads Scaling', 'Social Media & Gaming', 'Content Strategy & Video', 'Data Analytics & BI'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs font-extrabold px-4 py-2 rounded-xl transition-all ${
                    activeFilter === filter
                      ? 'btn-neon-cyan shadow-md shadow-cyan-500/30'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="group cursor-pointer" onClick={() => { setSelectedProject(study); setModalTab('info'); }}>
                <TiltCard className="h-full flex flex-col justify-between border-slate-800 group-hover:border-cyan-400 transition-all">
                  <div>
                    {/* Project Thumbnail with Glass Overlay on Hover */}
                    <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-900 border-b border-slate-800">
                      <img 
                        src={study.gallery ? study.gallery[0] : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"} 
                        alt={study.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                      />
                      {/* FL v3: dark gradient with fire-1 corner tint */}
                      <div className="absolute inset-0 opacity-80 group-hover:opacity-30 transition-opacity"
                           style={{background:'linear-gradient(to top, #060312 0%, rgba(6,3,18,0.5) 45%, transparent 75%)'}}></div>

                      {/* FL v3: hover overlay — dark + fire-1 tint corner, cyan-glow view icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                           style={{background:'linear-gradient(145deg, rgba(6,3,18,0.88) 55%, rgba(255,90,31,0.18) 100%)'}}>
                        <span className="text-xs font-extrabold py-2.5 px-5 rounded-xl flex items-center gap-2"
                              style={{
                                background: 'rgba(6,3,18,0.92)',
                                border: '1.5px solid var(--fl-bolt-1)',
                                color: '#fff',
                                boxShadow: '0 0 14px rgba(124,245,255,0.55), inset 0 0 8px rgba(124,245,255,0.08)'
                              }}>
                          <Eye size={15} style={{color:'var(--fl-bolt-1)'}} /> Xem Chi Tiết & Gallery
                        </span>
                      </div>

                      {/* FL v3: metadata badge — fire-2 border + JetBrains Mono */}
                      <span className="absolute top-3 left-3 text-[11px] px-3 py-1 rounded-full bg-slate-950/92 shadow-md"
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontWeight: 700,
                              color: 'var(--fl-fire-2)',
                              border: '1px solid var(--fl-fire-2)',
                              letterSpacing: '0.03em'
                            }}>
                        {study.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-pink-400 flex items-center gap-1">
                          <Award size={14} /> {study.roas}
                        </span>
                        <span className="text-xs font-extrabold text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                          {study.metrics}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {study.title}
                      </h3>

                      <p className="text-slate-300 text-xs font-light leading-relaxed line-clamp-3 mb-6">
                        {study.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700 font-semibold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Lightbox Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fadeIn">
          <div className="glass-mirror w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 border-glow-cyan relative bg-slate-950/95 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-pink-500 flex items-center justify-center transition-all shadow-md"
            >
              <X size={20} />
            </button>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400">
                {selectedProject.category}
              </span>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400">
                {selectedProject.metrics}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Interactive Modal Tabs */}
            <div className="flex border-b border-slate-800 mb-8 gap-2 overflow-x-auto">
              <button 
                onClick={() => setModalTab('info')}
                className={`px-4 py-2.5 text-xs font-extrabold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                  modalTab === 'info' 
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10' 
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <CheckCircle2 size={14} /> Giải Pháp & Kỹ Thuật
              </button>
              <button 
                onClick={() => setModalTab('simulation')}
                className={`px-4 py-2.5 text-xs font-extrabold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                  modalTab === 'simulation' 
                    ? 'border-pink-400 text-pink-300 bg-pink-500/10' 
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Sliders size={14} /> Giao Diện Mô Phỏng UI
              </button>
              <button 
                onClick={() => setModalTab('demo')}
                className={`px-4 py-2.5 text-xs font-extrabold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                  modalTab === 'demo' 
                    ? 'border-emerald-400 text-emerald-300 bg-emerald-500/10' 
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Sliders size={14} /> Giao Diện Demo UI (@daotnworking-hub)
              </button>
            </div>

            {/* Tab 1: Info & Solutions */}
            {modalTab === 'info' && (
              <div className="animate-fadeIn">
                {selectedProject.detailedSolutions && (
                  <div className="mb-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <h4 className="text-base font-extrabold text-cyan-300 flex items-center gap-2">
                      <Zap size={18} /> Giải Pháp & Kỹ Thuật Đã Triển Khai:
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.detailedSolutions.map((sol, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                          <CheckCircle2 size={16} className="text-pink-400 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.gallery && (
                  <div className="mb-8">
                    <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-wider mb-4">
                      Screenshots & Campaign Assets Gallery
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((imgUrl, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                          <img src={imgUrl} alt={`${selectedProject.title} ${i}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Interactive Simulation Widget */}
            {modalTab === 'simulation' && (
              <div className="animate-fadeIn p-6 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h4 className="text-base font-extrabold text-pink-300 flex items-center gap-2">
                    <Sliders size={18} /> Interactive UI Simulation Widget ({selectedProject.category})
                  </h4>
                  <span className="text-xs font-mono text-emerald-400 font-bold">● LIVE SANDBOX ACTIVE</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Trải nghiệm trực tiếp logic điều khiển quảng cáo và tối ưu hóa hệ thống mà <strong className="text-white">Trần Ngọc Đạo</strong> đã xây dựng cho dự án này.
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">Chỉ số KPI chính</span>
                      <span className="text-lg font-mono font-extrabold text-cyan-400">{selectedProject.roas}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">Đơn vị triển khai</span>
                      <span className="text-xs font-bold text-emerald-300 block mt-1">{selectedProject.metrics}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">Tracking Status</span>
                      <span className="text-xs font-mono font-bold text-pink-400 block mt-1">100% Data Synced</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <a 
                      href="#interactive-dashboards" 
                      onClick={() => setSelectedProject(null)} 
                      className="btn-neon-cyan px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-lg"
                    >
                      <Zap size={14} /> Mở Trình Mô Phỏng Đầy Đủ (Interactive Dashboards)
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Demo UI & Dashboard Integration */}
            {modalTab === 'demo' && (
              <div className="animate-fadeIn p-6 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h4 className="text-base font-extrabold text-emerald-300 flex items-center gap-2">
                    <Sliders size={18} /> Giao Diện Demo UI Từ Kho GitHub (@daotnworking-hub)
                  </h4>
                  <a 
                    href="https://github.com/daotnworking-hub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    Mở GitHub <ExternalLink size={12} />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Dự án <strong className="text-white">{selectedProject.title}</strong> được kết nối với hệ thống Dashboard quản trị tự động trên kho GitHub của Trần Ngọc Đạo. Người dùng có thể thao tác trực tiếp trên giao diện demo để kiểm chứng tính năng.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-xs font-bold text-cyan-400 block mb-1">Giao Diện Khớp Lệnh Telesale</span>
                    <p className="text-xs text-slate-300">Tự động đối soát chi phí quảng cáo với dữ liệu chốt đơn trên CRM.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-xs font-bold text-pink-400 block mb-1">Hệ Thống Cảnh Báo ROAS</span>
                    <p className="text-xs text-slate-300">Điều hướng ngân sách sang các adset đạt ROAS &gt; 3.33x thời gian thực.</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#interactive-dashboards" 
                    onClick={() => setSelectedProject(null)} 
                    className="btn-neon-pink px-6 py-3.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-lg"
                  >
                    <Sliders size={14} /> Trải Nghiệm Trực Tiếp Cả 3 Giao Diện Demo UI
                  </a>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-bold px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>
              <button onClick={() => setSelectedProject(null)} className="btn-neon-pink text-sm py-2.5 px-6">
                Đóng Chi Tiết
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive ROAS & Revenue Simulator */}
      <section id="simulator" className="py-24 relative z-10 bg-slate-950/80 border-t border-slate-800">
        <div className="container">
          <TiltCard className="p-8 sm:p-14 border-glow-pink bg-gradient-to-b from-slate-900/90 to-purple-950/90 relative">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/30">
                Interactive ROAS Tool
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-3">
                Mô Phỏng Doanh Thu Ngân Sách
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Dựa trên con số thực tế tại Lady House (<strong className="text-white">chạy 150 triệu → thu về 500 triệu, ROAS ~3.33x+</strong>), bạn hãy kéo thanh trượt dưới đây để dự phóng doanh thu khi scale ngân sách!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders */}
              <div className="lg:col-span-6 space-y-8 bg-slate-950/80 p-7 rounded-2xl border border-slate-800">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-extrabold text-slate-200 flex items-center gap-2">
                      <DollarSign size={16} className="text-emerald-400" /> Ngân Sách Quảng Cáo / Tháng (Triệu VNĐ)
                    </label>
                    <span className="text-2xl font-extrabold text-white">{adSpend} Tr VNĐ</span>
                  </div>
                  <input 
                    type="range" min="30" max="500" step="10"
                    value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="custom-slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-bold mt-1.5">
                    <span>30 Tr</span>
                    <span className="text-cyan-300">150 Tr (Lady House Benchmark)</span>
                    <span>500 Tr+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-extrabold text-slate-200 flex items-center gap-2">
                      <Zap size={16} className="text-cyan-400" /> ROAS Mục Tiêu
                    </label>
                    <span className="text-2xl font-extrabold text-cyan-400">{roasBenchmark}x</span>
                  </div>
                  <input 
                    type="range" min="1.5" max="6.0" step="0.1"
                    value={roasBenchmark} onChange={(e) => setRoasBenchmark(Number(e.target.value))}
                    className="custom-slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-bold mt-1.5">
                    <span>1.5x</span>
                    <span className="text-emerald-300">3.33x (My Avg)</span>
                    <span>6.0x</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-extrabold text-slate-200 flex items-center gap-2">
                      <Layers size={16} className="text-pink-400" /> Giá Trị Đơn Hàng Trung Bình (AOV)
                    </label>
                    <span className="text-2xl font-extrabold text-pink-400">{(avgOrderValue * 1000).toLocaleString()} VNĐ</span>
                  </div>
                  <input 
                    type="range" min="0.2" max="3.0" step="0.1"
                    value={avgOrderValue} onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="custom-slider"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-bold mt-1.5">
                    <span>200k</span>
                    <span>500k</span>
                    <span>3 Tr+</span>
                  </div>
                </div>
              </div>

              {/* Output Panel */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <TiltCard className="p-6 bg-emerald-500/10 border-emerald-400/40">
                  <span className="text-xs font-bold uppercase text-emerald-300 block mb-1">Doanh Thu Dự Kiến</span>
                  <div className="text-3xl sm:text-5xl font-extrabold text-white">
                    {projectedRevenue.toLocaleString()} Tr
                  </div>
                  <span className="text-xs text-slate-300 font-bold mt-2 block">
                    +{ (projectedRevenue - adSpend).toLocaleString() } Tr (Lợi nhuận gộp)
                  </span>
                </TiltCard>

                <TiltCard className="p-6 border-cyan-400/40">
                  <span className="text-xs font-bold uppercase text-cyan-300 block mb-1">Số Đơn Hàng / Leads</span>
                  <div className="text-3xl sm:text-5xl font-extrabold text-white">
                    {estimatedOrders.toLocaleString()}
                  </div>
                  <span className="text-xs text-slate-300 font-bold mt-2 block">
                    Đơn hàng chốt thành công
                  </span>
                </TiltCard>

                <TiltCard className="p-6 border-pink-400/40">
                  <span className="text-xs font-bold uppercase text-pink-300 block mb-1">CAC Mục Tiêu</span>
                  <div className="text-3xl sm:text-5xl font-extrabold text-white">
                    {estimatedCAC.toLocaleString()}k
                  </div>
                  <span className="text-xs text-slate-300 font-bold mt-2 block">
                    Chi phí / 1 Khách hàng
                  </span>
                </TiltCard>

                <TiltCard className="p-6 bg-cyan-500/10 border-cyan-400/40">
                  <span className="text-xs font-bold uppercase text-cyan-300 block mb-1">Lãi Gộp Ước Tính</span>
                  <div className="text-3xl sm:text-5xl font-extrabold gradient-maximalist">
                    {estimatedProfit.toLocaleString()} Tr
                  </div>
                  <span className="text-xs text-slate-300 font-bold mt-2 block">
                    (Giả định Margin 45%)
                  </span>
                </TiltCard>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Contact Form & Consultation Section (`01-prompt-frontend.md` & `02-prompt-backend.md`) */}
      <section id="contact" className="py-24 relative z-10">
        <div className="container max-w-5xl">
          <TiltCard className="p-8 sm:p-16 border-glow-cyan bg-slate-950/90 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Contact Info */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400">
                  Liên Hệ Hợp Tác
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                  Sẵn Sàng Bứt Phá Doanh Thu Cùng Bạn
                </h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Trực tiếp kết nối với <strong className="text-white">Trần Ngọc Đạo</strong> để nhận đánh giá chi tiết tài khoản quảng cáo (Ad Audit) hoặc tư vấn chiến lược Media Online đa nền tảng.
                </p>

                <div className="space-y-4 pt-4">
                  <a href="tel:+84969896723" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Phone size={22} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Hotline Trực Tiếp</span>
                      <span className="text-lg font-extrabold text-white group-hover:text-cyan-300">+84 969 896 723</span>
                    </div>
                  </a>

                  <a href="mailto:contact@daotnworking.com" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-pink-400 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Email Trực Tiếp</span>
                      <span className="text-lg font-extrabold text-white group-hover:text-pink-300">contact@daotnworking.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Form Input */}
              <div className="lg:col-span-6 bg-slate-900/90 p-8 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-extrabold text-white mb-6">Gửi Tin Nhắn Nhanh</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">Họ & Tên Của Bạn *</label>
                    <input 
                      type="text" required placeholder="Ví dụ: Nguyễn Văn A"
                      value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">Email Hoặc Số Điện Thoại *</label>
                    <input 
                      type="text" required placeholder="email@domain.com / 09xxxxxxxxx"
                      value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">Nội Dung Cần Trao Đổi *</label>
                    <textarea 
                      rows={4} required placeholder="Bạn cần tối ưu chiến dịch nào hay cần sản xuất video media?"
                      value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-400 focus:shadow-[0_0_15px_rgba(255,0,127,0.3)] transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" disabled={formStatus === 'submitting'}
                    className="btn-neon-pink w-full justify-center text-base py-3.5"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> Đang Gửi Request...</span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center gap-2 text-emerald-300"><CheckCircle2 size={18} /> Đã Gửi Thành Công!</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send size={18} /> Gửi Request Ngay</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* FL v3: Fracture Line taper — final segment closing the visual loop with Hero */}
      <FractureLineSVG id="fl-frac-footer" height={80} segments={3} />

      {/* FL v3: Footer — --fl-bg (#0B0806) charcoal-ember base, top border is fire-1 glow */}
      <footer className="py-12 text-center text-xs text-slate-400 relative z-10"
              style={{ background: 'var(--fl-bg, #0B0806)', borderTop: '1px solid rgba(255,90,31,0.25)' }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} TRẦN NGỌC ĐẠO — Maximalist Performance & Media Portfolio.
          </div>
          <div className="flex items-center gap-6 font-bold">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Lên Đầu Trang</a>
            <a href="https://github.com/daotnworking-hub" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
