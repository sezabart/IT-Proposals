import { ProposalData } from '../../types/proposal';

export const andrejProposal: ProposalData = {
  id: 'savska-loka-facility',
  title: 'Unified Commercial Infrastructure Plan',
  subtitle: 'Network, Access Control, Security, AV & Expansion Ecosystem for Savska Loka (~60x15m)',
  client: {
    name: 'Andrej',
    role: 'Property Owner & Developer',
    companyOrBuilding: 'Savska Loka Facility',
    location: 'Slovenia',
    buildingSpecs: {
      dimensions: '~60m × 15m (3 Floors: 0, 1, 2 + Outdoor Tents)',
      floors: 3,
      additionalStructures: 'Adjacent Tent Structures & Business Park Gate',
      keyTenants: [
        'Tehnosol (Floor 0)',
        'Flexgrid (Floor 0)',
        'Chinese EV Dealership (Showroom & Offices - Floor 0)',
        'Staff Gym & Changing Facilities (Floor 0)',
        'Coworking Space / Corporate Office Suites (Floor 1)',
        'Executive Conference Center & Event Venue (Floor 2 - Top Floor)'
      ]
    }
  },
  provider: {
    companyName: 'SEZA',
    author: 'Bart',
    email: 'bart@seza.si',
    domain: 'proposals.seza.si'
  },
  createdDate: 'July 2026',
  version: '1.4 - Streamlined Architecture & Corrected Links',
  executiveSummary: {
    pitch: `Building out the technology infrastructure for Savska Loka requires establishing the right foundation from the very start. Local Slovene access control systems often provide handy mobile apps for basic single-company setups, but as a facility grows into a multi-tenant hub, questions arise around long-term scalability, credential isolation across multiple companies, and hardware robustness under heavy daily traffic.

SEZA proposes a 100% unified Ubiquiti UniFi ecosystem. A future-proof infrastructure supporting multi-tenant VLAN isolation, smart door access, ANPR front gate integration, dynamic digital signage, high-impact conference AV, and seamlessly integrated expansion options like NAS backup, VoIP phones, EV charging, and One-Click Identity VPN.`,
    corePhilosophy: 'Single Ecosystem Architecture. Zero Monthly Software Subscriptions. Easily Managed by Any Capable IT Admin.',
    painPointsSolved: [
      {
        legacyIssue: 'Manual Front Gate Bottleneck: Physical guard at the business park entrance requiring drivers to stop and yell out windows.',
        sezaUniFiSolution: 'Automated ANPR Gate Integration: UniFi AI cameras automatically recognize registered tenant license plates to open the barrier, backed by legal GDPR compliance configuration.'
      },
      {
        legacyIssue: 'Siloed Video Systems: Traditional camera installations with separate apps, slow playback, and external cloud dependencies.',
        sezaUniFiSolution: 'UniFi Protect 4K AI Cameras: On-premise encrypted NVR storage, zero monthly cloud fees, smart AI object detection, and instant mobile timeline scrubbing.'
      },
      {
        legacyIssue: 'Single-Tenant Access Systems: Basic local access setups with mobile apps that struggle with complex multi-company role segregation and scaling.',
        sezaUniFiSolution: 'UniFi Access & Identity Endpoint: Robust touch readers paired with UniFi Identity Endpoint—giving employees and tenants a single app for Wi-Fi, doors, and guest privileges.'
      },
      {
        legacyIssue: 'Outdated Dim Conference Projectors: Blurry image quality under bright sunlight, frequent bulb replacements, and tangled HDMI cabling.',
        sezaUniFiSolution: 'Direct-View LED Video Wall + UniFi AV IP Transceivers: High-brightness ambient-light LED panels paired with UniFi AV IP Transceivers for seamless 4K video distribution.'
      }
    ]
  },
  zones: [
    {
      id: 'ground-floor',
      name: 'Ground Floor (Floor 0)',
      floor: 'Floor 0 (Ground)',
      iconName: 'Car',
      description: 'Houses Tehnosol, Flexgrid, and the Chinese EV Dealership (showroom & offices), plus staff changing rooms and future gym.',
      tenantsOrUsage: ['Tehnosol', 'Flexgrid', 'Chinese EV Showroom', 'Gym & Changing Rooms'],
      unifiSolutions: [
        {
          title: 'Dynamic Showroom Signage & Display Cast',
          description: 'UniFi Display Cast media players plugged into showroom monitors displaying high-definition electric vehicle specs, promotional videos, and announcements.',
          keyTech: ['UniFi Display Cast', 'UniFi Connect Displays', 'HDMI Media Players']
        },
        {
          title: 'Showroom & Changing Room Door Access',
          description: 'UniFi Access G2 Touch readers installed on entrance doors, changing rooms, and staff gym, granting customized access levels for employees vs customers.',
          keyTech: ['UniFi Access Reader G2 Touch', 'NFC Keyfobs', 'UniFi Identity Endpoint App']
        },
        {
          title: 'High-Density Showroom & Office Wi-Fi 7',
          description: 'Ceiling-mounted UniFi U7-Pro access points delivering gigabit multi-band wireless for EV diagnostic tools, staff workstations, and isolated guest networks.',
          keyTech: ['UniFi U7-Pro AP', 'Multi-Tenant VLAN Isolation', 'Guest Portal']
        }
      ]
    },
    {
      id: 'coworking-floor-1',
      name: 'Coworking & Corporate Offices (Floor 1)',
      floor: 'Floor 1',
      iconName: 'Building2',
      description: 'Flexible coworking layout on Floor 1, engineered to easily convert into dedicated private corporate company suites as tenants grow.',
      tenantsOrUsage: ['Coworking Members', 'Private Office Suites', 'Future Corporate Tenants'],
      unifiSolutions: [
        {
          title: 'Multi-Tenant VLAN Network Separation',
          description: 'Each company or coworking subscriber operates on a private, isolated VLAN network with zero cross-tenant visibility, powered by 10G/2.5G UniFi Enterprise Switches.',
          keyTech: ['UniFi Switch Enterprise 48 PoE', 'Dynamic 802.1X VLANs', 'Isolated Subnets']
        },
        {
          title: 'UniFi Identity Endpoint Onboarding',
          description: 'Employees download the UniFi Identity Endpoint app to automatically receive Wi-Fi credentials, door access permissions, and VPN configuration.',
          keyTech: ['UniFi Identity Endpoint', 'One-Click Mobile Onboarding', 'Temporary QR Invites']
        },
        {
          title: 'Shared Meeting Room Signage & Schedules',
          description: 'Wall-mounted UniFi Connect Displays outside shared meeting rooms showing real-time calendar availability and room booking status.',
          keyTech: ['UniFi Connect Display 13"', 'Live Schedule Integration']
        }
      ]
    },
    {
      id: 'top-floor-conference-2',
      name: 'Executive Conference Center (Floor 2)',
      floor: 'Floor 2 (Top Floor)',
      iconName: 'Tv',
      description: 'Top floor (~60x15m building apex) dedicated to large corporate events, international conferences, and company town halls.',
      tenantsOrUsage: ['Building-Wide Conferences', 'Corporate Events', 'Client Product Unveils', 'Executive Board Meetings'],
      unifiSolutions: [
        {
          title: 'Direct-View LED Video Wall + UniFi AV IP Transceivers',
          description: 'High-brightness Direct-View LED video wall (SEZA recommended display solution) fed by UniFi AV IP Transceivers over 10G ethernet for zero-latency 4K video routing.',
          keyTech: ['Direct-View LED Video Wall', 'UniFi AV IP Transceiver', '4K HDMI Matrix Routing']
        },
        {
          title: 'UniFi Connect Ceiling Audio Distribution',
          description: 'Balanced spatial audio distribution across Floor 2 powered by UniFi Audio Amplifiers and high-fidelity ceiling acoustic speakers.',
          keyTech: ['UniFi Audio Amplifiers', 'Ceiling Acoustic Speakers', 'Zone Volume Control']
        },
        {
          title: 'High-Capacity Event Wi-Fi 7',
          description: 'High-density UniFi U7 Pro access points supporting 300+ simultaneous event attendees without performance degradation.',
          keyTech: ['UniFi U7 Pro', 'Capacitive Guest Wi-Fi', 'Bandwidth Shaping']
        }
      ]
    },
    {
      id: 'exterior-gate-tents',
      name: 'ANPR Gate, Perimeter & Adjacent Tents',
      floor: 'Exterior & Business Park Entrance',
      iconName: 'ShieldCheck',
      description: 'Business park entry gate, outdoor parking lot, perimeter security, and adjacent outdoor tent structures.',
      tenantsOrUsage: ['Tenant Vehicles', 'Delivery Trucks', 'Outdoor Event Tents', 'Perimeter Parking'],
      unifiSolutions: [
        {
          title: 'ANPR Front Gate Integration & Legal Compliance',
          description: 'High-speed UniFi AI LPR camera captures incoming license plates to automatically operate the gate barrier. Configured with localized storage and privacy masking to comply with EU/GDPR regulations.',
          keyTech: ['UniFi AI Bullet / DSLR LPR', 'UniFi Access Intercom', 'GDPR Privacy Masking']
        },
        {
          title: 'Adjacent Tent Structure Weatherproof Wi-Fi',
          description: 'IP67-rated UniFi Outdoor access points extending seamless high-speed Wi-Fi 7 to all adjacent outdoor tent structures.',
          keyTech: ['UniFi Outdoor U7 APs', 'Weatherproof PoE Switches', 'Long-Range Wireless Bridge']
        },
        {
          title: '24/7 AI Perimeter Surveillance',
          description: 'AI 360-degree and Bullet cameras monitoring parking zones, EV charging stations, and perimeter fences with real-time night vision AI tracking.',
          keyTech: ['UniFi Protect AI PTZ', 'UniFi Protect AI 360', 'UNVR-Pro Encrypted NVR']
        }
      ]
    }
  ],
  pillars: [
    {
      id: 'network-backbone',
      title: 'Redundant Network Backbone',
      subtitle: 'Enterprise 10G/2.5G Switching & Dual-WAN Failover',
      icon: 'Network',
      badge: 'Core Infrastructure',
      color: 'from-blue-500 to-cyan-500',
      summary: 'A rock-solid network backbone designed to handle multi-company bandwidth isolation, voice traffic, high-bitrate AV video streams, and backup internet/power failover.',
      features: [
        {
          title: 'Dual ISP Internet Failover (WAN 1 + WAN 2)',
          description: 'Automatic instantaneous failover between primary fiber and secondary backup link ensuring zero operational downtime for Savska Loka tenants.',
          highlight: 'Zero Downtime Failover'
        },
        {
          title: 'Uninterruptible UPS Battery Backup',
          description: 'Rack-mounted UPS battery units keeping switches, security cameras, and gate controllers powered during grid outages.',
          highlight: 'Power Outage Protection'
        },
        {
          title: 'Multi-Tenant Network Virtualization (VLANs)',
          description: 'Cryptographic separation between Tehnosol, Flexgrid, EV Dealership, Coworking members, and Public Guests.',
          highlight: 'Isolated Subnets'
        }
      ],
      hardwareHighlights: [
        { model: 'UniFi Cloud Gateway Enterprise / Dream Machine SE', role: '10G Core Gateway Router', url: 'https://ui.com/eu/en/cloud-gateways', isUniFi: true, description: '10Gbps enterprise core routing engine' },
        { model: 'UniFi Switch Enterprise 48 PoE', role: '2.5G/10G High-Power PoE Distribution', url: 'https://ui.com/eu/en/switching', isUniFi: true, description: 'High-density 2.5G PoE+ switch with 10G SFP+ uplinks' },
        { model: 'UniFi U7-Pro Access Points', role: 'Wi-Fi 7 Multi-Band Wireless', url: 'https://ui.com/eu/en/wifi', isUniFi: true, description: 'Tri-band Wi-Fi 7 access point for ultra-low latency' },
        { model: 'UniFi Power RPS & Battery UPS', role: 'Redundant Power System', url: 'https://ui.com/eu/en/integrations/power-tech/ups-solutions', isUniFi: true, description: 'Rackmount power failover and battery backup' }
      ]
    },
    {
      id: 'access-control',
      title: 'Smart Access & Identity Endpoint',
      subtitle: 'Touch Readers, Mobile Credentials & Scalable Architecture',
      icon: 'Key',
      badge: 'Security & Access',
      color: 'from-emerald-500 to-teal-500',
      summary: 'While local Slovene app-based access products handle single-company doors well, UniFi Access delivers long-term enterprise scalability, multi-tenant credential isolation, and extreme hardware robustness.',
      features: [
        {
          title: 'UniFi Identity Endpoint App',
          description: 'Employees and coworking members use a single smartphone app to unlock doors, connect to corporate Wi-Fi, and access VPN services effortlessly.',
          highlight: 'One-Stop Mobile Setup'
        },
        {
          title: 'Heavy-Duty Touch Readers & Mobile NFC',
          description: 'Weatherproof G2 Touch readers with integrated cameras supporting Apple Wallet, NFC keyfobs, PIN codes, and mobile unlocking.',
          highlight: 'Robust & Scalable'
        },
        {
          title: 'Visitor & Contractor Pass Invites',
          description: 'Send temporary PIN codes or smartphone passes to conference guests and EV car buyers.',
          highlight: 'Instant Visitor Credentials'
        }
      ],
      hardwareHighlights: [
        { model: 'UniFi Access Reader G2 Touch', role: 'Smart Touch Screen Reader', url: 'https://ui.com/eu/en/door-access', isUniFi: true, description: 'Touchscreen door reader with video camera & NFC' },
        { model: 'UniFi Door Access Hub', role: 'Door & Gate Lock Controller', url: 'https://ui.com/eu/en/door-access', isUniFi: true, description: 'PoE-powered controller for magnetic locks & strikes' },
        { model: 'UniFi Identity Endpoint', role: 'One-Stop Mobile & Desktop App', url: 'https://ui.com/identity', isUniFi: true, description: 'Unified identity provisioning app for users & admins' }
      ]
    },
    {
      id: 'camera-surveillance',
      title: '4K AI Video Surveillance',
      subtitle: 'Zero Cloud Subscriptions, Local Encrypted RAID Storage',
      icon: 'Camera',
      badge: 'UniFi Protect',
      color: 'from-indigo-500 to-purple-500',
      summary: 'Replace fragmented camera installations with NDAA-compliant UniFi Protect 4K AI cameras featuring instant smartphone timeline scrubbing and zero monthly fees.',
      features: [
        {
          title: 'Smart AI Object & Vehicle Analytics',
          description: 'Real-time AI detection for people, vehicles, license plates, and perimeter line-crossing with instant push notifications.',
          highlight: 'AI Detection'
        },
        {
          title: 'On-Premise Encrypted RAID Storage',
          description: 'Camera footage recorded 24/7 on local hard drives inside your rack. No external cloud dependencies or recurring fees.',
          highlight: '$0 Monthly Subscriptions'
        },
        {
          title: 'Tenant-Specific Camera Views',
          description: 'Assign specific camera feeds (e.g. EV showroom or parking lot) to specific tenant managers while preserving private areas.',
          highlight: 'Role-Based Access'
        }
      ],
      hardwareHighlights: [
        { model: 'UniFi Network Video Recorder Pro (UNVR-Pro)', role: '7-Bay RAID NVR Storage', url: 'https://ui.com/eu/en/physical-security', isUniFi: true, description: 'Enterprise 7-drive NVR for months of 4K recording' },
        { model: 'UniFi Protect AI Bullet & AI 360', role: '4K AI Security Cameras', url: 'https://ui.com/eu/en/physical-security', isUniFi: true, description: 'High-resolution AI detection cameras with night vision' }
      ]
    },
    {
      id: 'dynamic-signage',
      title: 'Dynamic Digital Signage & Media',
      subtitle: 'UniFi Display Cast & Connect Media Displays',
      icon: 'Tv',
      badge: 'UniFi Connect',
      color: 'from-amber-500 to-orange-500',
      summary: 'Transform screens across Savska Loka into centralized, remotely updated digital signage for EV specs, coworking schedules, and conference wayfinding.',
      features: [
        {
          title: 'UniFi Display Cast Media Players',
          description: 'Compact micro-hardware plugged into HDMI monitors turning standard TVs into dynamic digital signage managed centrally.',
          highlight: 'Plug & Play HDMI Players'
        },
        {
          title: 'EV Dealership Showroom Displays',
          description: 'Broadcast electric car promotional videos, charging specs, and customer greetings in the Floor 0 showroom.',
          highlight: 'Showroom Marketing'
        },
        {
          title: 'Meeting Room Schedules & Wayfinding',
          description: 'Display live room availability outside conference suites and directional maps for event attendees.',
          highlight: 'Automated Room Status'
        }
      ],
      hardwareHighlights: [
        { model: 'UniFi Display Cast', role: 'HDMI Smart Signage Media Player', url: 'https://ui.com/eu/en/integrations/premium-iot/digital-signage', isUniFi: true, description: 'Compact PoE HDMI media player for digital signage' },
        { model: 'UniFi Connect Display 13" / 21"', role: 'Interactive Touch Panel', url: 'https://ui.com/eu/en/integrations/premium-iot/digital-signage', isUniFi: true, description: 'HD touch display panel for room scheduling & signage' }
      ]
    },
    {
      id: 'top-floor-av',
      title: 'Next-Gen Conference Center AV',
      subtitle: 'Direct-View LED Video Wall & UniFi Premium Audio',
      icon: 'Radio',
      badge: 'Floor 2 AV Solution',
      color: 'from-purple-500 to-indigo-600',
      summary: 'Equip Floor 2 with a high-brightness Direct-View LED video wall (SEZA recommended display panel) paired with UniFi AV IP Transceivers and UniFi Premium Audio.',
      features: [
        {
          title: 'Direct-View LED Video Wall (SEZA Recommended Display)',
          description: 'Crisp, high-contrast LED panel wall that looks vibrant under bright ambient room lighting without closing blinds.',
          highlight: 'High Ambient Brightness'
        },
        {
          title: 'UniFi AV IP Transceiver Matrix Routing',
          description: 'Low-latency 4K AV over IP distribution over standard ethernet cabling, allowing seamless laptop sharing and video routing.',
          highlight: 'Zero-Lag 4K AV-over-IP'
        },
        {
          title: 'UniFi Premium Ceiling Audio System',
          description: 'Balanced audio distribution across the Floor 2 conference hall using UniFi Audio Amplifiers and ceiling speakers.',
          highlight: 'Clear Acoustic Coverage'
        }
      ],
      hardwareHighlights: [
        { model: 'Direct-View Micro-LED Video Wall', role: 'Main Conference Display (SEZA Panel)', url: '', isUniFi: false, description: 'High-brightness commercial LED panel video wall' },
        { model: 'UniFi AV IP Transceiver', role: '4K AV-over-IP Video Streamer', url: 'https://ui.com/eu/en/integrations/premium-iot/digital-signage', isUniFi: true, description: 'Ultra-low latency HDMI over IP transceiver' },
        { model: 'UniFi Audio Amplifier & Ceiling Speakers', role: 'Zone Audio Distribution', url: 'https://ui.com/eu/en/integrations/premium-iot/premium-audio', isUniFi: true, description: 'PoE audio amplifier and ceiling speakers' }
      ]
    },
    {
      id: 'easy-administration',
      title: 'Effortless IT Administration',
      subtitle: 'Never Stuck — Manageable by Any Capable IT Admin',
      icon: 'Shield',
      badge: 'Owner Peace of Mind',
      color: 'from-emerald-400 to-green-600',
      summary: 'The system is engineered using standard, clean UniFi protocols. You are never locked into any single technician or vendor—any capable IT administrator can manage it with ease.',
      features: [
        {
          title: 'Zero Monthly Software Fees',
          description: '$0 ongoing management licenses or software subscriptions. Predictable capital expenditure with zero recurring software trap.',
          highlight: '$0 Monthly Subscriptions'
        },
        {
          title: 'Intuitive & Standardized Dashboard',
          description: 'Clean dashboard layout makes network configuration, door permissions, and camera playback straightforward for internal staff.',
          highlight: 'User-Friendly Admin'
        },
        {
          title: 'UniFi Identity Endpoint Integration',
          description: 'Centralized identity provisioning allows adding or removing employees across Wi-Fi, doors, and VPN in seconds.',
          highlight: 'Instant User Provisioning'
        }
      ],
      hardwareHighlights: [
        { model: 'UniFi Cloud Console', role: 'Global Remote Console', url: 'https://ui.com/eu/en/cloud-gateways', isUniFi: true, description: 'Centralized management dashboard accessible anywhere' },
        { model: 'SEZA Documentation Package', role: 'As-Built Diagrams & Operational Manual', url: '', isUniFi: false, description: 'Complete cable drop labels and network topology diagrams' }
      ]
    }
  ],
  extras: [
    {
      id: 'extra-nas',
      title: 'Central Network Attached Storage (NAS)',
      category: 'Data Storage & Backups',
      icon: 'HardDrive',
      summary: 'Centralized, high-speed multi-terabyte network storage (UniFi UNAS) for Savska Loka facility backups, media asset storage for Tehnosol & EV dealership, and shared tenant file shares.',
      benefits: [
        'High-speed 10G RAID file storage for large 4K video promos, architectural files, and business archives.',
        'Automated local & remote offsite backup snapshots with granular tenant folder permissions.',
        'Zero cloud storage fees—keep all media and company data 100% on-premise.'
      ],
      hardware: [
        { model: 'UniFi UNAS Pro / UNAS 8-Bay', role: '10G Enterprise NAS Enclosure', url: 'https://ui.com/eu/en/integrations/network-storage', isUniFi: true, description: 'High-performance 10G NAS rackmount storage server' }
      ]
    },
    {
      id: 'extra-voip',
      title: 'Managed VoIP Telephony System',
      category: 'Business Communications',
      icon: 'PhoneCall',
      summary: 'UniFi Talk business VoIP telephone solution for the front reception desk, dealership sales representatives, and tenant private office suites.',
      benefits: [
        'Sleek HD touchscreen desk phones (UniFi Talk Touch Max) with caller ID and call transfer routing.',
        'Automated attendant IVR ("Press 1 for EV Sales, Press 2 for Tehnosol, Press 3 for Coworking").',
        'Mobile app extension integration allowing staff to answer office desk calls from their smartphone anywhere.'
      ],
      hardware: [
        { model: 'UniFi Talk Touch Max Phone', role: 'HD Touchscreen VoIP Phone', url: 'https://ui.com/eu/en/integrations/managed-voip', isUniFi: true, description: '7" HD touchscreen VoIP phone with camera & smart attendant' },
        { model: 'UniFi Talk Application', role: 'Managed Business PBX', url: 'https://ui.com/eu/en/integrations/managed-voip', isUniFi: true, description: 'On-premise VoIP PBX system with zero subscription fees' }
      ]
    },
    {
      id: 'extra-ev-charging',
      title: 'Smart EV Charging Infrastructure',
      category: 'Facility Power & Mobility',
      icon: 'Zap',
      badge: 'EV Dealership Fit',
      summary: 'Integrate smart electric vehicle charging stations in the parking lot and showroom area, optimized for the Chinese EV dealership and visitor charging.',
      benefits: [
        'Dynamic load balancing preventing electrical breaker overload during high EV charging demand.',
        'Integrated RFID card or mobile app authorization for employee charging vs paid visitor charging.',
        'Real-time power consumption metrics logged into the central facility dashboard.'
      ],
      hardware: [
        { model: 'UniFi Drive EV Station', role: 'Commercial Smart EV Charger', url: 'https://ui.com/eu/en/integrations/premium-iot/ev-charging', isUniFi: true, description: 'Commercial smart EV charger with RFID access control' }
      ]
    },
    {
      id: 'extra-vpn-identity',
      title: 'One-Click Identity VPN (UniFi Identity)',
      category: 'Remote Work & Security',
      icon: 'ShieldLock',
      summary: 'Provide secure, encrypted remote access to Savska Loka servers, internal EV diagnostic tools, and private company subnets via the UniFi Identity Endpoint app.',
      benefits: [
        'One-click remote VPN connection on iPhone, Android, Mac, or Windows without setting up complex IPsec/WireGuard keys.',
        'Zero-trust network access (ZTNA): Coworking members only access their private tenant subnet, while Andrej & admins access management feeds.',
        'Instant authorization revocation if an employee leaves or a contractor contract ends.'
      ],
      hardware: [
        { model: 'UniFi Identity Endpoint VPN', role: 'One-Click Zero-Trust VPN', url: 'https://ui.com/identity', isUniFi: true, description: 'Encrypted WireGuard VPN integrated into Identity Endpoint' }
      ]
    }
  ],
  anprGate: {
    title: 'ANPR Front Gate Integration & Legal Compliance',
    overview: 'The main entrance gate to the business park currently relies on a manual guard setup. SEZA proposes an automated Automatic Number Plate Recognition (ANPR / LPR) gate system powered by UniFi AI cameras.',
    legalNote: 'Legal & GDPR Compliance Note: Automatic plate scanning in the EU/Slovenia involves privacy considerations. SEZA ensures full legal compliance by configuring on-premise local storage (no cloud upload), automated retention purge policies, optional tenant opt-in plate registration, and privacy masking blur zones for surrounding public traffic.',
    features: [
      'Automatic Gate Opening for Tenant Vehicles: Arriving tenant vehicles registered in the database trigger barrier opening in <1 second.',
      'UniFi Access Intercom Video Calling: Visitors without registered plates tap the intercom to initiate a video call to reception or staff mobile phones.',
      'Temporary QR Credentials for EV Buyers & Guests: Dealership customers and event attendees receive temporary QR codes on their phone for gate access.',
      'Full Local GDPR Compliance: All license plate logs remain encrypted on your local NVR with automatic 30-day purge cycles.'
    ]
  },
  topFloorAV: {
    locationNote: 'Floor 2 (Top Floor of Savska Loka)',
    ledClarification: 'Note on LED Video Wall: The Direct-View LED panel wall is SEZA’s recommended high-brightness display solution (not a UniFi manufactured display), which integrates directly with UniFi AV IP Transceivers and UniFi Display Cast for video streaming.',
    ledPanelAdvantages: [
      'High-brightness Direct-View LED panels look vivid under direct daylight on Floor 2 without needing blackout blinds.',
      'Instant On/Off with zero warm-up period or bulb replacement costs over 100,000 operational hours.',
      'Ultra-thin modern wall-mounted aesthetic matching Savska Loka’s premium architecture.',
      'Fed via UniFi AV IP Transceivers over 10G ethernet for seamless 4K presentation switching.'
    ],
    hardware: [
      { model: 'Direct-View Micro-LED Video Wall', role: 'Main Display Screen (SEZA Recommendation)', url: '', isUniFi: false, description: 'High-brightness commercial video wall panel system' },
      { model: 'UniFi AV IP Transceiver', role: '4K AV-over-IP Video Streamer', url: 'https://ui.com/eu/en/integrations/premium-iot/digital-signage', isUniFi: true, description: 'Ultra-low latency HDMI over IP transceiver' },
      { model: 'UniFi Audio Amplifier & Ceiling Speakers', role: 'Zone Audio System', url: 'https://ui.com/eu/en/integrations/premium-iot/premium-audio', isUniFi: true, description: 'PoE audio amplifier and ceiling speakers' }
    ]
  },
  administration: {
    philosophy: 'Never Stuck — Designed so any qualified IT professional can effortlessly maintain, expand, or transfer administration.',
    identityEndpointSummary: 'UniFi Identity Endpoint is the single app employees and tenants need on their phone or laptop to access Wi-Fi, door entry, and VPN permissions.',
    highlights: [
      '$0 Annual Software Licenses across Network, Protect, Access, and Connect.',
      'UniFi Identity Endpoint provides a streamlined setup for all employees & tenants.',
      'Full administrative ownership transferred with comprehensive SEZA cable drop labels & topology map.',
      'Standardized UniFi architecture means you can use SEZA for SLA maintenance or manage internally anytime.'
    ]
  },
  designCenter: {
    title: 'UniFi Design Center Floorplan Simulation',
    subtitle: 'design.ui.com',
    description: 'When Savska Loka’s architectural drawings (PDF / DWG) are available, send them to bart@seza.si. SEZA will simulate exact 3D signal maps, camera field-of-view angles, and rack power calculations on design.ui.com.',
    url: 'https://design.ui.com',
    steps: [
      'Send floorplan drawings (PDF / DWG) directly to bart@seza.si.',
      'SEZA uploads files to design.ui.com to model 3D Wi-Fi 7 signal wall attenuation heatmaps.',
      'Simulate exact camera lens coverage angles and ANPR gate capture zones.',
      'Generate exact PoE wattages, cable drop counts, and rack enclosure bill-of-materials.'
    ]
  }
};
