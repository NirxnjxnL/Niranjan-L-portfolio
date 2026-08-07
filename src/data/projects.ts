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
    industry: "Food & Beverage (Home-Based Artisan Bakery)",
    location: "Vellore, Tamil Nadu",
    timeline: "2024",
    role: "Brand Identity Designer, Graphic Designer, Packaging Designer, Creative Consultant",
    deliverables: "Brand Strategy, Logo Design, Visual Identity, Packaging Design, Menu Design, Instagram Branding, Marketing Creatives, Brand Guidelines",
    heroImage: "/images/lavender-lily/kit.png",
    sections: [
      {
        title: "Executive Summary - Building More Than Just a Logo",
        content: [
          "Lavender Lily is a home-based artisan bakery specializing in handcrafted, 100% eggless baked goods. Founded from a passion for baking, the business was preparing for its first launch and needed a visual identity that reflected the same care and quality found in every product.",
          "Rather than designing only a logo, this project focused on building a complete brand ecosystem that customers could recognize across every interaction. From identity design and packaging to menus, social media assets, and digital touchpoints, every element was created to establish consistency, trust, and professionalism.",
          "Throughout the project, I worked closely with the client to understand the business, refine ideas through multiple design iterations, and support the launch of Lavender Lily's first digital presence. The result was a cohesive branding system that continues to be used across the business today."
        ]
      },
      {
        title: "About the Client - A Passion Turned Into a Brand",
        content: [
          "Lavender Lily is a home-based artisan bakery built around one simple idea: creating fresh, handcrafted, 100% eggless baked goods made with care. The bakery offers artisan breads, babkas, brownies, cheesecakes, savoury bakes, and seasonal products, all prepared in small batches to maintain freshness and quality.",
          "As a newly launching business, Lavender Lily wanted to establish itself as a premium yet approachable bakery that customers could trust. While the products reflected exceptional craftsmanship, the business lacked a visual identity capable of communicating those same values. The objective was to build a recognizable brand that would make customers feel the same warmth and care through its identity as they would through its products."
        ]
      },
      {
        title: "The Challenge - Creating a Brand That Stands Out",
        content: [
          "Many bakery brands rely on familiar visual elements such as bread loaves, chef hats, rolling pins, or decorative illustrations. While recognizable, these symbols often make different bakeries look nearly identical. Lavender Lily needed an identity that felt handcrafted, elegant, and memorable without depending on common bakery clichés.",
          "The challenge extended beyond designing a logo. The brand required a complete visual system that would work consistently across packaging, menus, social media, and customer communication while building trust from the very first interaction.",
          "**Design Challenge:** How might we create a premium artisan bakery brand that communicates freshness, craftsmanship, and warmth while avoiding the visual clichés commonly found in bakery branding?"
        ]
      },
      {
        title: "Discovery, Research & Insights",
        content: [
          "Before opening Illustrator, I spent time understanding how the bakery planned to operate (ordering process, delivery, menu planning, packaging, WhatsApp/Instagram workflow).",
          "**Key Insights:** Avoid generic bakery logos, excessive decorative typography, and overly colorful branding. Prioritize simplicity, create a premium appearance, build a flexible system, and keep the baked products as the hero."
        ]
      },
      {
        title: "Brand Strategy & Direction",
        content: [
          "**Mission:** To create handcrafted, freshly baked eggless products that bring warmth, quality, and happiness to every customer.",
          "**Brand Values:** Freshness, Craftsmanship, Quality, Warmth, Trust, Care, Authenticity.",
          "**Brand Personality:** Elegant, Premium, Homemade, Friendly, Fresh, Natural, Approachable.",
          "**Target Audience:** Families, Working Professionals, Dessert Lovers, Gift Buyers."
        ]
      },
      {
        title: "The Final Identity & System",
        content: [
          "The selected logo represents Lavender Lily through a refined and timeless visual language. Instead of relying on another illustration of bread, the identity takes inspiration from wheat—the beginning of many baked products. This creates a cleaner, more memorable symbol.",
          "Soft purple represents creativity and a premium experience, while warm beige introduces comfort and homemade authenticity. A refined serif typeface establishes the premium personality, supported by a clean sans-serif for menus and digital communication."
        ],
        fullWidthImage: "/images/lavender-lily/main-logo.png"
      },
      {
        title: "Brand Identity System (Icons & Wordmarks)",
        content: [],
        images: ["/images/lavender-lily/logo.png", "/images/lavender-lily/name.png"]
      },
      {
        title: "Packaging Strategy",
        content: [],
        images: ["/images/lavender-lily/packaging-design.png", "/images/lavender-lily/sticker.png"]
      },
      {
        title: "Menu Design",
        content: [],
        fullWidthImage: "/images/lavender-lily/menu.png"
      },
      {
        title: "Digital Presence",
        content: [],
        mainMockup: "/images/lavender-lily/ig-profile.jpg",
        socialPosts: [
          "/images/lavender-lily/post-1.webp", 
          "/images/lavender-lily/post-2.png", 
          "/images/lavender-lily/post-3.jpeg", 
          "/images/lavender-lily/post-4.jpeg",
          "/images/lavender-lily/post-5.jpeg",
          "/images/lavender-lily/post-6.jpeg",
          "/images/lavender-lily/post-7.jpeg"
        ]
      },
      {
        title: "Results & Reflection",
        content: [
          "**Outcomes:** Complete brand identity created, Successful launch support, Professional digital presence established, Consistent packaging system, Long-term client relationship.",
          "**Reflection:** Lavender Lily was my first complete branding project and one of the most valuable experiences in my design journey. It taught me that successful branding is not defined by a logo alone. It begins with understanding the business, listening to the client, refining ideas through collaboration, and creating a visual system that works consistently across every customer touchpoint."
        ]
      }
    ],
    finalStatement: "A handcrafted brand identity designed to help a passion-driven bakery launch with confidence, consistency, and a memorable customer experience."
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
    description: 'A complete brand identity created to represent strength, energy, discipline, and continuous personal progress through a modern fitness experience.',
    roles: ['Brand Identity Designer', 'Graphic Designer', 'Creative Strategist'],
    deliverables: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines', 'Merchandise', 'Gym Signage', 'Marketing Assets'],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    heroImage: '/images/pulse-fit/cover.png',
    executiveSummary: 'Pulse Fit is a conceptual fitness brand designed to motivate individuals pursuing healthier and stronger lifestyles. Unlike traditional gyms that rely on aggressive visuals and predictable symbols, Pulse Fit was developed around the idea that progress is continuous. Every workout, every heartbeat, and every small improvement contributes to a larger personal transformation.',
    overview: {
      title: 'The Idea Behind Pulse Fit',
      text: 'The fitness industry is highly competitive, with many brands using similar visual styles centered around muscular figures, barbells, flames, or lightning bolts. Pulse Fit was created to challenge that convention by focusing on progress rather than intimidation. The goal was to design a brand that feels modern, energetic, and approachable while still communicating strength and performance.'
    },
    theChallenge: {
      title: 'Breaking Away from Traditional Gym Branding',
      text: 'Many fitness brands rely on the same visual language: heavy typography, flames, muscular silhouettes, barbells, and dark aggressive aesthetics. While effective, these identities often feel repetitive. Pulse Fit needed a visual identity that represented movement, progress, and determination through a unique symbol that customers could instantly recognize.',
      question: 'How might we create a modern fitness identity that communicates movement, energy, and personal growth without relying on common gym stereotypes?'
    },
    research: [
      'Most gym logos depend on equipment icons.',
      'Many identities focus only on physical strength.',
      'Brand personalities often appear intimidating.',
      'Few brands communicate long-term personal progress.'
    ],
    strategy: {
      vision: 'To inspire people to become stronger through consistency rather than perfection.',
      mission: 'To create a motivating fitness environment where every step forward is celebrated.',
      positioning: 'A premium yet approachable fitness brand focused on long-term progress.',
      values: 'Discipline, Consistency, Strength, Energy, Growth, Community, Determination.',
      personality: 'Bold, Energetic, Focused, Modern, Confident, Supportive, Disciplined.',
      keywords: 'Motion, Heartbeat, Strength, Momentum, Progress, Performance, Growth.',
      audience: 'Students, Young Professionals, Fitness Beginners, Experienced Athletes, Anyone pursuing healthier habits.'
    },
    creativeDirection: {
      objectives: [
        'Create a memorable fitness identity.',
        'Represent continuous progress.',
        'Build an energetic visual system.',
        'Ensure scalability across merchandise and interiors.',
        'Develop a clean modern identity.'
      ],
      text: 'The visual language combines bold typography, minimal forms, dynamic compositions, and high contrast to create a modern fitness experience. Rather than relying on decorative graphics, the identity emphasizes movement through simple but meaningful visual elements.'
    },
    conceptDevelopment: {
      title: 'Concept & Design Thinking',
      text: 'Several concepts explored traditional gym imagery before moving toward a more distinctive direction centered on motion and energy. This iterative process helped identify a solution that was both recognizable and conceptually meaningful.',
      sketches: [
        '/images/pulse-fit/blueprint-main.png', 
        '/images/pulse-fit/blueprint-secondary.png'
      ]
    },
    theConcept: {
      title: 'The Story Behind the Identity',
      text: 'The Pulse Fit logo combines two meaningful ideas into a single symbol. The heartbeat (EKG) line represents life, movement, endurance, and continuous progress. The letter P forms the foundation of the symbol, connecting the brand name with the concept of performance and personal growth. Together, these elements communicate that fitness is not defined by one workout but by every heartbeat and every step toward improvement.',
      image: '/images/pulse-fit/final-logo.jpg'
    },
    identitySystem: {
      colorsText: 'The identity uses a vibrant lime green paired with deep black, off-white, and energetic orange accents. Lime green symbolizes vitality, momentum, and growth, while black communicates strength, confidence, and focus. Off-white introduces balance and readability, and orange acts as an accent color to reinforce energy and motivation.',
      typographyText: 'A bold geometric sans-serif typeface forms the foundation of the identity. Strong letterforms create confidence and impact, while clear hierarchy ensures readability across digital interfaces, merchandise, and environmental graphics.',
      brandElementsText: 'Supporting visual elements are derived from the heartbeat motif. These graphic patterns extend the identity into backgrounds, apparel, gym interiors, and promotional materials while reinforcing the concept of continuous movement.',
      image: '/images/pulse-fit/identity-colors.png',
      alternateLogos: [
        '/images/pulse-fit/logo-alt-color.jpg',
        '/images/pulse-fit/logo-secondary-light.png',
        '/images/pulse-fit/logo-secondary-dark.png'
      ]
    },
    applications: {
      merch: [
        '/images/pulse-fit/merch-apparel.png', 
        '/images/pulse-fit/merch-bag.png', 
        '/images/pulse-fit/merch-bottle.png',
        '/images/pulse-fit/merch-model.png'
      ],
      environment: ['/images/pulse-fit/cover.png']
    },
    results: {
      outcomes: 'A bold visual identity designed to inspire movement, celebrate progress, and redefine the experience of modern fitness branding.',
      reflection: 'Pulse Fit allowed me to explore branding beyond aesthetics by designing a complete identity system built around a central concept. The project reinforced the importance of developing visual identities that communicate ideas rather than simply decorating products. From strategy and concept development to applications across physical and digital environments, the experience strengthened my ability to build cohesive brands capable of adapting across multiple touchpoints.'
    }
  },
  {
    slug: 'flowy',
    title: 'Flowy',
    subtitle: 'Designing a Calm Digital Experience for Everyday Wellness',
    description: 'A complete brand identity and mobile application concept designed to encourage mindfulness, healthy habits, and emotional well-being through thoughtful visual design and intuitive user experiences.',
    roles: ['Brand Identity Designer', 'UI/UX Designer', 'Graphic Designer', 'Creative Strategist'],
    deliverables: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'UI Design', 'Mobile Application', 'Brand Guidelines'],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    heroImage: '/images/flowy/cover.png',
    executiveSummary: 'Flowy is a conceptual wellness brand created to help people build healthier daily habits through mindfulness, meditation, breathing exercises, and personal reflection. Unlike many wellness applications that rely on overwhelming interfaces or excessive information, Flowy focuses on simplicity, clarity, and emotional comfort.',
    overview: {
      title: 'The Idea Behind Flowy',
      text: 'Modern lifestyles are increasingly fast-paced, leaving little room for rest, reflection, or mental well-being. Flowy was created as a calm and welcoming digital space where users can develop healthier habits. The objective was to design an experience that feels effortless, approachable, and emotionally reassuring.'
    },
    theChallenge: {
      title: 'Designing Calm in a Digital World',
      text: 'Many wellness apps compete by adding more features, more content, and more complexity. As a result, users often experience information overload instead of relaxation. Flowy needed a visual identity and digital experience that reduced cognitive load while encouraging users to return every day.',
      question: 'How might we create a wellness brand and mobile experience that encourages mindfulness through simplicity, clarity, and emotional comfort?'
    },
    research: [
      'Many interfaces feel cluttered and information hierarchy is inconsistent.',
      'Visual systems vary drastically between screens.',
      'Calm is often communicated only through color instead of the entire user experience.',
      'Opportunities existed to create a more unified and emotionally engaging design system.'
    ],
    strategy: {
      vision: 'To make everyday mindfulness simple, accessible, and enjoyable.',
      mission: 'To help people create healthier daily habits through calm digital experiences.',
      positioning: 'A modern wellness brand focused on creating calm daily routines through intuitive digital experiences.',
      values: 'Calm, Balance, Growth, Simplicity, Well-being, Mindfulness, Consistency.',
      personality: 'Calm, Minimal, Trustworthy, Supportive, Modern, Friendly, Elegant.',
      keywords: 'Flow, Balance, Calm, Mindfulness, Breathing, Growth, Focus, Harmony.',
      audience: 'Students, Working Professionals, People managing stress, Meditation Beginners.'
    },
    creativeDirection: {
      objectives: [
        'Create a calming visual identity.',
        'Develop an intuitive mobile experience.',
        'Reduce visual clutter.',
        'Encourage habit formation.',
        'Build consistency across branding and UI.'
      ],
      text: 'The identity embraces minimal layouts, generous white space, rounded shapes, and soft visual elements to create an experience that feels peaceful and approachable. Rather than using excessive decoration, the design communicates calm through simplicity, consistency, and thoughtful interaction.'
    },
    conceptDevelopment: {
      title: 'Concept & Design Thinking',
      text: 'Multiple concepts explored different approaches to representing flow, breathing, and balance before arriving at a refined identity that visually communicates movement and calm. The interface also evolved through several layout explorations to improve readability and reduce cognitive load.'
    },
    theConcept: {
      title: 'The Story Behind the Identity',
      text: 'The Flowy identity represents movement, balance, and continuous personal growth. Inspired by natural flow and mindful breathing, the logo uses soft curves and minimal forms to create a visual language that feels calm, welcoming, and timeless.',
      image: '/images/flowy/final-logo.png'
    },
    identitySystem: {
      colorsText: 'The color palette combines soft greens, gentle blues, and neutral tones to create a peaceful visual experience. Green symbolizes growth, renewal, and balance, while blue conveys trust, clarity, and relaxation.',
      typographyText: 'A clean modern sans-serif typeface forms the foundation of the identity. Simple typography improves readability across mobile interfaces while supporting the brand\'s calm and approachable personality.',
      brandElementsText: 'Supporting graphic elements are inspired by flowing lines, organic curves, and natural movement. These visual components extend the identity across the application and marketing assets.',
      image: '/images/flowy/identity-system.png',
      alternateLogos: [
        '/images/flowy/logo-secondary.png',
        '/images/flowy/logo-icon.png'
      ]
    },
    uiDesign: {
      text: 'The design system creates consistency across every screen while improving usability and scalability. Careful hierarchy ensures information remains easy to scan without overwhelming users. Every decision—from typography and color to navigation and layout—was guided by the goal of making users feel calm, supported, and focused.',
      screens: [
        '/images/flowy/ui-welcome.png',
        '/images/flowy/ui-home.png',
        '/images/flowy/ui-activity.png'
      ]
    },
    results: {
      outcomes: 'A thoughtfully designed wellness brand that brings together visual identity and digital experience to encourage healthier, calmer everyday routines.',
      reflection: 'Flowy allowed me to combine brand identity design with UI/UX thinking to create a complete digital product experience. The project taught me how branding extends beyond logos into interfaces, interactions, and emotional experiences. Designing Flowy strengthened my understanding of user-centered design and reinforced the importance of creating systems that are both visually cohesive and functionally intuitive.'
    }
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
