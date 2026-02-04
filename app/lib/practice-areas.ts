export type PracticeArea = {
  slug: string;
  title: string;
  titleKo: string;
  focus: string;
  focusKo: string;
  summary: string;
  icon: string;
  overview?: string[];
  overviewKo?: string[];
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'entertainment-media-law',
    title: 'Entertainment & Media Law',
    titleKo: '엔터테인먼트 & 미디어 법률',
    focus: 'Transactional and litigation counsel for the entertainment industry.',
    focusKo: '엔터테인먼트 업계를 위한 트랜잭션 및 소송 자문',
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
    focus: 'Enforcement, defense, counseling, and licensing disputes.',
    focusKo: '권리 행사·방어·자문·라이선스 분쟁',
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
    focus: 'Brand protection for names, titles, and logos.',
    focusKo: '이름·타이틀·로고 등 브랜드 보호',
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
    focus: 'Recovery-focused counsel for victims of accidents, negligence, and unsafe conditions.',
    focusKo: '사고, 과실, 위험한 환경으로 다친 고객을 위한 회복 중심의 자문',
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
