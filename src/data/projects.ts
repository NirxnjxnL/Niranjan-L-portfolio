export type ProjectSection = {
  title: string;
  content: string[];
  imagePlaceholder?: string;
  fullWidthImagePlaceholder?: string;
  images?: string[];
  fullWidthImage?: string;
  mainMockup?: string;
  socialPosts?: string[];
};

export type StandardProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  industry: string;
  location: string;
  timeline: string;
  role: string;
  deliverables: string;
  heroImage?: string;
  sections: ProjectSection[];
  finalStatement?: string;
  tools?: string[];
};

export type EditorialProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
  deliverables: string[];
  heroImage: string;
  executiveSummary: string;
  overview: { title: string; text: string; };
  theChallenge: { title: string; text: string; question: string; };
  research: string[];
  strategy: {
    vision: string;
    mission: string;
    positioning: string;
    values: string;
    personality: string;
    keywords: string;
    audience: string;
  };
  creativeDirection: {
    objectives: string[];
    text: string;
  };
  conceptDevelopment: {
    title: string;
    text: string;
    sketches?: string[];
  };
  theConcept: {
    title: string;
    text: string;
    image: string;
  };
  identitySystem: {
    colorsText: string;
    typographyText: string;
    brandElementsText: string;
    image: string;
    alternateLogos: string[];
  };
  uiDesign?: {
    text?: string;
    screens: string[];
  };
  applications?: {
    merch: string[];
    environment: string[];
  };
  results: {
    outcomes: string;
    reflection: string;
  };
  tools?: string[];
};

export type CollectionProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  collections: {
    title: string;
    description: string;
    skills: string[];
    items: {
      title: string;
      description: string;
      image: string;
    }[];
  }[];
  tools?: string[];
};

export type ProjectData = StandardProjectData | EditorialProjectData | CollectionProjectData;

export const projectsData: ProjectData[] = [
  {
    slug: "lavender-lily",
    title: "Lavender Lily",
    subtitle: "Building a Premium Brand Identity for a Home-Based Artisan Bakery",
    type: "Client Project",
    industry: "Food & Beverage",
    location: "Vellore, Tamil Nadu",
    timeline: "2024",
    role: "Brand Identity Designer, Graphic Designer, Packaging Designer",
    deliverables: "Brand Strategy, Logo Design, Visual Identity, Packaging, Menu, Instagram Branding",
    heroImage: "/images/lavender-lily/kit.png",
    sections: [
      {
        title: "01 — THE CHALLENGE",
        content: [
          "Lavender Lily needed a visual identity that felt handcrafted, elegant, and memorable without depending on common bakery clichés like bread loaves and chef hats.",
          "The challenge was to create a premium artisan brand that communicates freshness, craftsmanship, and warmth, establishing trust from the very first interaction."
        ],
        fullWidthImage: "/images/lavender-lily/kit.png"
      },
      {
        title: "02 — DISCOVERY / DIRECTION",
        content: [
          "I prioritized understanding the bakery's operational workflow—from ordering and menu planning to packaging and Instagram delivery.",
          "The direction: Avoid generic bakery symbols and overly colorful branding. Focus on simplicity, build a flexible premium system, and keep the baked products as the hero."
        ]
      },
      {
        title: "03 — IDENTITY",
        content: [
          "Instead of relying on another illustration of bread, the identity takes inspiration from wheat—the beginning of many baked products. This creates a cleaner, more memorable symbol.",
          "A refined serif typeface establishes the premium personality, supported by a clean sans-serif for menus and digital communication."
        ],
        fullWidthImage: "/images/lavender-lily/main-logo.png"
      },
      {
        title: "04 — BRAND SYSTEM",
        content: [
          "Soft purple represents creativity and a premium experience, while warm beige introduces comfort and homemade authenticity."
        ],
        images: ["/images/lavender-lily/logo.png", "/images/lavender-lily/name.png"]
      },
      {
        title: "05 — APPLICATIONS",
        content: [
          "The complete visual system works consistently across packaging, menus, and customer communication to build trust."
        ],
        images: ["/images/lavender-lily/packaging-design.png", "/images/lavender-lily/sticker.png"],
        fullWidthImage: "/images/lavender-lily/menu.png"
      },
      {
        title: "06 — DIGITAL PRESENCE",
        content: [
          "Designed to support the launch of Lavender Lily's first digital presence, keeping the aesthetics cohesive and professional."
        ],
        mainMockup: "/images/lavender-lily/ig-profile.jpg",
        socialPosts: [
          "/images/lavender-lily/post-1.webp", 
          "/images/lavender-lily/post-2.png", 
          "/images/lavender-lily/post-3.jpeg", 
          "/images/lavender-lily/post-4.jpeg"
        ]
      },
      {
        title: "07 — RESULT / REFLECTION",
        content: [
          "Lavender Lily was my first complete branding project. It taught me that successful branding is not defined by a logo alone, but begins with understanding the business and creating a visual system that works consistently across every touchpoint."
        ]
      }
    ],
    finalStatement: "A handcrafted brand identity designed to help a passion-driven bakery launch with confidence, consistency, and a memorable customer experience.",
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    slug: 'poster-explorations',
    title: 'Posters & Promotional Creatives',
    subtitle: 'Marketing Campaigns & Personal Explorations',
    description: 'A curated collection of professional marketing campaigns designed for JASMI India, alongside self-initiated poster designs exploring composition, typography, and visual storytelling.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
    collections: [
      {
        title: 'JASMI Promotional Creatives',
        description: 'Creating Marketing Campaigns for a Furniture Brand\n\nA collection of promotional creatives designed for JASMI India, a furniture manufacturing company. The work focuses on festive campaigns, recruitment advertising, and brand communication created to strengthen the company\'s digital presence while maintaining a professional and consistent visual identity.',
        skills: ['Marketing Campaign Design', 'Social Media Design', 'Promotional Advertising', 'Brand Consistency', 'Layout Design', 'Typography', 'Visual Hierarchy', 'Client Communication'],
        items: [
          {
            title: 'Diwali Campaign',
            description: 'A festive promotional poster created to celebrate Diwali while maintaining the visual identity of JASMI. Traditional Indian illustrations, festive colors, and elegant typography were combined to create an engaging campaign that reflects both the occasion and the brand\'s premium image.',
            image: '/images/jasmi/jasmi-diwali.jpg'
          },
          {
            title: 'Recruitment Campaign',
            description: 'Designed a hiring creative to announce career opportunities at JASMI. The layout emphasizes clarity, readability, and structured information hierarchy while maintaining consistency with the company\'s visual identity, making it suitable for digital recruitment and social media promotion.',
            image: '/images/jasmi/jasmi-recruitment.png'
          }
        ]
      },
      {
        title: 'Personal Explorations',
        description: 'Exploring Creativity Beyond Client Work\n\nA curated collection of self-initiated poster designs created to experiment with composition, typography, image manipulation, and visual storytelling across sports, automotive, motorsport, and cinema. These projects allowed me to explore different creative styles, strengthen my technical skills, and continuously push my design abilities beyond commercial work.',
        skills: ['Poster Design', 'Creative Direction', 'Editorial Layout', 'Typography', 'Photo Manipulation', 'Visual Storytelling', 'Composition', 'Color Theory'],
        items: [
          {
            title: 'Porsche 911',
            description: 'A retro-inspired automotive poster celebrating the timeless design of the Porsche 911. The artwork combines vintage textures, editorial typography, and layered compositions to create a collectible poster aesthetic.',
            image: '/images/my-posters/poster-porsche.png'
          },
          {
            title: 'Virat Kohli',
            description: 'An editorial-style sports poster that celebrates one of cricket\'s most iconic players through expressive typography, layered imagery, and statistical storytelling. The design explores magazine-inspired layouts while maintaining a dynamic visual composition.',
            image: '/images/my-posters/poster-kohli.png'
          },
          {
            title: 'Hyundai Santro',
            description: 'A conceptual automotive poster designed to present the Hyundai Santro through bold composition, modern typography, and balanced information hierarchy. The project focuses on creating an engaging promotional-style layout for an everyday vehicle.',
            image: '/images/my-posters/poster-santro.png'
          },
          {
            title: 'Formula One',
            description: 'An experimental composition exploring speed, motion, and perspective through Formula One photography. Motion blur, dramatic angles, and minimal typography work together to communicate the excitement and intensity of motorsport.',
            image: '/images/my-posters/poster-f1.jpg'
          },
          {
            title: 'Rocky Balboa',
            description: 'A cinematic tribute poster inspired by the Rocky film series. The design experiments with vintage movie-poster aesthetics, expressive typography, and emotional storytelling to capture the themes of perseverance and determination.',
            image: '/images/my-posters/poster-rocky.jpg'
          }
        ]
      }
    ]
  },
  {
    slug: 'pulse-fit',
    title: 'Pulse Fit',
    subtitle: 'Designing a Bold Brand Identity for a Modern Fitness Community',
    type: 'Concept Project',
    industry: 'Fitness & Health',
    location: 'Concept',
    timeline: 'Concept',
    role: 'Brand Identity Designer, Graphic Designer',
    deliverables: 'Brand Strategy, Logo Design, Visual Identity, Brand Guidelines, Merchandise, Signage',
    heroImage: '/images/pulse-fit/cover.png',
    sections: [
      {
        title: "01 — CONCEPT / CHALLENGE",
        content: [
          "Pulse Fit is a conceptual fitness brand designed to motivate individuals pursuing healthier and stronger lifestyles.",
          "Many fitness brands rely on the same visual language: heavy typography, flames, muscular silhouettes, and dark aggressive aesthetics. The goal was to challenge that convention by focusing on continuous progress rather than intimidation."
        ],
        fullWidthImage: "/images/pulse-fit/cover.png"
      },
      {
        title: "02 — CONCEPT DEVELOPMENT",
        content: [
          "The Pulse Fit logo combines two meaningful ideas into a single symbol.",
          "The heartbeat (EKG) line represents life, movement, endurance, and continuous progress. The letter P forms the foundation of the symbol, connecting the brand name with the concept of performance and personal growth."
        ],
        images: [
          '/images/pulse-fit/blueprint-main.png', 
          '/images/pulse-fit/blueprint-secondary.png'
        ]
      },
      {
        title: "03 — IDENTITY DIRECTION",
        content: [
          "A vibrant lime green symbolizes vitality and momentum, while deep black communicates strength and focus.",
          "A bold geometric sans-serif typeface creates confidence and impact, with graphic patterns derived from the heartbeat motif reinforcing the concept of continuous movement."
        ],
        fullWidthImage: '/images/pulse-fit/identity-colors.png'
      },
      {
        title: "04 — BRAND APPLICATIONS",
        content: [
          "The visual language combines minimal forms, dynamic compositions, and high contrast to create a modern fitness experience across apparel, gym interiors, and promotional materials."
        ],
        images: [
          '/images/pulse-fit/merch-apparel.png', 
          '/images/pulse-fit/merch-bag.png', 
          '/images/pulse-fit/merch-bottle.png',
          '/images/pulse-fit/merch-model.png'
        ]
      },
      {
        title: "05 — FINAL IDENTITY",
        content: [
          "Together, these elements communicate that fitness is not defined by one workout but by every heartbeat and every step toward improvement."
        ],
        fullWidthImage: '/images/pulse-fit/final-logo.jpg'
      },
      {
        title: "06 — REFLECTION",
        content: [
          "Pulse Fit reinforced the importance of developing visual identities that communicate ideas rather than simply decorating products. The experience strengthened my ability to build cohesive brands capable of adapting across multiple touchpoints."
        ]
      }
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    slug: 'flowy',
    title: 'Flowy',
    subtitle: 'Designing a Calm Digital Experience for Everyday Wellness',
    type: 'Concept Project',
    industry: 'Health & Wellness App',
    location: 'Concept',
    timeline: 'Concept',
    role: 'Brand Identity Designer, UI/UX Designer',
    deliverables: 'Brand Strategy, Logo Design, Visual Identity, UI Design',
    heroImage: '/images/flowy/cover.png',
    sections: [
      {
        title: "01 — CONCEPT",
        content: [
          "Flowy is a conceptual wellness brand created to help people build healthier daily habits through mindfulness, meditation, breathing exercises, and personal reflection.",
          "Unlike many wellness applications that rely on overwhelming interfaces, Flowy focuses on simplicity, clarity, and emotional comfort."
        ],
        fullWidthImage: '/images/flowy/cover.png'
      },
      {
        title: "02 — CREATIVE DIRECTION",
        content: [
          "Many wellness apps compete by adding more features, resulting in information overload.",
          "Flowy's identity embraces minimal layouts, generous white space, rounded shapes, and soft visual elements to reduce cognitive load and create an experience that feels peaceful and approachable."
        ],
        fullWidthImage: '/images/flowy/identity-system.png'
      },
      {
        title: "03 — IDENTITY",
        content: [
          "Inspired by natural flow and mindful breathing, the logo uses soft curves and minimal forms.",
          "Soft greens symbolize growth and balance, while gentle blues convey trust and relaxation. A clean modern sans-serif typeface improves readability while supporting the calm personality."
        ],
        fullWidthImage: '/images/flowy/final-logo.png'
      },
      {
        title: "04 — DIGITAL EXPERIENCE",
        content: [
          "The design system creates consistency across every screen while improving usability and scalability. Careful hierarchy ensures information remains easy to scan without overwhelming users."
        ],
        images: [
          '/images/flowy/ui-welcome.png',
          '/images/flowy/ui-home.png'
        ]
      },
      {
        title: "05 — APPLICATIONS",
        content: [
          "Every decision—from typography and color to navigation and layout—was guided by the goal of making users feel calm, supported, and focused."
        ],
        images: [
          '/images/flowy/ui-activity.png',
          '/images/flowy/logo-secondary.png',
          '/images/flowy/logo-icon.png'
        ]
      },
      {
        title: "06 — REFLECTION",
        content: [
          "Designing Flowy strengthened my understanding of user-centered design and reinforced the importance of creating systems that are both visually cohesive and functionally intuitive."
        ]
      }
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    slug: 'gnani-ai',
    title: 'Gnani.ai',
    subtitle: 'Enterprise Voice AI Marketing Design',
    type: 'Design Assignment',
    industry: 'Enterprise AI & SaaS',
    location: 'Bengaluru',
    timeline: '2026',
    role: 'Graphic Designer',
    deliverables: 'Enterprise Presentation Slides, LinkedIn Creatives',
    sections: [
      {
        title: "Overview",
        content: [
          "This project was completed as part of the internship selection process for Gnani.ai.",
          "The assignment required designing enterprise presentation slides and LinkedIn creatives that aligned with the company's existing brand language."
        ]
      },
      {
        title: "The Challenge",
        content: [
          "Communicate complex AI technologies through clean and engaging visual communication while maintaining enterprise presentation standards."
        ]
      },
      {
        title: "Research",
        content: [
          "To ensure brand consistency and understand their visual communication style, I studied:",
          "**1. Website & LinkedIn Presence:** Analyzed how they position their AI products to enterprise clients.",
          "**2. Typography & Color Palette:** Identified their primary brand colors and font pairings.",
          "**3. Layout System & Visual Hierarchy:** Studied how they structure complex information.",
          "**4. Enterprise Communication Style:** Ensured the tone and aesthetic met B2B corporate standards."
        ]
      },
      {
        title: "Design Process",
        content: [
          "The project evolved through a structured design process to ensure the final deliverables met enterprise standards:",
          "**Moodboard → Wireframes → Initial Layouts → Iterations → Final Presentation**"
        ]
      },
      {
        title: "Final Deliverables",
        content: [
          "**Presentation Slides:** Designed to clearly present Gnani.ai's voice AI capabilities using a clean, enterprise-focused layout.",
          "**LinkedIn Creatives:** Created engaging social media graphics tailored for professional networking."
        ],
        images: [
          "/images/gnani-ai/slide-1.png",
          "/images/gnani-ai/slide-2.png",
          "/images/gnani-ai/poster-1.png",
          "/images/gnani-ai/poster-2.png"
        ]
      },
      {
        title: "Reflection",
        content: [
          "This assignment was a valuable deep-dive into B2B and enterprise design. I learned how to handle information hierarchy for complex technical content, ensuring it remains digestible for corporate audiences without losing its sophisticated edge. It reinforced the importance of strictly adhering to an existing visual language while elevating the communication style."
        ]
      }
    ]
  },
  {
    slug: 'table-space',
    title: 'Table Space',
    subtitle: 'Internal Communication Campaign',
    type: 'Design Assignment',
    industry: 'Premium Workspace Solutions',
    location: 'Bengaluru',
    timeline: '2026',
    role: 'Graphic Designer',
    deliverables: 'Poster Design, Presentation',
    sections: [
      {
        title: "Overview",
        content: [
          "This project was completed as part of the internship selection process for Table Space.",
          "The objective was to create an internal employee engagement campaign promoting 'Ideas in Action'—a platform for idea sharing within the organization."
        ]
      },
      {
        title: "The Challenge",
        content: [
          "Design an internal communication campaign that motivates employees to contribute ideas while maintaining Table Space's premium corporate visual identity."
        ]
      },
      {
        title: "Research",
        content: [
          "To align with Table Space's premium aesthetic, I studied:",
          "**1. Website & Instagram:** Analyzed their visual language and brand positioning.",
          "**2. Typography & Grid System:** Identified their structured layout approach.",
          "**3. Internal Communication Style:** Researched how premium workspaces communicate internally to maintain sophistication."
        ]
      },
      {
        title: "Design Process",
        content: [
          "The campaign was built through a systematic exploration of layouts and brand elements:",
          "**Research → Layout Exploration → Grid System → Typography → Poster → Presentation**"
        ]
      },
      {
        title: "Final Deliverables",
        content: [
          "**Poster Design:** A premium internal communication poster designed to encourage idea sharing.",
          "**Presentation:** A slide deck explaining the creative direction and campaign rollout."
        ],
        images: [
          "/images/table-space/poster-1.png",
          "/images/table-space/slide-1.png"
        ]
      },
      {
        title: "Reflection",
        content: [
          "This project provided excellent hands-on experience in internal communication design and employee engagement. It challenged me to create work that is highly motivational yet strictly adheres to a premium corporate visual storytelling standard."
        ]
      }
    ]
  }
];
