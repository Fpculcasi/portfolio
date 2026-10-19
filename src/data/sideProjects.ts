export type SideProjectLinkKind = 'github' | 'report' | 'slides' | 'demo'

export type SideProjectKind = 'solo' | 'team'

export interface SideProjectLink {
  kind: SideProjectLinkKind
  url: string
  label?: string
}

export interface SideProject {
  title: string
  description: string
  tags: string[]
  kind: SideProjectKind
  links: SideProjectLink[]
}

export const sideProjects: SideProject[] = [
  {
    title: 'Carezze',
    description:
      'Mobile app for tracking medical therapies and neonatal parameters — built for families, caregivers, and anyone managing ongoing health routines.',
    tags: ['Kotlin', 'Android', 'Mobile', 'Health'],
    kind: 'solo',
    links: [{ kind: 'github', url: 'https://github.com/Fpculcasi/Carezze' }],
  },
  {
    title: 'Action/Position Detection via Neural Systems',
    description:
      'Volunteer activity recognition pipeline comparing multiple ML and fuzzy-inference approaches.',
    tags: ['AI', 'Machine Learning', 'Neural Networks', 'ANFIS'],
    kind: 'solo',
    links: [
      {
        kind: 'github',
        url: 'https://github.com/Fpculcasi/Artificial-Intelligence-activity-recognition',
      },
      { kind: 'report', url: 'https://raw.githubusercontent.com/Fpculcasi/Artificial-Intelligence-activity-recognition/refs/heads/master/report/report.pdf' },
    ],
  },
  {
    title: 'Environmental Comfort in Intelligent Ambient',
    description:
      'Smart-building system monitoring light and temperature with occupant feedback via WSN, Android app, and relay node.',
    tags: ['IoT', 'Contiki', 'CoAP', 'RPL', 'Android', 'Smart Building'],
    kind: 'solo',
    links: [
      { kind: 'github', url: 'https://github.com/Fpculcasi/NetwEmbSys-Project' },
      { kind: 'slides', url: 'https://raw.githubusercontent.com/Fpculcasi/Environmental-comfort-in-intelligent-ambient/refs/heads/master/presentazione/Environmental%20comfort%20in%20intelligent%20ambient.pdf' },
    ],
  },
  {
    title: 'CUL8r — See You Later',
    description:
      'Android app for tracking real-world social interactions and surfacing them as a real social graph.',
    tags: ['Android', 'Mobile', 'GPS', 'Ubiquitous Computing'],
    kind: 'solo',
    links: [
      { kind: 'github', url: 'https://github.com/Fpculcasi/CUL8r' },
      { kind: 'slides', url: 'raw.githubusercontent.com/Fpculcasi/CUL8r/refs/heads/master/presentazione/presentazione.pptx' },
    ],
  },
  {
    title: 'Sleepy CoAP Nodes',
    description:
      'Protocol extensions for energy-efficient communication with low-power sensor devices on Contiki.',
    tags: ['IoT', 'Contiki', 'CoAP', 'Cooja'],
    kind: 'team',
    links: [
      { kind: 'github', url: 'https://github.com/Fpculcasi/sleepy-nodes' },
      { kind: 'report', url: 'https://fpculcasi.altervista.org/res/downloads/uni/sleepy_node_main.pdf' },
    ],
  },
  {
    title: 'LZ78 Compressor',
    description: 'Dictionary-based lossless compressor for files and streams, from scratch.',
    tags: ['C', 'Compression', 'Algorithms'],
    kind: 'team',
    links: [{ kind: 'github', url: 'https://github.com/AlessandroMartinelli/LZ78' }],
  },
  {
    title: 'Packets Connector (nm2tcp)',
    description:
      'Packet conversion tool bridging multiple network interfaces and capture formats on top of netmap.',
    tags: ['netmap', 'TCP', 'UDP', 'pcap', 'Networking'],
    kind: 'team',
    links: [
      { kind: 'github', url: 'https://github.com/AlessandroMartinelli/Packet-Connector' },
    ],
  },
  {
    title: 'Akka File Sharing',
    description:
      'Decentralized P2P file sharing over a Chord DHT, built on the Akka actor model with a JavaFX client.',
    tags: ['Akka', 'Chord DHT', 'Distributed Systems', 'JavaFX'],
    kind: 'team',
    links: [
      { kind: 'github', url: 'https://github.com/mesnico/Akka-File-Sharing' },
      { kind: 'slides', url: 'https://fpculcasi.altervista.org/res/downloads/uni/Akka_file%20sharing.pdf' },
    ],
  },
  {
    title: 'IIR Filter for Audio Applications',
    description:
      'Infinite-impulse-response filter designed and implemented on FPGA for real-time audio signal processing.',
    tags: ['FPGA', 'VHDL', 'DSP'],
    kind: 'solo',
    links: [{ kind: 'report', url: 'https://fpculcasi.altervista.org/res/downloads/uni/IIR.pdf' }],
  },
  {
    title: 'Performance Evaluation of Supermarket Tills',
    description:
      'Queueing-theory simulation of checkout systems analyzing customer wait times and till efficiency.',
    tags: ['Queueing Theory', 'Simulation', 'OMNeT++', 'Statistics'],
    kind: 'team',
    links: [
      { kind: 'slides', url: 'https://fpculcasi.altervista.org/res/downloads/uni/PEva_slide.pdf' },
      { kind: 'report', url: 'https://fpculcasi.altervista.org/res/downloads/uni/PEva_doc.pdf' },
    ],
  },
]
