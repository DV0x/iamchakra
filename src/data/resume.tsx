import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Chakradhar Dhulipalla",
  initials: "CD",
  url: "https://www.iamchakra.me",
  location: "Vizag, India. Open to remote, Bangalore or Hyderabad",
  locationLink: "",
  description:
    "AI product manager who builds the product and runs the growth. Five paying clients as Creative Machines, a one-person AI studio.",
  summary:
    "I'm Chakradhar, and most people call me Chakra. I'm an AI product manager. I build the product myself and run the growth.\n\nFor the last two years I've done that for five paying clients as Creative Machines (creativemachines.xyz), a one-person AI studio, with every project running on agent workflows I built. For Smacoteq I built a tool that drafts their Bills of Lading from the packing list and invoice. That work used to cost them about €3,000 a month, and now costs around a hundredth of that. For theratefinder.ca, a mortgage brokerage in Canada, I built the product and ran their Meta ads at 2x ROAS. For Verbis I built a workshop funnel in 16 days and ran the ads that sold the seats. For Ravila I built a booking engine and an ops agent, and ran their Google Ads. Little Moon, a new children's clinic in Hyderabad, hired me to get them found and booked online.\n\nMost of my work ends up being about ads. I build AI tools that make ad creative, and I run the campaigns myself. This year I was picked for Push to Prod by Anthropic and Elevation Capital (150 of 5,000) and for Sarvam's Epoch Buildathon (180 of 3,000).\n\nBefore this I led product at a creator tool that reached 100k monthly users, worked as a PM at fintech startups, and started a local services marketplace that did ₹2 Cr in revenue.\n\nI'm looking to join a small team as a founding PM, growth lead or creative technologist. Based in Vizag, open to remote, Bangalore or Hyderabad.",
  avatarUrl: "/me.png",

  skills: {
    Product: [
      "Discovery with operators",
      "Roadmapping",
      "GTM",
      "Activation and Retention",
      "A/B Testing",
      "OKRs",
    ],
    Growth: [
      "Meta Ads",
      "Google Ads",
      "Ad Creative",
      "Funnels",
      "WhatsApp and SMS Automation",
      "Local Search",
    ],
    "AI & Building": [
      "Claude Code",
      "Claude Agent SDK",
      "Claude Managed Agents",
      "Multi-Agent Systems",
      "Evals",
      "RAG Pipelines",
      "OCR",
      "ComfyUI",
      "Open-weight Models",
    ],
    "Data & Analytics": [
      "SQL (Snowflake, BigQuery)",
      "Mixpanel",
      "Amplitude",
      "Tableau",
      "GA4",
      "Experimentation",
    ],
    "Stack & Tools": [
      "React",
      "Vite",
      "Next.js",
      "Supabase",
      "Vercel",
      "Cloudflare",
      "Streamlit",
      "Cursor IDE",
      "GitHub",
      "Figma",
      "Notion",
      "Linear",
      "Jira",
    ],
  },

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "chakra5027@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DV0x",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chakradhar-dhulipalla/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0xauser",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:chakra5027@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Creative Machines",
      href: "https://creativemachines.xyz",
      badges: [],
      location: "Remote",
      title: "AI Product Manager, independent studio",
      logoUrl: "",
      start: "Oct 2024",
      end: "Present",
      description:
        "One-person AI studio with five paying clients, Smacoteq, theratefinder.ca, Verbis, Ravila and Little Moon Children's Clinic. In each one I found the bottleneck, built what fixed it and ran the growth, using agent workflows of my own.",
    },
    {
      company: "Poster.fun",
      href: "",
      badges: [],
      location: "Remote",
      title: "Founding Product Lead",
      logoUrl: "",
      start: "Dec 2022",
      end: "Oct 2024",
      description:
        "Led product on a creator tool that reached 100k monthly users in 10 months, with a team of six, mostly interns.",
    },
    {
      company: "Create Protocol",
      href: "",
      badges: [],
      location: "Remote",
      title: "Product Manager",
      logoUrl: "",
      start: "Oct 2022",
      end: "Mar 2023",
      description:
        "Cut mint flow from 6 steps to 1, driving 2.3x brand conversion.",
    },
    {
      company: "Smacoteq",
      href: "",
      badges: [],
      location: "Remote",
      title: "Founding PM",
      logoUrl: "",
      start: "Mar 2021",
      end: "Aug 2022",
      description:
        "Designed invoice-financing UX enabling $360k+ loan disbursal.",
    },
    {
      company: "Unipeer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Founding PM",
      logoUrl: "",
      start: "Jun 2020",
      end: "Feb 2021",
      description:
        "Launched a compliant KYC flow and got into Celo Camp (top 5% of 400 applicants).",
    },
    {
      company: "Griffex",
      href: "",
      badges: [],
      location: "Europe",
      title: "Product Manager",
      logoUrl: "",
      start: "Apr 2018",
      end: "Nov 2019",
      description:
        "Shipped staking wallets and fiat ramps driving $10M+ trading volume.",
    },
    {
      company: "QuickPebbles",
      href: "",
      badges: [],
      location: "India",
      title: "Founder",
      logoUrl: "",
      start: "Apr 2015",
      end: "Jun 2017",
      description:
        "Grew to 3 cities, 300+ providers and ₹2 Cr in revenue.",
    },
  ],

  education: [
    {
      school: "Upraised",
      href: "https://www.upraised.co",
      degree: "Product Management Career Accelerator",
      logoUrl: "",
      start: "2022",
      end: "2022",
    },
    {
      school: "Andhra University",
      href: "https://www.andhrauniversity.edu.in",
      degree: "BE Mechanical Engineering",
      logoUrl: "",
      start: "2010",
      end: "2014",
    },
  ],

  projects: [
    {
      title: "The Rate Finder",
      href: "https://www.theratefinder.ca/",
      description:
        "Lead-gen site for a Canadian mortgage brokerage, with AI search, a property value estimator, a zoning finder, a blog agent and a custom CRM. I also ran their Meta ads at 2x ROAS.",
      oneLiner: "Built the product and ran Meta ads at 2x ROAS for a Canadian mortgage brokerage",
      status: "PAID CLIENT" as const,
      tags: ["RAG", "Lead Gen", "CRM", "Meta Ads"],
      featured: true,
    },
    {
      title: "Smacoteq Bill of Lading generator",
      href: "https://smacoteq.vercel.app/",
      description:
        "Built for Smacoteq's internal ops on Mistral OCR. Drafting Bills of Lading by hand cost about €3,000 a month, and this cut it about 100x.",
      oneLiner: "Drafts Bills of Lading from a packing list and invoice, about 100x cheaper than by hand",
      status: "PAID CLIENT" as const,
      tags: ["Mistral OCR", "LLMs", "Next.js"],
      featured: true,
    },
    {
      title: "Creative Machines ad agent",
      href: "https://github.com/DV0x/creative-ad-agent",
      description:
        "Open-source multi-agent system for ad creative. It started as client work for theratefinder.ca. Give it a URL and it researches the brand, writes hooks and art direction, and makes the ads.",
      oneLiner: "Open-source ad creative agent, over 100 stars on GitHub",
      status: "OPEN SOURCE" as const,
      tags: ["Claude Agent SDK", "Multi-Agent", "Ad Creative"],
      featured: true,
      repo: "https://github.com/DV0x/creative-ad-agent",
    },
    {
      title: "Ravila Grand Hotel",
      href: "https://www.ravilagrandhotel.in/",
      description:
        "Booking engine and an ops agent on Telegram and WhatsApp for bookings, refunds and reconciliation, with a person approving anything that moves money. I also ran their Google Ads and guest messages.",
      oneLiner: "Booking engine, ops agent and Google Ads for a hotel",
      status: "PAID CLIENT" as const,
      tags: ["Full Stack", "Ops Agent", "Google Ads"],
      featured: false,
    },
    {
      title: "AdLoop",
      href: "https://devfolio.co/projects/adloop-7e59",
      description:
        "Built at Push to Prod by Anthropic and Elevation Capital, where 150 builders were picked from 5,000. Give it a brand URL and it researches the brand, writes art direction where every claim traces to a source, renders the ads, checks its own output and learns from each edit.",
      oneLiner: "Ad engine that checks its own ads and learns from every edit. Push to Prod, 150 of 5,000",
      status: "HACKATHON" as const,
      tags: ["Claude Managed Agents", "Evals", "Ad Creative"],
      featured: false,
    },
    {
      title: "Boli",
      href: "https://github.com/DV0x/boli",
      description:
        "Built at Sarvam's Epoch Buildathon with GrowthX, where 180 builders were picked from 3,000. Speak a product idea and get a video ad in an Indian language, with a native voiceover and captions.",
      oneLiner: "Voice note to video ad in Indian languages. Sarvam Epoch Buildathon, 180 of 3,000",
      status: "HACKATHON" as const,
      tags: ["Sarvam", "Voice", "Video"],
      featured: false,
    },
    {
      title: "AdMitra",
      href: "https://github.com/DV0x/admitra-ai",
      description:
        "Built alone in six hours at the Anthropic and Lightspeed hackathon, where 140 builders were picked from 2,500.",
      oneLiner: "Ad agent for small businesses in tier-2 and tier-3 India, built in six hours",
      status: "HACKATHON" as const,
      tags: ["Claude Agent SDK", "Ad Creative"],
      featured: false,
    },
    {
      title: "SEO Keyword Research Tool",
      href: "https://ratefinder.streamlit.app/",
      description: "Keyword research tool for SEO and PPC campaigns, built for theratefinder.ca.",
      oneLiner: "Keyword research for SEO and PPC, built for theratefinder.ca",
      status: "PAID CLIENT" as const,
      tags: ["Streamlit", "Python", "SEO APIs"],
      featured: false,
    },
    {
      title: "Fashion Shoot Agent",
      href: "https://github.com/DV0x/fashion-shoot-agent",
      description:
        "Turns reference photos into a 9-second product video for D2C brands.",
      oneLiner: "Turns product photos into 9-second product videos for D2C brands",
      status: "SIDE PROJECT" as const,
      tags: ["Agent", "Video Generation", "Open Source"],
      featured: false,
      repo: "https://github.com/DV0x/fashion-shoot-agent",
    },
    {
      title: "AEO Radar",
      href: "https://aeo-radar.vercel.app",
      description: "Checks how a site shows up in AI answers.",
      oneLiner: "Checks how a site shows up in AI answers",
      status: "SIDE PROJECT" as const,
      tags: ["Next.js", "LLM Analysis", "Web Scraping"],
      featured: false,
    },
    {
      title: "JustLocal.ai",
      href: "https://www.justlocal.ai/",
      description: "Hyperlocal search for off-the-beaten-path places in SF.",
      oneLiner: "Hyperlocal search for off-the-beaten-path places in SF",
      status: "SIDE PROJECT" as const,
      tags: ["Custom RAG Pipeline", "Hybrid Search", "Vector DB"],
      featured: false,
    },
    {
      title: "Vidyonnati NGO Platform",
      href: "https://vidyonnati.vercel.app/",
      description: "Donor and student scholarship marketplace with a CRM.",
      oneLiner: "Donor and student scholarship marketplace with a CRM",
      status: "SIDE PROJECT" as const,
      tags: ["Full Stack", "CRM", "Admin Dashboard"],
      featured: false,
    },
  ],
} as const;
