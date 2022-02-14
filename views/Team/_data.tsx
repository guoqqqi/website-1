export interface Member {
  role: string
  image: string
  name: string
  twitter?: string
  linkedin?: string
  github?: string
  type: 'team' | 'adviser'
  description: string
}

export const members: Member[] = [
  {
    role: 'Co-Founder / CEO',
    image:
      'https://avatars.githubusercontent.com/u/26448043?s=400&u=9a51a2ee99658ea30918952675fdffeca8b5dc4c&v=4',
    name: 'Ming Wen',
    twitter: 'https://twitter.com/_WenMing',
    github: 'https://github.com/moonming',
    description: 'Apache Member / PMC Chair of Apache APISIX',
    type: 'team'
  },
  {
    role: 'Co-Founder / CTO',
    image:
      'https://avatars.githubusercontent.com/u/6814606?s=460&u=159f149cf81a9e8a7d5df456456a17f7f6905b62&v=4',
    name: 'Yuansheng Wang',
    github: 'https://github.com/membphis',
    description: 'Apache APISIX Founder & PMC',
    type: 'team'
  }, {
    role: 'Partner / Product VP',
    image: 'https://api7-website-1301662268.file.myqcloud.com/team/members/wangyeliang-3.jpg',
    name: 'Yeliang Wang',
    twitter: 'https://twitter.com/WYeliang',
    github: 'https://github.com/wang-yeliang',
    description: 'Apache APISIX Committer',
    type: 'team'
  }, {
    role: 'Technical Consultant',
    image:
      'https://static.apiseven.com/202108/wusheng.jpeg',
    name: 'Sheng Wu',
    github: 'https://github.com/wu-sheng',
    twitter: 'https://twitter.com/wusheng1108',
    description: 'Apache Board / Apache SkyWalking Founder',
    type: 'adviser'
  }, {
    role: 'Head of Developer Experience',
    image:
      'https://avatars.githubusercontent.com/u/752258?v=4',
    name: 'Nicolas Fränkel',
    github: 'https://github.com/nfrankel',
    twitter: 'https://twitter.com/nicolas_frankel',
    type: 'team',
    description: ''
  }, {
    role: 'Developer Advocate',
    image:
      'https://avatars.githubusercontent.com/u/14247607?v=4',
    name: 'Bobur Umurzokov',
    github: 'https://github.com/Boburmirzo',
    linkedin: 'https://www.linkedin.com/in/bobur-u-147400106/',
    twitter: 'https://twitter.com/BoburUmurzokov',
    type: 'team',
    description: ''
  }, {
    role: 'Technical Writer',
    image:
      'https://avatars.githubusercontent.com/u/74113200?v=4',
    name: 'Avinal Kumar',
    github: 'https://github.com/avinal',
    linkedin: 'https://www.linkedin.com/in/avinal',
    type: 'team',
    description: ''
  }, { 
    role: 'Technical Writer',
    image:
      'https://avatars.githubusercontent.com/u/62384659?v=4',
    name: 'Anita Ihuman',
    github: 'https://github.com/Anita-ihuman',
    linkedin: 'https://www.linkedin.com/in/anita-ihuman',
    type: 'team',
    description: ''
  }, 
]
