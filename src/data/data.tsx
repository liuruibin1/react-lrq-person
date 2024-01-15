import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import WeChatIcon from "../components/Icon/WeChatIcon";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: '主页',
  About: '关于我',
  Contact: '联系',
  Portfolio: '个人信息',
  Resume: '招聘简介',
  Skills: '技能',
  Stats: '统计',
  Testimonials: '感言',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `我是小刘`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       我是一个专注于消防部署的 <strong className="text-stone-100">工程师</strong>, 我的工作地点在
        <strong className="text-stone-100">晋江</strong> ，同时也是一个希望找到共同合作者的老板。
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        我专注于这个行业十几年， 拥有丰富的<strong className="text-stone-100">技能</strong>,
        如果有意愿合作的老板和员工可以积极联系我，我的微信是： <strong className="text-stone-100">LXY952324</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: '简介',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: '联系',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `在我的职业生涯中，我成功管理过多个项目的消防弱电系统。我熟悉商业及厂房消防报警系统的接入，确保消防报警系统的质量和稳定性。同时，我也具备从基础到后期消防报警系统的能力，以确保系统在紧急情况下的可靠性。
  我负责过消防报警系统选择、安装和维护。通过合理配置消防报警系统的合理规范性，并实施自动控制系统，我成功提升了消防报警系统的效率和响应速度。这在多次实际火警测试中都取得了良好的效果。我的工作涵盖了建筑物内部消防系统的管理。我确保管道、线路、设备、回路之间和消防报警主机等设备的正常运行。
  我注重系统的定期检查和维护工作。我开发了详细的维护计划，包括消防报警系统的监测、消防报警设备的定期检查、电力系统的设备巡检和消防设备的测试。这确保了系统始终处于最佳状态。`,
  aboutItems: [
    {label: '地点', text: '晋江', Icon: MapIcon},
    {label: '年龄', text: '28', Icon: CalendarIcon},
    {label: '国家', text: '中国', Icon: FlagIcon},
    {label: '兴趣', text: '致力打造完美消防系统', Icon: SparklesIcon},
    {label: '证书', text: '消防证书', Icon: AcademicCapIcon},
    {label: '员工', text: '不低于十人', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '维保技能',
    skills: [
      {
        name: '报警系统',
        level: 5,
      },
      {
        name: '供水系统',
        level: 5,
      },
      {
        name: '配电系统',
        level: 5,
      },
    ],
  },
  {
    name: '维修技能',
    skills: [
      {
        name: '消防报警系统',
        level: 5,
      },
      {
        name: '饮用水和消防供水系统',
        level: 5,
      },
      {
        name: '配电系统',
        level: 5,
      },
    ],
  },
  {
    name: '施工技能',
    skills: [
      {
        name: '消防报警系统',
        level: 5,
      },
      {
        name: '饮用水和消防供水系统',
        level: 5,
      },
      {
        name: '配电系统',
        level: 5,
      },
    ],
  },
  {
    name: '管理',
    skills: [
      {
        name: '消防报警系统',
        level: 5,
      },
      {
        name: '消防供水系统',
        level: 5,
      },
      {
        name: '水电系统',
        level: 5,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2024 1月15日',
    location: '晋江',
    title: '团队前景介绍',
    content: <p>欢迎加入我们的团队！我们的团队是一个充满活力、充满创新和追求卓越的团队。在这里，我们不仅仅是同事，更是志同道合的伙伴，致力于共同打造一个成功而有活力的工作环境。</p>,
  },
  {
    date: '2024 1月15日',
    location: '晋江',
    title: '我们的愿景：',
    content: <p>我们的愿景是成为行业领先的团队，通过协同努力和不断创新，为客户提供卓越的服务。我们追求卓越，挑战传统，引领行业的发展方向。</p>,
  },
  {
    date: '2024 1月15日',
    location: '晋江',
    title: '我们的目标：',
    content: <p>1、提供高质量的产品/服务，满足客户不断增长的需求。<br/>
      2、培养和发展团队成员的潜力，使其在职业生涯中取得成功。<br/>
      3、打造积极、团结、创新的工作文化，使每个成员都能在这里找到工作的乐趣和成就感。</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2024 1月15日',
    location: '福建省内',
    title: '多地工作选择，住宿提供，薪酬面议：',
    content: (
      <p>
        欢迎加入我们跨足泉州、晋江、福州、石狮、厦门的团队！我们为您提供多样的工作地点选择，以及舒适的住宿条件，助您在职业生涯中实现更多的可能。
      </p>
    ),
  },
  {
    date: '2024 1月15日',
    location: '福建省内',
    title: '工作地点：',
    content: (
        <p>
          我们的业务遍布于泉州、晋江、福州、石狮、厦门等多个城市，每个地方都有独特的经济文化特色。您将有机会选择最适合您生活和工作的地点，感受不同城市的魅力。
        </p>
    ),
  },
  {
    date: '2024 1月15日',
    location: '福建省内',
    title: '住宿条件：',
    content: (
        <p>
          我们为员工提供优质住宿，确保您在工作期间有一个舒适的居住环境。住宿设施配备齐全，为您提供一个安心、便捷的居住体验。
        </p>
    ),
  },
  {
    date: '2024 1月15日',
    location: '福建省内',
    title: '员工伙食：',
    content: (
        <p>
          尽管我们提供了住宿，但员工伙食方面需要您自行安排。您将有机会在各地品尝到当地特色美食，享受多元化的饮食文化。
        </p>
    ),
  },
  {
    date: '2024 1月15日',
    location: '福建省内',
    title: '薪酬待遇：',
    content: (
        <p>
          薪酬待遇将根据您的工作经验、技能和贡献程度进行面议。我们致力于为每一位员工提供有竞争力的薪酬，以及发展和晋升的机会。
        </p>
    ),
  },
  {
    date: '2024 1月15日',
    location: '福建省内',
    title: '工作环境：',
    content: (
        <p>
          我们注重团队协作和员工发展，提供良好的工作环境和职业发展机会。在这里，您将有机会参与各类项目，不断拓展自己的职业领域。
        </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '胜佳斯工程检测有限公司',
      text: ' 消防团队成员对各类灭火器材和应急设备的使用非常娴熟，能够熟练操作各种设备进行火场救援。他们经过系统培训，保持了高水平的专业技能。 消防团队成员以踏实肯干为特点，对工作兢兢业业，勇挑重担。无论是在常规巡查、演练还是实际灭火救援中，都展现出了对工作的执着和认真态度。',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: '员工',
      text: '消防团队成员之间表现出极强的团结协作精神，密切合作，形成了紧密的战斗力。大家在面对紧急情况时能够迅速响应，并通过默契的配合高效解决问题。',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: '大众',
      text: ' 消防团队展现出了高度的专业精神，不仅具备深厚的专业知识，还不断学习新的灭火救援技术，提高团队整体水平。',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: '保持联系',
  description: '也可以通过邮箱与我联系。',
  items: [
    {
      type: ContactType.Email,
      text: '1015213295@qq.com',
      href: 'https://wx.mail.qq.com/?cancel_login=true&from=get_ticket_fail',
    },
    {
      type: ContactType.Location,
      text: '晋江',
      href: 'https://map.baidu.com/search/%E6%B3%89%E5%B7%9E%E6%99%8B%E6%B1%9F%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA/@13201513.912366442,2833083.70669955,15.52z?querytype=s&da_src=shareurl&wd=%E6%B3%89%E5%B7%9E%E6%99%8B%E6%B1%9F%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&c=134&src=0&wd2=%E6%B3%89%E5%B7%9E%E5%B8%82%E6%99%8B%E6%B1%9F%E5%B8%82&pn=0&sug=1&l=13&b=(13178070,2822790;13227222,2845286)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=271beddd388e3d29f03cbaff&device_ratio=2',
    },
    {
      type: ContactType.WeChat,
      text: 'LXY952324',
      href: '',
    },
    {
      type: ContactType.Phone,
      text: '18105988223',
      href: '',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'WeChat', Icon: WeChatIcon, href: 'https://weixin.qq.com/'},
];
