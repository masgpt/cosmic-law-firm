import type { IconName } from '@src/components/Icon';

export type PracticeArea = {
  slug: string;
  title: string;
  titleKo: string;
  titleZh: string;
  shortTitle: string;
  shortTitleKo: string;
  shortTitleZh: string;
  focus: string;
  focusKo: string;
  focusZh: string;
  summary: string;
  icon: IconName;
  overview?: string[];
  overviewKo?: string[];
  overviewZh?: string[];
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'entertainment-media-law',
    title: 'Entertainment & Media Law',
    titleKo: '엔터테인먼트 & 미디어 법률',
    titleZh: '娱乐与媒体法',
    shortTitle: 'Entertainment',
    shortTitleKo: '엔터테인먼트',
    shortTitleZh: '娱乐',
    focus: 'Transactional and litigation counsel for the entertainment industry.',
    focusKo: '엔터테인먼트 업계를 위한 트랜잭션 및 소송 자문',
    focusZh: '娱乐行业的交易与诉讼法律顾问。',
    summary:
      'Full-spectrum entertainment counsel—from contracts and negotiations to disputes—built for creators, studios, and media businesses.',
    icon: 'theaters',
    overview: [
      'Cosmic Law Firm’s entertainment and media law practice covers both transactional and litigation matters for clients.',
      'We support clients across film, television, music, theatre, video games, and new media with dealmaking, rights management, and dispute strategy.',
    ],
    overviewKo: [
      'Cosmic Law Firm은 엔터테인먼트 및 미디어 분야에서 트랜잭션과 소송을 모두 아우르는 서비스를 제공합니다.',
      '영화, TV, 음악, 공연, 게임, 뉴미디어 전반에 걸쳐 계약·권리·분쟁 전략을 지원합니다.',
    ],
    overviewZh: [
      'Cosmic Law Firm 的娱乐与媒体法律实践涵盖客户的交易与诉讼事务。',
      '我们支持电影、电视、音乐、戏剧、视频游戏和新媒体领域的客户，提供交易、权利管理和纠纷策略支持。',
    ],
    services: [
      'Intellectual Property Litigation',
      'Defamation and Right of Privacy Litigation',
      'Financing, Profit Participation and Accounting-Related Litigation',
      'Independent Film & Television Alliance (IFTA) Arbitrations',
      'California Labor Commission Proceedings',
      'Contracts and Negotiations',
      'Intellectual Property Licensing and Consulting',
      'Film and Television Production',
      'Film Financing',
      'Talent Representation',
      'Music',
      'Theatre',
      'Video Games and New Media',
    ],
  },
  {
    slug: 'copyright-infringement',
    title: 'Copyright Infringement',
    titleKo: '저작권 침해',
    titleZh: '著作权侵权',
    shortTitle: 'Copyright',
    shortTitleKo: '저작권',
    shortTitleZh: '著作权',
    focus: 'Enforcement, defense, counseling, and licensing disputes.',
    focusKo: '권리 행사·방어·자문·라이선스 분쟁',
    focusZh: '权利主张、防御、咨询与许可争议。',
    summary:
      'We help clients protect creative works, enforce rights against infringement, and reduce risk through clear guidance and strategic action.',
    icon: 'copyright',
    overview: [
      'Copyright safeguards a wide range of creative expressions, including visual arts, music, architectural designs, source code, software, literary works, and sculptures.',
      'Our copyright lawyers focus on two main objectives: pursuing legal action against those who infringe on our clients’ copyrights and assisting clients in avoiding copyright infringement.',
      'In the digital age, we counsel on DMCA issues, fair use, licensing, and disputes so clients can move quickly while staying protected.',
    ],
    overviewKo: [
      '저작권은 미술, 음악, 건축, 소프트웨어, 문학 등 다양한 창작물을 보호합니다.',
      '저희는 권리 침해에 대한 적극적 대응과, 침해 위험을 줄이기 위한 사전 자문에 집중합니다.',
      '디지털 시대의 DMCA, 공정이용, 라이선스, 분쟁을 실무 중심으로 지원합니다.',
    ],
    overviewZh: [
      '版权保护广泛的创意表达，包括视觉艺术、音乐、建筑设计、源代码、软件、文学作品和雕塑。',
      '我们的版权律师专注于两个主要目标：对侵犯客户版权的行为采取法律行动，并协助客户避免侵犯他人版权。',
      '在数字时代，我们就 DMCA 问题、合理使用、许可和争议提供建议，以便客户在保持受保护的同时快速行动。',
    ],
    services: [
      'Copyright registration strategy and filings',
      'Infringement enforcement and defense',
      'Licensing and contract disputes',
      'DMCA takedown and counter-notice strategy',
      'Fair use and clearance guidance',
      'Chain-of-title and ownership analysis',
      'Remedies strategy (injunctions, damages, fees)',
      'Portfolio counseling for creators and businesses',
    ],
  },
  {
    slug: 'trademark-law',
    title: 'Trademark Law',
    titleKo: '상표법',
    titleZh: '商标法',
    shortTitle: 'Trademark',
    shortTitleKo: '상표',
    shortTitleZh: '商标',
    focus: 'Brand protection for names, titles, and logos.',
    focusKo: '이름·타이틀·로고 등 브랜드 보호',
    focusZh: '名称、标题和徽标的品牌保护。',
    summary:
      'We help clients clear, register, license, and enforce trademarks so brands can grow with confidence.',
    icon: 'verified',
    overview: [
      'Trademarks protect the brands audiences recognize—names, titles, logos, and other identifiers used in commerce.',
      'We guide clients through clearance, registration, and enforcement so brand investments remain protectable and enforceable.',
    ],
    overviewKo: [
      '상표는 이름, 타이틀, 로고 등 시장에서 식별되는 브랜드 요소를 보호합니다.',
      '저희는 검색·출원·등록·라이선스·분쟁 대응까지 브랜드 보호 전 과정을 지원합니다.',
    ],
    overviewZh: [
      '商标保护观众认可的品牌——名称、标题、徽标和商业中使用的其他标识。',
      '我们指导客户进行查询、注册和主张权利，确保品牌投资保持受保护且可执行。',
    ],
    services: [
      'Trademark clearance searches and risk counseling',
      'Trademark applications and prosecution',
      'Portfolio strategy and renewals',
      'Licensing and brand deal terms',
      'Oppositions, cancellations, and enforcement',
      'Infringement and unfair competition disputes',
      'Online enforcement and takedown strategy',
    ],
  },
  {
    slug: 'personal-injury-law',
    title: 'Personal Injury Law',
    titleKo: '개인상해법',
    titleZh: '人身伤害法',
    shortTitle: 'Injury',
    shortTitleKo: '상해',
    shortTitleZh: '伤害',
    focus: 'Recovery-focused counsel for victims of accidents, negligence, and unsafe conditions.',
    focusKo: '사고, 과실, 위험한 환경으로 다친 고객을 위한 회복 중심의 자문',
    focusZh: '为事故、过失和不安全条件的受害者提供以康复为中心的咨询。',
    summary:
      'We represent individuals who suffered physical or emotional harm, securing compensation for medical care, lost income, and future needs after crashes, defective products, medical errors, and other preventable incidents.',
    icon: 'medical_services',
    overview: [
      'Personal injury law covers a wide spectrum of accidents, from vehicle collisions and wrongful death matters to product defects, premises liability, and medical malpractice.',
      'We build each claim around careful investigations, medical experts, and strategic negotiations so clients are not left managing insurance games while still recovering from trauma.',
    ],
    overviewKo: [
      '개인상해법은 차량 충돌, 사망 사건, 제품 결함, 부동산 책임, 의료 과실 등 다양한 사고를 포괄합니다.',
      '저희는 의료 전문가와 조사를 연계해 전략적으로 협상하며, 트라우마 회복에 집중할 수 있도록 보험 게임에 고객이 휘둘리지 않도록 조력합니다.',
    ],
    overviewZh: [
      '人身伤害法涵盖广泛的事故，从车辆碰撞和非正常死亡事项到产品缺陷、场所责任和医疗事故。',
      '我们围绕仔细的调查、医学专家和战略谈判建立每项索赔，以便客户在从创伤中恢复时不必处理保险游戏。',
    ],
    services: [
      'Automobile and motorcycle accident litigation',
      'Catastrophic injury claims (brain, spinal, burn, amputation)',
      'Premises liability (slips, falls, negligent security, swimming pools)',
      'Product liability and defective equipment recalls',
      'Medical malpractice and delayed diagnosis cases',
      'Workplace third-party claims and construction-site incidents',
      'Wrongful death and family support settlements',
      'Insurance bad-faith, underpayment, and settlement negotiation',
    ],
  },
];

export const getPracticeAreaBySlug = (slug: string) =>
  practiceAreas.find((area) => area.slug === slug);