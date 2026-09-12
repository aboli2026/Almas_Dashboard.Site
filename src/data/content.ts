import { Testimonial, InstallStep, FeatureItem, ThemeVariant } from '../types';

export const DOWNLOAD_URL = 'https://github.com/aboli2026/Almas_Dashboard/releases/download/v4.0.0/almas-dashboard-v4.0.0.zip';
export const GITHUB_REPO_URL = 'https://github.com/abolking2077/Almas_Dashboard';
export const TELEGRAM_URL = 'https://t.me/Almas_Dashboard';

export const FEATURES: FeatureItem[] = [
  {
    id: 'glass-dark',
    title: 'طراحی شیشه‌ای و دارک‌مود چشم‌نواز',
    description: 'رابط کاربری مدرن با جلوه‌های شیشه‌ای مات (Glassmorphism)، کارت‌های شفاف کریستالی و حالت شب بهینه جهت تمرکز بالا و خستگی کمتر چشم.',
    iconName: 'Moon',
    badge: 'طراحی کریستالی'
  },
  {
    id: 'jalali-clock',
    title: 'ساعت زنده و تقویم خورشیدی هوشمند',
    description: 'نمایش بی‌درنگ زمان و تاریخ شمسی دقیق به همراه خوش‌آمدگویی متناسب با ساعات شبانه‌روز (صبح بخیر، عصر بخیر، غروب بخیر).',
    iconName: 'Calendar',
    badge: 'ایرانی و کاربردی'
  },
  {
    id: 'smart-bookmarks',
    title: 'دسته‌بندی و پین پیشرفته بوک‌مارک‌ها',
    description: 'ساخت آسان پوشه‌ها، پین کردن دسترسی سریع به پلتفرم‌های پرکاربرد (گیت‌هاب، هوش مصنوعی، یوتیوب، آپارات، تلگرام و...) بدون محدودیت تعداد.',
    iconName: 'Bookmark',
    badge: 'نظم حداکثری'
  },
  {
    id: 'multi-search',
    title: 'نوار جستجوی چندمنظوره پرسرعت',
    description: 'جستجوی مستقیم با امکان سوئیچ آنی میان موتورهای جستجوی محبوب (گوگل، بینگ، ذره‌بین، داک‌داک‌گو) همراه با تشخیص هوشمند آدرس اینترنتی.',
    iconName: 'Search',
    badge: 'سرعت بالا'
  },
  {
    id: 'wallpaper-custom',
    title: 'شخصی‌سازی والپیپر و تم‌های متنوع',
    description: 'پشتیبانی کامل از انتخاب تصاویر پس‌زمینه دلخواه، تنظیم میزان بلور شیشه و رنگ‌های هایلایت متناسب با سلیقه شما.',
    iconName: 'Palette',
    badge: 'شخصی‌سازی کامل'
  },
  {
    id: 'privacy-first',
    title: 'زیبا، مدرن و متن‌باز',
    description: 'توسعه یافته با رویکرد متن‌باز، بدون تبلیغات مزاحم و با تمرکز بر طراحی چشم‌نواز و عملکرد بهینه.',
    iconName: 'ShieldCheck',
    badge: 'طراحی برتر'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'علیرضا میرزایی',
    role: 'برنامه‌نویس فرانت‌اند',
    avatarSeed: 'alireza',
    comment: 'طراحی شیشه‌ای و سبک بودنش فوق‌العاده‌ست. سرعت باز شدن تب جدید با ده‌ها بوکمارک رسماً آنی و صفره!',
    rating: 5,
    highlightTag: 'سرعت و پرفورمنس'
  },
  {
    id: '2',
    name: 'سارا رادمهر',
    role: 'طراح رابط و تجربه کاربری (UI/UX)',
    avatarSeed: 'sara',
    comment: 'پوشه‌بندی و چیدمان کارتها بشدت تمیز و حساب‌شده‌ست. بالاخره از دست تب‌های شلوغ و درهم کروم خلاص شدم.',
    rating: 5,
    highlightTag: 'طراحی عالی'
  },
  {
    id: '3',
    name: 'امیرحسین فراهانی',
    role: 'کاربر فعال وب',
    avatarSeed: 'amir',
    comment: 'امکان انتخاب تصویر زمینه دلخواه و افکت بلور شیشه‌ای واقعاً حس کار با یک سیستم‌عامل مدرن رو میده. دسته‌بندی‌ها عالیه.',
    rating: 5,
    highlightTag: 'شخصی‌سازی ظاهری'
  },
  {
    id: '4',
    name: 'مهدی کاظمی',
    role: 'دانشجوی مهندسی کامپیوتر',
    avatarSeed: 'mehdi',
    comment: 'تاریخ شمسی و ساعت در بالای صفحه دقیقاً چیزی بود که همیشه جاش توی مرورگر خالی بود. خیلی روون و سبکه.',
    rating: 5,
    highlightTag: 'تقویم خورشیدی'
  },
  {
    id: '5',
    name: 'فاطمه ابراهیمی',
    role: 'مدیر پروژه و تولید محتوا',
    avatarSeed: 'fatemeh',
    comment: 'بدون تبلیغات آزاردهنده، ساده و شیک. تمام ابزارهای کاریم رو دسته‌بندی کردم و خیلی سرعتم بالا رفته.',
    rating: 5,
    highlightTag: 'افزایش بهره‌وری'
  },
  {
    id: '6',
    name: 'پوریا سپهری',
    role: 'کارشناس شبکه و DevOps',
    avatarSeed: 'pouria',
    comment: 'متن‌باز بودنش عالیه. روی Brave و Edge هم کاملاً روان و بدون مشکل اجرا شد و ظاهر مدرنی بهشون داد.',
    rating: 5,
    highlightTag: 'اوپن‌سورس'
  }
];

export const INSTALL_STEPS: InstallStep[] = [
  {
    stepNumber: 1,
    title: 'دانلود فایل فشرده افزونه',
    description: 'روی دکمه بزرگ دانلود در بالای همین صفحه یا بخش انتهایی کلیک کنید تا فایل zip افزونه از گیت‌هاب رسمی دریافت شود.',
    badge: 'گام اول'
  },
  {
    stepNumber: 2,
    title: 'استخراج (Extract) فایل از حالت فشرده',
    description: 'فایل دانلودی را با نرم‌افزار WinRAR یا قابلیت استخراج ویندوز/مک/لینوکس باز کرده و محتویات آن را در یک پوشه ثابت (مثلاً در درایو دلخواه یا Documents) اکسترکت کنید.',
    note: 'توجه: پوشه را حذف یا جابه‌جا نکنید، زیرا مرورگر فایل‌های افزونه را از همین مسیر می‌خواند.',
    badge: 'گام دوم'
  },
  {
    stepNumber: 3,
    title: 'ورود به بخش مدیریت افزونه‌های مرورگر',
    description: 'مرورگر خود (گوگل کروم، مایکروسافت اج، بریو، ویوالدی و...) را باز کنید و آدرس زیر را در نوار آدرس وارد کنید و Enter بزنید:',
    codeSnippet: 'chrome://extensions',
    badge: 'گام سوم'
  },
  {
    stepNumber: 4,
    title: 'فعال‌سازی حالت توسعه‌دهنده (Developer mode)',
    description: 'در گوشه بالا و سمت راست صفحه افزونه‌ها، کلید «Developer mode» (حالت توسعه‌دهنده) را روشن کنید تا گزینه‌های جدید بارگذاری فعال شوند.',
    badge: 'گام چهارم'
  },
  {
    stepNumber: 5,
    title: 'کلیک روی Load unpacked و انتخاب پوشه',
    description: 'روی دکمه «Load unpacked» (بارگذاری باز نشده) در نوار بالایی کلیک کرده و پوشه‌ای که در گام دوم استخراج کردید را انتخاب کنید.',
    badge: 'گام پنجم'
  },
  {
    stepNumber: 6,
    title: 'افتتاح تب جدید و لذت از الماس داشبورد!',
    description: 'یک تب جدید (Ctrl + T) باز کنید. تبریک می‌گوییم، الماس داشبورد با طراحی مدرن و شیشه‌ای آماده استفاده است.',
    badge: 'پایان موفق'
  }
];

export const THEME_VARIANTS: ThemeVariant[] = [
  {
    id: 'glass-dark',
    name: 'پوسته شیشه‌ای تیره (Dark Crystal)',
    subtitle: 'طراحی پیش‌فرض با پس‌زمینه تیره، افکت شیشه‌ای مات و دسته‌بندی منظم بوک‌مارک‌ها',
    imageSrc: '/src/assets/images/almas_dashboard_preview_1789205242056.jpg',
    accentColor: '#38bdf8',
    tag: 'پیش‌فرض'
  },
  {
    id: 'glass-neon',
    name: 'پوسته نئونی بنفش (Neon Violet)',
    subtitle: 'جلوه درخشان نئونی با کارت‌های شیشه‌ای و پالت رنگی مدرن',
    imageSrc: '/src/assets/images/almas_violet_preview_1789205300834.jpg',
    accentColor: '#a855f7',
    tag: 'پوسته رنگی'
  },
  {
    id: 'glass-frosted',
    name: 'پوسته مات مینیمال (Frosted Minimal)',
    subtitle: 'افکت بلور ملایم با کنتراست متعادل و دسترسی سریع به ابزارهای پرکاربرد',
    imageSrc: '/src/assets/images/almas_diamond_logo_1789205258590.jpg',
    accentColor: '#10b981',
    tag: 'مینیمال'
  }
];

export const FAQS = [
  {
    q: 'آیا افزونه الماس داشبورد رایگان است؟',
    a: 'بله، الماس داشبورد کاملاً رایگان، متن‌باز (Open Source) و بدون هیچ پرداخت درون‌برنامه‌ای یا تبلیغات است.'
  },
  {
    q: 'روی چه مرورگرهایی کار می‌کند؟',
    a: 'این افزونه بر روی تمام مرورگرهای مبتنی بر Chromium شامل Google Chrome, Microsoft Edge, Brave, Opera, Arc, Vivaldi و Yandex به صورت روان و بدون مشکل کار می‌کند.'
  },
  {
    q: 'چطور افزونه را به نسخه‌های جدیدتر بروزرسانی کنم؟',
    a: 'کافی است فایل نسخه جدید را دانلود کرده و محتویات آن را جایگزین محتویات پوشه قبلی کنید و سپس در صفحه chrome://extensions دکمه رفرش افزونه را بزنید.'
  }
];
