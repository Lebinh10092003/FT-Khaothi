import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Download,
  FileText,
  Filter,
  Globe2,
  GraduationCap,
  HelpCircle,
  Home,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Upload,
  User,
  Users,
  Wallet,
  XCircle,
} from 'lucide-react'
import type { ReactNode } from 'react'

type Exam = {
  slug: string
  title: string
  short: string
  category: string
  date: string
  status: string
  mode: string
  color: string
}

type Doc = {
  slug: string
  title: string
  type: string
  size: string
  category: string
  updated: string
}

type News = {
  slug: string
  title: string
  category: string
  date: string
  views: string
}

type Partner = {
  slug: string
  name: string
  type: string
  desc: string
  year: string
}

const exams: Exam[] = [
  { slug: 'iaio-2024', title: 'IAIO 2024 - Vòng quốc gia', short: 'Kỳ thi Trí tuệ nhân tạo Quốc tế dành cho học sinh lớp 8 - 12.', category: 'AI', date: '10/05/2024', status: 'Đang mở đăng ký', mode: 'Online', color: 'from-indigo-950 to-blue-700' },
  { slug: 'ico-2024', title: 'ICO 2024 - Vòng quốc gia', short: 'Kỳ thi Lập trình Quốc tế, đánh giá năng lực lập trình và tư duy thuật toán.', category: 'Lập trình', date: '08/06/2024', status: 'Đang mở đăng ký', mode: 'Online', color: 'from-sky-950 to-cyan-700' },
  { slug: 'robotics-stem-2024', title: 'Robotics & STEM Challenge', short: 'Sân chơi sáng tạo công nghệ, robot, kỹ thuật và giải quyết vấn đề.', category: 'Robotics', date: '05/07/2024', status: 'Đang mở đăng ký', mode: 'Trực tiếp', color: 'from-emerald-950 to-green-700' },
  { slug: 'math-olympiad', title: 'Kỳ thi Toán học Quốc tế', short: 'Rèn luyện tư duy logic, kỹ năng giải quyết vấn đề và năng lực toán học.', category: 'Toán học', date: '15/06/2024', status: 'Đang mở đăng ký', mode: 'Trực tiếp', color: 'from-slate-950 to-slate-700' },
  { slug: 'science-olympiad', title: 'Kỳ thi Khoa học Quốc tế', short: 'Đánh giá năng lực khoa học tự nhiên, phân tích và thực nghiệm.', category: 'Khoa học', date: '20/07/2024', status: 'Sắp mở đăng ký', mode: 'Online', color: 'from-cyan-950 to-blue-700' },
  { slug: 'stem-lab', title: 'STEM Innovation Lab', short: 'Dành cho học sinh yêu thích sáng tạo, mô hình hóa và thuyết trình dự án.', category: 'STEM', date: '10/07/2024', status: 'Sắp mở đăng ký', mode: 'Online', color: 'from-purple-950 to-indigo-700' },
]

const docs: Doc[] = [
  { slug: 'robotics-nang-cao', title: 'Bộ đề luyện thi Robotics nâng cao 2024', type: 'PDF', size: '4.2 MB', category: 'Robotics', updated: '06/05/2024' },
  { slug: 'iaio-de-thi-thu', title: 'Đề thi thử IAIO 2024 - Vòng quốc gia', type: 'PDF', size: '2.4 MB', category: 'AI', updated: '10/05/2024' },
  { slug: 'python-co-ban', title: 'Hướng dẫn lập trình Python cơ bản', type: 'DOCX', size: '1.8 MB', category: 'Lập trình', updated: '08/05/2024' },
  { slug: 'cong-thuc-toan', title: 'Tổng hợp công thức Toán 10 - 12', type: 'DOCX', size: '2.1 MB', category: 'Toán học', updated: '09/05/2024' },
  { slug: 'hoa-hoc-12', title: '3000 bài tập Hóa học 12 có đáp án', type: 'XLSX', size: '3.4 MB', category: 'Khoa học', updated: '08/05/2024' },
]

const news: News[] = [
  { slug: 'ket-qua-icao-2024', title: 'Kết quả vòng quốc gia ICAO 2024 - Thông báo chính thức', category: 'Kết quả', date: '10/05/2024', views: '2.4K' },
  { slug: 'lich-thi-ico-2024', title: 'Thông báo lịch thi ICO 2024 - Vòng quốc gia', category: 'Thông báo', date: '08/05/2024', views: '1.2K' },
  { slug: 'hoi-nghi-khao-thi-stem', title: 'FermatTech tổ chức Hội nghị Khảo thí STEM 2024', category: 'Sự kiện', date: '05/05/2024', views: '856' },
  { slug: 'bao-mat-tai-khoan', title: 'Hướng dẫn bảo mật tài khoản và thông tin cá nhân', category: 'Cẩm nang', date: '04/05/2024', views: '950' },
  { slug: 'on-tap-stem', title: '5 phương pháp học STEM hiệu quả cho học sinh', category: 'Cẩm nang', date: '02/05/2024', views: '1.1K' },
]

const partners: Partner[] = [
  { slug: 'google-for-education', name: 'Google for Education', type: 'Công nghệ', desc: 'Hỗ trợ công cụ và tài nguyên giúp nâng cao trải nghiệm học tập số.', year: '2022' },
  { slug: 'microsoft', name: 'Microsoft', type: 'Công nghệ', desc: 'Đồng hành thúc đẩy chuyển đổi số giáo dục và AI trong học tập.', year: '2023' },
  { slug: 'meta', name: 'Meta', type: 'Công nghệ', desc: 'Hợp tác trong các dự án giáo dục STEM, kỹ năng số và cộng đồng số.', year: '2024' },
  { slug: 'viettel', name: 'Viettel', type: 'Doanh nghiệp', desc: 'Kết nối hạ tầng nền tảng, thúc đẩy giáo dục số đến mọi miền.', year: '2023' },
  { slug: 'fpt', name: 'FPT Corporation', type: 'Công nghệ', desc: 'Đồng hành triển khai giải pháp công nghệ phục vụ giáo dục thông minh.', year: '2023' },
  { slug: 'bkacad', name: 'BKACAD', type: 'STEM', desc: 'Đào tạo và phát triển nguồn nhân lực kỹ thuật cao trong lĩnh vực công nghệ.', year: '2022' },
  { slug: 'vingroup', name: 'Vingroup', type: 'Doanh nghiệp', desc: 'Hợp tác trong các chương trình phát triển giáo dục và tài năng trẻ.', year: '2023' },
  { slug: 'ohstem', name: 'OhStem', type: 'STEM', desc: 'Cung cấp mô hình giáo dục STEM thực hành cho trường học.', year: '2022' },
]

const faqs = [
  'Làm thế nào để đăng ký tham gia kỳ thi?',
  'Khi nào có kết quả thi?',
  'Lệ phí thi được thanh toán như thế nào?',
  'Tôi quên số báo danh thì phải làm sao?',
  'Kỳ thi được tổ chức online hay offline?',
  'Thông tin cá nhân có được bảo mật không?',
]

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Button({ children, to, variant = 'primary', className = '', onClick }: { children: ReactNode; to?: string; variant?: 'primary' | 'secondary' | 'ghost'; className?: string; onClick?: () => void }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-100'
  const variants = {
    primary: 'bg-blue-600 text-white shadow-card hover:bg-blue-700',
    secondary: 'border border-blue-200 bg-white text-blue-700 hover:bg-blue-50',
    ghost: 'text-blue-700 hover:bg-blue-50',
  }
  const classes = cn(base, variants[variant], className)
  if (to) return <Link className={classes} to={to}>{children}</Link>
  return <button className={classes} onClick={onClick}>{children}</button>
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={cn('rounded-3xl border border-slate-200 bg-white p-6 shadow-card', className)}>{children}</div>
}

function Badge({ children, color = 'blue' }: { children: ReactNode; color?: 'blue' | 'green' | 'orange' | 'purple' | 'slate' }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-emerald-50 text-emerald-700',
    orange: 'bg-orange-50 text-orange-700',
    purple: 'bg-purple-50 text-purple-700',
    slate: 'bg-slate-100 text-slate-600',
  }
  return <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-bold', colors[color])}>{children}</span>
}

function Header() {
  const nav = [
    ['Trang chủ', '/'], ['Kỳ thi', '/ky-thi'], ['Tài liệu', '/tai-lieu'], ['Tra cứu điểm', '/tra-cuu-diem'], ['Tin tức', '/tin-tuc'], ['Liên hệ', '/lien-he'], ['Giới thiệu', '/gioi-thieu'],
  ]
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-card"><Sparkles size={22} /></div>
        <div><div className="text-xl font-extrabold text-slate-950">FermatTech</div><div className="text-xs font-bold text-blue-600">Khảo thí</div></div>
      </Link>
      <nav className="hidden items-center gap-2 lg:flex">
        {nav.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => cn('rounded-xl px-4 py-2 text-sm font-semibold transition', isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50')}>{label}</NavLink>)}
      </nav>
      <div className="flex items-center gap-2"><Button to="/dang-ky" className="hidden sm:inline-flex">Đăng ký ngay</Button><button className="rounded-xl border border-slate-200 p-3 lg:hidden"><Menu size={20} /></button></div>
    </div>
  </header>
}

function Footer() {
  return <footer className="mt-16 bg-blue-700 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 lg:px-8">
      <div><div className="mb-3 text-2xl font-extrabold">FermatTech</div><p className="text-sm leading-6 text-blue-100">Nền tảng khảo thí và cuộc thi quốc tế uy tín hàng đầu dành cho học sinh Việt Nam.</p><div className="mt-5 space-y-2 text-sm text-blue-100"><p>☎ 1900 633 330</p><p>✉ support@fermattech.edu.vn</p><p>⌖ Tầng 5, Tòa nhà ABC, TP. Hồ Chí Minh</p></div></div>
      <div><h3 className="font-bold">Liên kết nhanh</h3><div className="mt-4 grid gap-2 text-sm text-blue-100"><Link to="/ky-thi">Kỳ thi</Link><Link to="/tai-lieu">Tài liệu</Link><Link to="/tra-cuu-diem">Tra cứu điểm</Link><Link to="/tin-tuc">Tin tức</Link></div></div>
      <div><h3 className="font-bold">Về chúng tôi</h3><div className="mt-4 grid gap-2 text-sm text-blue-100"><Link to="/gioi-thieu">Giới thiệu</Link><Link to="/doi-tac">Đối tác</Link><Link to="/faq">FAQ</Link><Link to="/lien-he">Liên hệ</Link></div></div>
      <div><h3 className="font-bold">Đăng ký nhận tin</h3><p className="mt-4 text-sm text-blue-100">Nhận thông tin mới nhất về kỳ thi, sự kiện và tài liệu.</p><div className="mt-5 flex rounded-2xl bg-blue-800 p-2"><input className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-blue-200" placeholder="Nhập email của bạn" /><button className="rounded-xl bg-blue-500 p-3"><ArrowRight size={18} /></button></div></div>
    </div>
    <div className="border-t border-blue-500/40 py-5 text-center text-xs text-blue-100">© 2024 FermatTech Khảo thí. Tất cả quyền được bảo lưu.</div>
  </footer>
}

function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-slate-50"><Header /><main>{children}</main><Footer /></div>
}

function PageHero({ title, desc, icon }: { title: string; desc: string; icon?: ReactNode }) {
  return <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
    <div className="absolute right-0 top-0 h-full w-1/2 bg-grid opacity-50" />
    <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-10 px-4 py-16 lg:px-8">
      <div className="max-w-3xl"><div className="mb-4 text-sm font-bold text-blue-600">Trang chủ / {title}</div><h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{desc}</p></div>
      <div className="hidden h-56 w-80 items-center justify-center rounded-[2rem] bg-white shadow-soft lg:flex"><div className="text-blue-600">{icon ?? <Sparkles size={90} />}</div></div>
    </div>
  </section>
}

function StatCard({ icon, value, label, color = 'text-blue-600' }: { icon: ReactNode; value: string; label: string; color?: string }) {
  return <Card className="flex items-center gap-4 p-5"><div className="rounded-2xl bg-blue-50 p-4 text-blue-600">{icon}</div><div><div className={cn('text-2xl font-extrabold', color)}>{value}</div><div className="text-sm font-medium text-slate-500">{label}</div></div></Card>
}

function ExamCard({ exam }: { exam: Exam }) {
  return <Card className="card-hover overflow-hidden p-0">
    <div className={cn('h-36 bg-gradient-to-br p-6 text-white', exam.color)}><Badge color="slate">{exam.category}</Badge><h3 className="mt-5 text-2xl font-extrabold">{exam.title.split('-')[0]}</h3></div>
    <div className="p-6"><h3 className="text-lg font-bold text-slate-950">{exam.title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{exam.short}</p><div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600"><span className="flex items-center gap-2"><CalendarDays size={16} />{exam.date}</span><span className="flex items-center gap-2"><Globe2 size={16} />{exam.mode}</span></div><div className="mt-5 flex items-center justify-between"><Badge color={exam.status.includes('Đang') ? 'green' : 'orange'}>{exam.status}</Badge><Button to={`/ky-thi/${exam.slug}`} variant="secondary" className="px-4 py-2">Xem chi tiết</Button></div></div>
  </Card>
}

function DocumentCard({ doc }: { doc: Doc }) {
  return <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
    <div className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-extrabold', doc.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600')}>{doc.type}</div>
    <div className="flex-1"><Link to={`/tai-lieu/${doc.slug}`} className="font-bold text-slate-950 hover:text-blue-600">{doc.title}</Link><div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500"><Badge>{doc.category}</Badge><span>Cập nhật {doc.updated}</span><span>{doc.size}</span></div></div>
    <Button to={`/tai-lieu/${doc.slug}`} variant="secondary"><Download size={16} />Tải xuống</Button>
  </Card>
}

function NewsCard({ item }: { item: News }) {
  return <Card className="card-hover overflow-hidden p-0">
    <div className="h-40 bg-gradient-to-br from-slate-900 to-blue-700" />
    <div className="p-5"><Badge>{item.category}</Badge><Link to={`/tin-tuc/${item.slug}`} className="mt-4 block text-lg font-bold leading-7 text-slate-950 hover:text-blue-600">{item.title}</Link><div className="mt-4 flex items-center gap-4 text-xs text-slate-500"><span>{item.date}</span><span>👁 {item.views}</span></div></div>
  </Card>
}

function PartnerCard({ partner }: { partner: Partner }) {
  return <Card className="card-hover"><div className="flex items-start justify-between"><div className="text-2xl font-extrabold text-slate-950">{partner.name}</div><Badge>{partner.type}</Badge></div><p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">{partner.desc}</p><div className="mt-5 grid grid-cols-2 text-xs text-slate-500"><span>Lĩnh vực</span><span>Năm hợp tác</span><b className="mt-1 text-slate-700">{partner.type}</b><b className="mt-1 text-slate-700">{partner.year}</b></div><Button to={`/doi-tac/${partner.slug}`} variant="secondary" className="mt-6 w-full">Xem chi tiết</Button></Card>
}

function SearchFilter({ placeholder = 'Tìm kiếm...' }: { placeholder?: string }) {
  return <Card className="flex flex-col gap-4 md:flex-row md:items-center"><div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"><Search size={20} className="text-slate-400" /><input placeholder={placeholder} className="w-full bg-transparent text-sm outline-none" /></div><div className="grid grid-cols-2 gap-3 md:flex"><Button variant="secondary"><Filter size={16} />Bộ lọc</Button><Button variant="secondary">Cấp học</Button><Button variant="secondary">Lĩnh vực</Button><Button variant="secondary">Năm</Button></div></Card>
}

function HomePage() {
  return <Layout><section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white"><div className="absolute right-0 top-20 h-96 w-1/2 rounded-l-[5rem] bg-blue-100/60" /><div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8"><div><h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">Nền tảng <span className="text-gradient">khảo thí</span> và cuộc thi quốc tế dành cho học sinh</h1><p className="mt-6 text-lg leading-8 text-slate-600">FermatTech Khảo thí mang đến các kỳ thi học thuật và STEM chuẩn quốc tế, giúp học sinh Việt Nam chinh phục tri thức.</p><div className="mt-8 flex flex-wrap gap-4"><Button to="/ky-thi">Khám phá kỳ thi <ArrowRight size={18} /></Button><Button to="/tra-cuu-diem" variant="secondary">Tra cứu điểm <Search size={18} /></Button></div><div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-600"><span>✓ Uy tín quốc tế</span><span>✓ Công bằng, minh bạch</span><span>✓ Bảo mật tuyệt đối</span></div></div><Card className="relative p-7"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm text-slate-500">Xin chào, Nguyễn Minh Anh</p><h3 className="text-2xl font-bold">Bảng điều khiển học sinh</h3></div><Bell className="text-blue-600" /></div><div className="grid gap-4 md:grid-cols-2"><Card className="p-4"><b>Kỳ thi sắp tới</b><p className="mt-2 text-sm text-slate-500">ICO 2024 - Vòng quốc gia</p><Button className="mt-4 px-4 py-2">Vào phòng thi thử</Button></Card><Card className="p-4"><b>Kết quả gần nhất</b><p className="mt-2 text-sm text-slate-500">IAIO 2023 - Vòng quốc gia</p><div className="mt-3 text-3xl font-extrabold text-blue-600">85/100</div></Card><Card className="p-4 md:col-span-2"><b>Tiến độ ôn luyện</b><div className="mt-4 space-y-3">{['Ôn luyện', 'Luyện đề', 'Đề thi thử'].map((s, i) => <div key={s}><div className="mb-1 flex justify-between text-xs"><span>{s}</span><span>{[75, 60, 90][i]}%</span></div><div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-blue-600" style={{ width: `${[75, 60, 90][i]}%` }} /></div></div>)}</div></Card></div></Card></div></section><section className="mx-auto max-w-7xl px-4 py-12 lg:px-8"><div className="grid gap-5 md:grid-cols-4"><StatCard icon={<Trophy />} value="28+" label="Kỳ thi quốc tế" /><StatCard icon={<Users />} value="125.000+" label="Thí sinh tham gia" color="text-emerald-600" /><StatCard icon={<Building2 />} value="1.250+" label="Trường tham gia" color="text-orange-600" /><StatCard icon={<FileText />} value="3.600+" label="Tài liệu học thuật" color="text-purple-600" /></div><SectionTitle title="Kỳ thi nổi bật" to="/ky-thi" /><div className="grid gap-6 lg:grid-cols-3">{exams.slice(0, 3).map(e => <ExamCard key={e.slug} exam={e} />)}</div><SectionTitle title="Quy trình tham gia" /><div className="grid gap-5 md:grid-cols-4">{['Đăng ký tài khoản', 'Đăng ký kỳ thi', 'Ôn luyện & Thi thử', 'Tham gia kỳ thi'].map((s, i) => <Card key={s}><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">{i + 1}</div><h3 className="font-bold">{s}</h3><p className="mt-2 text-sm text-slate-500">Thao tác nhanh chóng, minh bạch và dễ theo dõi.</p></Card>)}</div><div className="mt-12 grid gap-8 lg:grid-cols-2"><div><SectionTitle title="Tài liệu mới" to="/tai-lieu" /> <div className="space-y-4">{docs.slice(0, 3).map(d => <DocumentCard key={d.slug} doc={d} />)}</div></div><div><SectionTitle title="Tin tức nổi bật" to="/tin-tuc" /><div className="grid gap-4 sm:grid-cols-2">{news.slice(0, 2).map(n => <NewsCard key={n.slug} item={n} />)}</div></div></div><PartnersStrip /><FAQSmall /></section></Layout>
}

function SectionTitle({ title, to }: { title: string; to?: string }) {
  return <div className="mb-6 mt-12 flex items-center justify-between"><h2 className="text-2xl font-extrabold text-slate-950 md:text-3xl">{title}</h2>{to && <Link to={to} className="text-sm font-bold text-blue-600">Xem tất cả →</Link>}</div>
}

function PartnersStrip() {
  return <div className="mt-14"><h2 className="mb-5 text-center text-xl font-extrabold">Đối tác / Đơn vị đồng hành</h2><Card className="grid grid-cols-2 gap-4 text-center text-xl font-extrabold text-slate-400 md:grid-cols-4 lg:grid-cols-8">{['Google', 'Microsoft', 'AWS', 'Meta', 'Viettel', 'FPT', 'Vingroup', 'BKACAD'].map(x => <div key={x}>{x}</div>)}</Card></div>
}

function FAQSmall() {
  return <div className="mt-12"><h2 className="mb-5 text-2xl font-extrabold">Câu hỏi thường gặp</h2><div className="grid gap-4 md:grid-cols-2">{faqs.slice(0, 6).map(q => <Card key={q} className="flex items-center justify-between p-4"><span className="font-semibold text-slate-700">{q}</span><ChevronDown className="text-slate-400" size={18} /></Card>)}</div></div>
}

function ExamsPage() { return <Layout><PageHero title="Khám phá các kỳ thi" desc="Tìm kiếm và đăng ký các kỳ thi phù hợp với năng lực và định hướng của bạn." icon={<ClipboardCheck size={96} />} /><section className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><SearchFilter placeholder="Tìm kiếm kỳ thi, lĩnh vực, cấp học..." /><div className="mt-8 flex flex-wrap gap-3">{['Tất cả', 'IAIO', 'ICO', 'Robotics', 'STEM', 'Toán học', 'Khoa học'].map((x, i) => <Badge key={x} color={i === 0 ? 'blue' : 'slate'}>{x}</Badge>)}</div><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]"><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{exams.map(e => <ExamCard key={e.slug} exam={e} />)}</div><Card className="h-fit"><h3 className="text-xl font-extrabold">Lịch thi sắp tới</h3><div className="mt-5 space-y-5">{exams.slice(0, 5).map(e => <div key={e.slug} className="border-b border-slate-100 pb-4 last:border-0"><Badge>{e.category}</Badge><div className="mt-2 font-bold">{e.title}</div><div className="mt-1 text-sm text-slate-500">{e.date}</div></div>)}</div></Card></div><Card className="mt-12 flex flex-col items-center justify-between gap-6 bg-blue-50 md:flex-row"><div><h3 className="text-2xl font-extrabold">Bạn chưa biết chọn kỳ thi nào?</h3><p className="mt-2 text-slate-600">Hãy để chúng tôi gợi ý kỳ thi phù hợp với năng lực và mục tiêu của bạn.</p></div><Button>Tư vấn 1:1</Button></Card></section></Layout> }

function DocumentsPage() { return <Layout><PageHero title="Kho tài liệu học tập và ôn luyện" desc="Tuyển chọn tài liệu chất lượng từ FermatTech và đối tác giáo dục uy tín." icon={<BookOpen size={96} />} /><section className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><SearchFilter placeholder="Tìm kiếm tài liệu theo tên, môn học, kỳ thi..." /><div className="mt-8 grid gap-6 md:grid-cols-5"><StatCard icon={<FileText />} value="12.458+" label="Tài liệu" /><StatCard icon={<BookOpen />} value="24" label="Môn học" /><StatCard icon={<CalendarDays />} value="36" label="Kỳ thi" /><StatCard icon={<Download />} value="1.2M+" label="Lượt tải" /><StatCard icon={<Star />} value="98%" label="Hài lòng" /></div><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]"><div className="space-y-4">{docs.concat(docs).map((d, i) => <DocumentCard key={`${d.slug}-${i}`} doc={d} />)}</div><aside className="space-y-6"><Card><h3 className="text-xl font-extrabold">Tài liệu nổi bật</h3><div className="mt-5 space-y-4">{docs.slice(0, 4).map(d => <Link key={d.slug} to={`/tai-lieu/${d.slug}`} className="block font-semibold text-slate-700 hover:text-blue-600">{d.title}<p className="text-xs text-slate-400">{d.type} · {d.size}</p></Link>)}</div></Card><Card><h3 className="text-xl font-extrabold">Hướng dẫn nhanh</h3><div className="mt-5 space-y-4 text-sm text-slate-600"><p>✓ Cách tìm và tải tài liệu</p><p>✓ Quy định sử dụng tài liệu</p><p>✓ Gửi yêu cầu tài liệu</p></div></Card></aside></div></section></Layout> }

function LookupPage() { const navigate = useNavigate(); return <Layout><PageHero title="Tra cứu kết quả kỳ thi" desc="Nhập thông tin của bạn để xem kết quả kỳ thi một cách nhanh chóng và chính xác." icon={<Search size={96} />} /><section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1fr_420px] lg:px-8"><Card><h2 className="flex items-center gap-3 text-2xl font-extrabold"><FileText className="text-blue-600" />Nhập thông tin tra cứu</h2><div className="mt-8 grid gap-5 md:grid-cols-2"><Input label="Số báo danh / Mã thí sinh" placeholder="Nhập số báo danh" /><Input label="Họ và tên" placeholder="Nhập họ và tên" /><Input label="Kỳ thi" placeholder="Chọn kỳ thi" /><Input label="Năm dự thi" placeholder="Chọn năm" /></div><Button className="mt-8 w-full" onClick={() => navigate('/tra-cuu-diem/ket-qua')}><Search size={18} />Tra cứu</Button><p className="mt-5 text-center text-sm text-slate-500">Thông tin của bạn được bảo mật và chỉ dùng để tra cứu kết quả.</p></Card><Card><div className="mb-4 flex items-center justify-between"><h3 className="text-xl font-extrabold">Kết quả mẫu</h3><Badge color="green">Minh họa</Badge></div><div className="rounded-2xl border border-slate-200 p-5"><div className="mb-4 flex justify-between"><b>Kết quả kỳ thi</b><Badge color="green">Đạt</Badge></div><div className="space-y-3 text-sm text-slate-600"><p>Kỳ thi: Học sinh Giỏi Quốc gia</p><p>Năm dự thi: 2024</p><p>Số báo danh: 020123456</p><p>Họ tên: Nguyễn Văn A</p></div><div className="mt-6 flex justify-between border-t pt-4"><b>Tổng điểm</b><span className="text-2xl font-extrabold text-blue-600">35.50</span></div></div></Card><div className="lg:col-span-2"><FAQSmall /></div></section></Layout> }

function NewsPage() { return <Layout><PageHero title="Tin tức & thông báo" desc="Cập nhật những thông tin mới nhất từ FermatTech Khảo thí." icon={<Newspaper size={96} />} /><section className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><div className="flex flex-wrap gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-card">{['Tất cả', 'Thông báo', 'Sự kiện', 'Kết quả', 'Cẩm nang'].map((x, i) => <Badge key={x} color={i === 0 ? 'blue' : 'slate'}>{x}</Badge>)}<div className="ml-auto flex min-w-64 items-center gap-2 rounded-xl border px-3"><Search size={16} /><input className="w-full py-2 text-sm outline-none" placeholder="Tìm kiếm tin tức..." /></div></div><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]"><div className="grid gap-6 md:grid-cols-2"><Card className="overflow-hidden p-0 md:col-span-2"><div className="h-72 bg-gradient-to-br from-slate-950 to-blue-700" /><div className="p-6"><Badge>Sự kiện</Badge><Link to="/tin-tuc/hoi-nghi-khao-thi-stem" className="mt-4 block text-2xl font-extrabold">FermatTech tổ chức Hội nghị Khảo thí STEM 2024 - Kết nối tri thức, kiến tạo tương lai</Link><p className="mt-3 text-slate-600">Hội nghị quy tụ hơn 500 chuyên gia, giáo viên và đối tác trên toàn quốc.</p></div></Card>{news.map(n => <NewsCard key={n.slug} item={n} />)}</div><aside className="space-y-6"><Card><h3 className="text-xl font-extrabold">Bài viết xem nhiều</h3>{news.map((n, i) => <Link key={n.slug} to={`/tin-tuc/${n.slug}`} className="mt-5 flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">{i + 1}</span><span className="font-semibold text-slate-700">{n.title}</span></Link>)}</Card><Card><h3 className="text-xl font-extrabold">Sự kiện sắp diễn ra</h3><div className="mt-5 space-y-4 text-sm"><p>18/05 - Hạn đăng ký ICO 2024</p><p>25/05 - Kỳ thi vòng quốc gia ICO</p><p>02/06 - Hạn đăng ký Robotics 2024</p></div></Card></aside></div></section></Layout> }

function ContactPage() { return <Layout><PageHero title="Liên hệ với chúng tôi" desc="FermatTech Khảo thí luôn sẵn sàng hỗ trợ bạn qua các kênh bên dưới." icon={<Mail size={96} />} /><section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[420px_1fr] lg:px-8"><Card><h2 className="text-2xl font-extrabold">Thông tin liên hệ</h2><ContactItem icon={<Phone />} title="Hotline" text="1900 433 330" /><ContactItem icon={<Mail />} title="Email" text="support@fermattech.edu.vn" /><ContactItem icon={<MapPin />} title="Địa chỉ" text="Tầng 5, Tòa nhà ABC, TP. Hồ Chí Minh" /><ContactItem icon={<CalendarDays />} title="Giờ làm việc" text="Thứ 2 - Thứ 6: 8:00 - 17:30" /></Card><Card><h2 className="text-2xl font-extrabold">Gửi yêu cầu liên hệ</h2><div className="mt-8 grid gap-5 md:grid-cols-2"><Input label="Họ và tên" placeholder="Nhập họ và tên" /><Input label="Email" placeholder="Nhập email" /><Input label="Số điện thoại" placeholder="Nhập số điện thoại" /><Input label="Chủ đề" placeholder="Chọn chủ đề" /><div className="md:col-span-2"><Input label="Nội dung" placeholder="Nhập nội dung cần hỗ trợ" textarea /></div></div><Button className="mt-6">Gửi liên hệ</Button></Card><Card className="min-h-80 bg-blue-50 lg:col-span-2"><h3 className="text-xl font-extrabold">Bản đồ vị trí</h3><div className="mt-5 flex h-56 items-center justify-center rounded-3xl bg-white text-blue-600"><MapPin size={80} /></div></Card></section></Layout> }

function ContactItem({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <div className="mt-6 flex gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">{icon}</div><div><b>{title}</b><p className="mt-1 text-sm text-slate-600">{text}</p></div></div> }
function Input({ label, placeholder, textarea }: { label: string; placeholder: string; textarea?: boolean }) { return <label className="block"><span className="text-sm font-bold text-slate-700">{label}</span>{textarea ? <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={placeholder} /> : <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400" placeholder={placeholder} />}</label> }

function ExamDetailPage() { const { slug } = useParams(); const exam = exams.find(e => e.slug === slug) ?? exams[0]; return <Layout><section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1fr_340px] lg:px-8"><main><div className={cn('rounded-[2rem] bg-gradient-to-br p-10 text-white', exam.color)}><Badge color="slate">{exam.category}</Badge><h1 className="mt-6 text-4xl font-extrabold">{exam.title}</h1><p className="mt-4 max-w-2xl text-blue-50">{exam.short}</p></div><div className="mt-8 grid gap-4 md:grid-cols-4"><StatCard icon={<Users />} value="Lớp 8-12" label="Đối tượng" /><StatCard icon={<Globe2 />} value={exam.mode} label="Hình thức" /><StatCard icon={<CalendarDays />} value="90 phút" label="Thời gian" /><StatCard icon={<Wallet />} value="240.000đ" label="Lệ phí" /></div><div className="mt-8 flex gap-4"><Button to="/dang-ky">Đăng ký ngay</Button><Button variant="secondary"><Download size={18} />Tải thông tin</Button></div><Card className="mt-8"><h2 className="text-2xl font-extrabold">Các mốc thời gian quan trọng</h2><div className="mt-8 grid gap-5 md:grid-cols-5">{['Mở đăng ký', 'Hạn đăng ký', 'Công bố phòng thi', 'Ngày thi', 'Công bố kết quả'].map((x, i) => <div key={x} className="text-center"><div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><CalendarDays /></div><b>{['01/04', '15/05', '18/05', '19/05', '05/06'][i]}</b><p className="mt-2 text-sm text-slate-500">{x}</p></div>)}</div></Card><Card className="mt-8"><h2 className="text-2xl font-extrabold">Giới thiệu</h2><p className="mt-5 leading-8 text-slate-600">{exam.title} là kỳ thi học thuật quốc tế được thiết kế nhằm đánh giá năng lực tư duy, kỹ năng giải quyết vấn đề và khả năng ứng dụng kiến thức trong bối cảnh thực tiễn. Giao diện này là mockup phục vụ duyệt UI, chưa kết nối backend.</p></Card></main><aside className="space-y-6"><Card><h3 className="text-xl font-extrabold">Thời gian đăng ký còn lại</h3><div className="mt-6 grid grid-cols-4 gap-2 text-center"><b className="rounded-xl bg-blue-50 p-3 text-2xl text-blue-600">15</b><b className="rounded-xl bg-blue-50 p-3 text-2xl text-blue-600">08</b><b className="rounded-xl bg-blue-50 p-3 text-2xl text-blue-600">32</b><b className="rounded-xl bg-blue-50 p-3 text-2xl text-blue-600">41</b></div><Button to="/dang-ky" className="mt-6 w-full">Đăng ký ngay</Button></Card><Card><h3 className="text-xl font-extrabold">Tài liệu liên quan</h3><div className="mt-5 space-y-4">{docs.slice(0, 3).map(d => <Link key={d.slug} to={`/tai-lieu/${d.slug}`} className="block font-semibold hover:text-blue-600">{d.title}</Link>)}</div></Card></aside></section></Layout> }

function DocumentDetailPage() { const { slug } = useParams(); const doc = docs.find(d => d.slug === slug) ?? docs[0]; return <Layout><section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1fr_340px] lg:px-8"><main><div className="flex items-center gap-5"><div className="rounded-2xl bg-red-50 p-5 font-extrabold text-red-600">{doc.type}</div><div><h1 className="text-4xl font-extrabold">{doc.title}</h1><p className="mt-2 text-slate-500">4.8 ★★★★★ · 2.1K lượt xem · Lưu tài liệu</p></div></div><Card className="mt-8 grid gap-5 md:grid-cols-4"><StatCard icon={<FileText />} value={doc.type} label="Loại file" /><StatCard icon={<BookOpen />} value="124" label="Số trang" /><StatCard icon={<CalendarDays />} value={doc.updated} label="Cập nhật" /><StatCard icon={<Download />} value={doc.size} label="Dung lượng" /></Card><div className="mt-8 rounded-3xl bg-slate-900 p-6"><div className="mb-4 flex gap-3 text-white"><span>☰</span><span>1 / 124</span><span>100%</span></div><div className="flex min-h-[560px] items-center justify-center rounded-2xl bg-white text-center"><div><div className="text-sm font-bold text-blue-600">Tài liệu luyện thi</div><h2 className="mt-5 text-5xl font-extrabold text-slate-950">BỘ ĐỀ<br />LUYỆN THI<br />ROBOTICS</h2><Button className="mt-8">Nâng cao 2024</Button></div></div></div><Card className="mt-8"><h2 className="text-2xl font-extrabold">Mô tả nội dung</h2><p className="mt-4 leading-8 text-slate-600">Tài liệu được biên soạn dành cho học sinh ôn luyện chuyên sâu, bao gồm hệ thống bài tập, phân tích tư duy và hướng dẫn giải chi tiết.</p></Card></main><aside className="space-y-6"><Card><h3 className="text-xl font-extrabold">Tải xuống tài liệu</h3><Button className="mt-5 w-full"><Download size={18} />Tải file {doc.type}</Button><Button className="mt-3 w-full" variant="secondary">Xem online</Button></Card><Card><h3 className="text-xl font-extrabold">Tài liệu liên quan</h3><div className="mt-5 space-y-4">{docs.map(d => <Link key={d.slug} to={`/tai-lieu/${d.slug}`} className="block font-semibold text-slate-700 hover:text-blue-600">{d.title}</Link>)}</div></Card></aside></section></Layout> }

function ResultSuccessPage() { return <Layout><PageHero title="Kết quả kỳ thi của bạn" desc="Chúc mừng bạn! Dưới đây là kết quả kỳ thi bạn vừa tra cứu." icon={<Trophy size={96} />} /><section className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><Card className="grid gap-8 lg:grid-cols-[1fr_280px]"><div><h2 className="text-2xl font-extrabold">Tổng quan kết quả</h2><div className="mt-6 grid gap-6 md:grid-cols-3"><Info title="Họ và tên" value="Nguyễn Minh Anh" /><Info title="Số báo danh" value="FT24051234" /><Info title="Kỳ thi" value="FermatTech Robotics nâng cao" /><Info title="Năm dự thi" value="2024" /><Info title="Trạng thái" value="Đạt" success /><Info title="Mức đánh giá" value="Giỏi" /></div><div className="mt-8 flex flex-wrap gap-4"><Button><Download size={18} />Tải phiếu kết quả PDF</Button><Button variant="secondary">In kết quả</Button><Button to="/tra-cuu-diem" variant="secondary">Tra cứu lại</Button></div></div><div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center"><p className="font-bold text-slate-600">Tổng điểm</p><div className="mt-3 text-6xl font-extrabold text-blue-600">86.75</div><p className="mt-3 font-bold text-slate-700">Top 8%</p></div></Card><Card className="mt-8"><h2 className="text-2xl font-extrabold">Điểm chi tiết từng môn</h2><div className="mt-6 overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">Môn thi</th><th>Điểm tối đa</th><th>Điểm đạt được</th><th>Nhận xét</th></tr></thead><tbody>{['Lập trình Python nâng cao','Robotics & Điều khiển','Tư duy thuật toán','Toán ứng dụng','Kỹ năng giải quyết vấn đề'].map((x,i)=><tr key={x} className="border-b"><td className="p-4 font-semibold">{x}</td><td>{[25,25,20,15,15][i]}</td><td className="font-bold text-blue-600">{[22.5,22.25,17.5,12.5,12][i]}</td><td className="font-bold text-emerald-600">{i<2?'Tốt':'Khá'}</td></tr>)}</tbody></table></div></Card></section></Layout> }
function Info({ title, value, success }: { title: string; value: string; success?: boolean }) { return <div><p className="text-sm text-slate-500">{title}</p><b className={cn('mt-1 block text-lg', success ? 'text-emerald-600' : 'text-slate-950')}>{value}</b></div> }

function ArticleDetailPage() { const { slug } = useParams(); const item = news.find(n => n.slug === slug) ?? news[0]; return <Layout><section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1fr_340px] lg:px-8"><article><Badge>{item.category}</Badge><h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">{item.title}</h1><p className="mt-4 text-slate-500">{item.date} · FermatTech Team · {item.views} lượt xem</p><div className="mt-8 h-80 rounded-3xl bg-gradient-to-br from-slate-950 to-blue-700" /><Card className="mt-8"><p className="leading-8 text-slate-600">FermatTech chính thức công bố thông tin mới nhất về kỳ thi. Nội dung được trình bày minh bạch, giúp học sinh, phụ huynh và nhà trường dễ dàng nắm bắt các mốc quan trọng.</p><h2 className="mt-8 text-2xl font-extrabold">1. Tổng quan</h2><p className="mt-4 leading-8 text-slate-600">Kỳ thi được tổ chức theo tiêu chuẩn quốc tế, chú trọng đánh giá năng lực tư duy, kỹ năng giải quyết vấn đề và khả năng ứng dụng thực tế.</p><h2 className="mt-8 text-2xl font-extrabold">2. Hướng tiếp theo</h2><p className="mt-4 leading-8 text-slate-600">Thí sinh vui lòng theo dõi email, website và các kênh chính thức của FermatTech để nhận thông tin cập nhật.</p></Card></article><aside className="space-y-6"><Card><h3 className="text-xl font-extrabold">Mục lục bài viết</h3><div className="mt-5 grid gap-3 text-sm text-slate-600"><span>1. Tổng quan</span><span>2. Kết quả</span><span>3. Hướng tiếp theo</span></div></Card><Card><h3 className="text-xl font-extrabold">Bài viết liên quan</h3>{news.slice(0,4).map(n=><Link key={n.slug} to={`/tin-tuc/${n.slug}`} className="mt-4 block font-semibold hover:text-blue-600">{n.title}</Link>)}</Card></aside></section></Layout> }

function AboutPage() { return <Layout><PageHero title="Giới thiệu FermatTech Khảo thí" desc="Nền tảng khảo thí và các cuộc thi quốc tế chuẩn quốc tế dành cho học sinh Việt Nam." icon={<GraduationCap size={96} />} /><section className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><div className="grid gap-6 md:grid-cols-3"><Card><h3 className="text-xl font-extrabold">Sứ mệnh</h3><p className="mt-3 text-slate-600">Mang đến sân chơi học thuật quốc tế chất lượng cao.</p></Card><Card><h3 className="text-xl font-extrabold">Tầm nhìn</h3><p className="mt-3 text-slate-600">Trở thành nền tảng khảo thí giáo dục trực tuyến hàng đầu.</p></Card><Card><h3 className="text-xl font-extrabold">Giá trị cốt lõi</h3><p className="mt-3 text-slate-600">Uy tín, minh bạch, công bằng, bảo mật và đồng hành.</p></Card></div><div className="mt-8 grid gap-5 md:grid-cols-5"><StatCard icon={<Users />} value="125.000+" label="Thí sinh" /><StatCard icon={<Trophy />} value="28+" label="Kỳ thi" /><StatCard icon={<Building2 />} value="1.250+" label="Trường" /><StatCard icon={<FileText />} value="3.600+" label="Tài liệu" /><StatCard icon={<Globe2 />} value="30+" label="Quốc gia" /></div><SectionTitle title="Giải pháp cốt lõi" /><div className="grid gap-5 md:grid-cols-5">{['Kỳ thi quốc tế','Tài liệu học thuật','Tra cứu điểm','Tin tức & sự kiện','Hỗ trợ nhà trường'].map(x=><Card key={x}><h3 className="font-bold">{x}</h3><p className="mt-3 text-sm text-slate-500">Cung cấp giải pháp đồng bộ, dễ sử dụng và mở rộng.</p></Card>)}</div><SectionTitle title="Đội ngũ chuyên gia" /><div className="grid gap-5 md:grid-cols-4">{['TS. Trần Minh Quân','ThS. Nguyễn Thùy Linh','PGS.TS. Lê Văn Hưng','ThS. Phạm Khánh Linh'].map(x=><Card key={x} className="text-center"><div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600"><User /></div><b>{x}</b><p className="mt-2 text-sm text-slate-500">Chuyên gia giáo dục và công nghệ</p></Card>)}</div></section></Layout> }

function PartnersPage() { return <Layout><PageHero title="Đối tác & đơn vị đồng hành" desc="FermatTech tự hào hợp tác cùng các tổ chức, doanh nghiệp và trường học." icon={<Users size={96} />} /><section className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><SearchFilter placeholder="Tìm kiếm đối tác, đơn vị..." /><SectionTitle title="Đối tác chiến lược" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{partners.slice(0,4).map(p=><PartnerCard key={p.slug} partner={p} />)}</div><SectionTitle title="Danh sách đối tác & đơn vị đồng hành" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{partners.map(p=><PartnerCard key={p.slug} partner={p} />)}</div><Card className="mt-10 flex flex-col items-center justify-between gap-5 bg-blue-50 md:flex-row"><div><h3 className="text-2xl font-extrabold">Trở thành đối tác của FermatTech</h3><p className="mt-2 text-slate-600">Hãy cùng chúng tôi kiến tạo những giá trị mới cho giáo dục Việt Nam.</p></div><Button to="/lien-he">Liên hệ hợp tác</Button></Card></section></Layout> }
function PartnerDetailPage() { const { slug } = useParams(); const partner = partners.find(p=>p.slug===slug) ?? partners[0]; return <Layout><section className="mx-auto max-w-7xl px-4 py-12 lg:px-8"><div className="grid gap-8 lg:grid-cols-[320px_1fr]"><Card className="flex min-h-56 items-center justify-center text-center text-3xl font-extrabold text-blue-600">{partner.name}</Card><div><Badge>Đối tác chiến lược</Badge><h1 className="mt-4 text-5xl font-extrabold">{partner.name}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{partner.desc}</p><p className="mt-5 font-semibold text-slate-700">Hợp tác từ: {partner.year} · Lĩnh vực: {partner.type}</p></div></div><SectionTitle title="Các lĩnh vực hợp tác" /><div className="grid gap-5 md:grid-cols-5">{['Hạ tầng học tập','Khảo thí trực tuyến','An toàn bảo mật','Đào tạo năng lực','Đổi mới sáng tạo'].map(x=><Card key={x}><h3 className="font-bold">{x}</h3><p className="mt-3 text-sm text-slate-500">Hợp tác triển khai các chương trình giáo dục số.</p></Card>)}</div><SectionTitle title="Dự án & chương trình tiêu biểu" /><div className="grid gap-5 md:grid-cols-4">{['Thi trực tuyến an toàn','Chuyển đổi số nhà trường','STEM & AI for Students','Đào tạo giáo viên số'].map(x=><Card key={x}><Badge color="green">Đang triển khai</Badge><h3 className="mt-4 font-bold">{x}</h3><p className="mt-3 text-sm text-slate-500">2024 - 2025</p></Card>)}</div></section></Layout> }

function RegisterPage() { return <Layout><section className="mx-auto max-w-7xl px-4 py-12 lg:px-8"><h1 className="text-4xl font-extrabold">Đăng ký tham gia kỳ thi</h1><Card className="mt-8"><div className="grid gap-4 md:grid-cols-4">{['1. Thông tin cá nhân','2. Thông tin học sinh','3. Chọn kỳ thi','4. Xác nhận'].map((x,i)=><div key={x} className={cn('rounded-2xl p-4 font-bold',i===0?'bg-blue-50 text-blue-700':'bg-slate-50 text-slate-500')}>{x}</div>)}</div></Card><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]"><Card><h2 className="text-2xl font-extrabold">Thông tin người đăng ký</h2><div className="mt-8 grid gap-5 md:grid-cols-3"><Input label="Họ và tên" placeholder="Nhập họ và tên" /><Input label="Ngày sinh" placeholder="DD/MM/YYYY" /><Input label="Giới tính" placeholder="Chọn giới tính" /><Input label="Số điện thoại" placeholder="Nhập số điện thoại" /><Input label="Email" placeholder="Nhập email" /><Input label="CMND/CCCD" placeholder="Nhập số CMND/CCCD" /></div><h3 className="mt-8 text-xl font-extrabold">Hồ sơ đính kèm</h3><div className="mt-4 grid gap-4 md:grid-cols-3">{['Ảnh 3x4','CMND/CCCD mặt trước','CMND/CCCD mặt sau'].map(x=><Card key={x} className="p-4"><b>{x}</b><Button className="mt-4 w-full" variant="secondary"><Upload size={16}/>Tải lên</Button></Card>)}</div><div className="mt-8 flex justify-between"><Button variant="secondary">Lưu nháp</Button><Button to="/thanh-toan">Tiếp tục</Button></div></Card><aside className="space-y-6"><Card><h3 className="text-xl font-extrabold">Tóm tắt đơn đăng ký</h3><div className="mt-8 text-center text-slate-500"><User className="mx-auto mb-3" size={80}/>Chưa có thông tin</div></Card><Card><h3 className="text-xl font-extrabold">Thông tin lệ phí</h3><div className="mt-5 space-y-3 text-sm"><p className="flex justify-between"><span>Lệ phí thi</span><b>0 VND</b></p><p className="flex justify-between"><span>Phí dịch vụ</span><b>Miễn phí</b></p><p className="flex justify-between text-lg"><span>Tổng cộng</span><b className="text-blue-600">0 VND</b></p></div></Card></aside></div></section></Layout> }
function PaymentPage() { return <Layout><section className="mx-auto max-w-5xl px-4 py-12"><h1 className="text-4xl font-extrabold">Thanh toán lệ phí</h1><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]"><Card><h2 className="text-2xl font-extrabold">Phương thức thanh toán</h2><div className="mt-6 space-y-4">{['Chuyển khoản ngân hàng','Thẻ nội địa/quốc tế','Ví điện tử Momo/ZaloPay'].map((x,i)=><label key={x} className="flex items-center gap-4 rounded-2xl border p-4"><input type="radio" name="payment" defaultChecked={i===0}/><span className="font-bold">{x}</span></label>)}</div><Card className="mt-6 bg-blue-50"><h3 className="font-bold">Thông tin chuyển khoản</h3><p className="mt-3 text-sm text-slate-600">Ngân hàng: Vietcombank · Chủ tài khoản: Công ty CP Công nghệ Fermat · Nội dung: FTK2024-0001234</p></Card><Button to="/dang-ky-hoan-thanh" className="mt-6 w-full">Thanh toán</Button></Card><Card><h3 className="text-xl font-extrabold">Tóm tắt đơn hàng</h3><div className="mt-5 space-y-3 text-sm"><p>Kỳ thi: IAIO 2024</p><p>Thí sinh: Nguyễn Minh Anh</p><p>Ca thi: Sáng</p><p className="border-t pt-3 text-lg font-extrabold text-blue-600">Tổng cộng: 240.000 VND</p></div></Card></div></section></Layout> }
function RegisterSuccessPage() { return <Layout><section className="mx-auto max-w-6xl px-4 py-16 text-center"><CheckCircle2 className="mx-auto text-blue-600" size={96}/><h1 className="mt-6 text-5xl font-extrabold">Đăng ký thành công!</h1><p className="mt-4 text-lg text-slate-600">Thông tin đăng ký của bạn đã được hệ thống ghi nhận.</p><Card className="mt-10 text-left"><div className="grid gap-6 md:grid-cols-2"><Info title="Mã đăng ký" value="FTK2024-0001234"/><Info title="Họ tên thí sinh" value="Nguyễn Minh Anh"/><Info title="Kỳ thi đã đăng ký" value="Kỳ thi thử Quốc tế IAIO 2024"/><Info title="Trạng thái thanh toán" value="Đã thanh toán" success/></div></Card><div className="mt-8 flex flex-wrap justify-center gap-4"><Button>Tải phiếu xác nhận</Button><Button to="/" variant="secondary">Về trang chủ</Button><Button to="/ky-thi" variant="secondary">Xem kỳ thi đã đăng ký</Button></div></section></Layout> }

function FAQPage() { return <Layout><PageHero title="Câu hỏi thường gặp" desc="Tra cứu nhanh các câu hỏi về đăng ký, thanh toán, tra cứu điểm và hỗ trợ kỹ thuật." icon={<HelpCircle size={96}/>} /><section className="mx-auto max-w-4xl px-4 py-10"><SearchFilter placeholder="Tìm kiếm câu hỏi..."/><div className="mt-8 space-y-4">{faqs.concat(faqs).map((q,i)=><Card key={`${q}-${i}`} className="flex items-center justify-between"><span className="font-bold">{q}</span><ChevronDown/></Card>)}</div></section></Layout> }
function AccountPage() { return <Layout><section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[320px_1fr] lg:px-8"><Card className="h-fit"><div className="rounded-3xl bg-blue-600 p-6 text-white"><User size={52}/><h2 className="mt-4 text-2xl font-extrabold">Nguyễn Văn A</h2><p className="text-blue-100">nguyenvana@gmail.com</p></div><div className="mt-6 grid gap-3 text-sm font-semibold text-slate-600"><span>Thông tin cá nhân</span><span>Đăng ký của tôi</span><span>Kết quả thi</span><span>Tài liệu yêu thích</span><span>Cài đặt tài khoản</span></div></Card><div className="space-y-6"><div className="grid gap-5 md:grid-cols-3"><StatCard icon={<CalendarDays/>} value="03" label="Kỳ thi đã đăng ký"/><StatCard icon={<Award/>} value="02" label="Kết quả thi"/><StatCard icon={<Bell/>} value="05" label="Thông báo mới"/></div><Card><h2 className="text-2xl font-extrabold">Kỳ thi đã đăng ký</h2>{exams.slice(0,3).map(e=><div key={e.slug} className="mt-5 flex items-center justify-between border-b pb-4"><div><b>{e.title}</b><p className="text-sm text-slate-500">{e.date}</p></div><Badge color="green">Đang hoạt động</Badge></div>)}</Card></div></section></Layout> }
function NotificationsPage() { return <Layout><PageHero title="Thông báo" desc="Theo dõi thông báo hệ thống, kỳ thi, kết quả và tài liệu mới." icon={<Bell size={96}/>} /><section className="mx-auto max-w-5xl px-4 py-10"><div className="mb-6 flex gap-3"><Badge>Tất cả</Badge><Badge color="slate">Thông báo</Badge><Badge color="slate">Kỳ thi</Badge><Badge color="slate">Hệ thống</Badge></div><div className="space-y-4">{['Thông báo lịch thi TOEIC tháng 6/2024','Kết quả thi ngày 25/04/2024 đã có','Bảo trì hệ thống vào ngày 20/05/2024','Ưu đãi lệ phí thi IELTS tháng 5/2024'].map((x,i)=><Card key={x} className="flex items-center gap-4"><div className={cn('rounded-2xl p-3 text-white', ['bg-blue-600','bg-emerald-600','bg-orange-500','bg-purple-600'][i])}><Bell/></div><div><b>{x}</b><p className="text-sm text-slate-500">10/05/2024 10:30</p></div></Card>)}</div></section></Layout> }
function NotFoundPage() { return <Layout><section className="mx-auto max-w-3xl px-4 py-24 text-center"><XCircle className="mx-auto text-blue-600" size={96}/><h1 className="mt-6 text-5xl font-extrabold">Không tìm thấy trang</h1><p className="mt-4 text-slate-600">Đường dẫn bạn truy cập không tồn tại hoặc đã được di chuyển.</p><div className="mt-8 flex justify-center gap-4"><Button to="/">Về trang chủ</Button><Button to="/ky-thi" variant="secondary">Khám phá kỳ thi</Button></div></section></Layout> }

export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/ky-thi" element={<ExamsPage />} />
    <Route path="/ky-thi/:slug" element={<ExamDetailPage />} />
    <Route path="/tai-lieu" element={<DocumentsPage />} />
    <Route path="/tai-lieu/:slug" element={<DocumentDetailPage />} />
    <Route path="/tra-cuu-diem" element={<LookupPage />} />
    <Route path="/tra-cuu-diem/ket-qua" element={<ResultSuccessPage />} />
    <Route path="/tin-tuc" element={<NewsPage />} />
    <Route path="/tin-tuc/:slug" element={<ArticleDetailPage />} />
    <Route path="/lien-he" element={<ContactPage />} />
    <Route path="/gioi-thieu" element={<AboutPage />} />
    <Route path="/doi-tac" element={<PartnersPage />} />
    <Route path="/doi-tac/:slug" element={<PartnerDetailPage />} />
    <Route path="/dang-ky" element={<RegisterPage />} />
    <Route path="/thanh-toan" element={<PaymentPage />} />
    <Route path="/dang-ky-hoan-thanh" element={<RegisterSuccessPage />} />
    <Route path="/faq" element={<FAQPage />} />
    <Route path="/tai-khoan" element={<AccountPage />} />
    <Route path="/thong-bao" element={<NotificationsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
}
