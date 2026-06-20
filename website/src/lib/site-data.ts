export const business = {
  name: "Wigs by Jolie",
  category: "Premium wigs",
  tagline: "Artistry in Every Strand",
  phoneDisplay: "(954) 975-5874",
  phoneHref: "tel:+19549755874",
  email: "wigsbyjolie@gmail.com",
  emailHref: "mailto:wigsbyjolie@gmail.com",
  addressLines: [
    "The Cove Shopping Plaza",
    "1562 SE 3rd Ct.",
    "Deerfield Beach, FL 33441",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=1562%20SE%203rd%20Ct%2C%20Deerfield%20Beach%2C%20FL%2033441",
  mapsEmbedHref:
    "https://maps.google.com/maps?q=1562%20SE%203rd%20Ct%2C%20Deerfield%20Beach%2C%20FL%2033441&z=15&output=embed",
  website: "https://www.wigsbyjolie.com/",
};

export const preferredTimeSlots = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
] as const;

export const navItems = [
  { label: "Wigs", href: "/#services" },
  { label: "Toppers", href: "/#services" },
  { label: "Care", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Visit", href: "/#visit" },
];

export const reviewSummary = {
  rating: "Google",
  reviews: "Review profile",
  googleReviews: "Google review profile",
  source: "Google",
  href: "https://www.google.com/maps/search/?api=1&query=Wigs%20by%20Jolie%201562%20SE%203rd%20Ct%2C%20Deerfield%20Beach%2C%20FL%2033441",
};

export const googleReviewHighlights = [
  {
    eyebrow: "Google reviews",
    title: "Review the public profile",
    body: "Open the public Google profile before you book or call, and confirm any questions directly with Jolie.",
  },
  {
    eyebrow: "Personal service",
    title: "Guidance, not guessing",
    body: "Clients can ask about fit, color, comfort, coverage, style, and daily routine.",
  },
  {
    eyebrow: "Private boutique",
    title: "Read before you visit",
    body: "Open the Google profile, then book a private consultation when you are ready.",
  },
];

export const googleReviewProof = [
  {
    name: "Heidi Feser",
    date: "3 months ago",
    body: `Hands down this is the best place to get your hair. They have so many styles to choose from. Whether you need just a topper or a full wig, Nira will find something to your liking. She sells synthetic and human hair wigs. She also services them so you're always looking your best. She is very thorough and provides premier customer service without being pushy. She never makes me feel like she's there just to sell hair. She makes everyone feel beautiful.
Stop in and find the look for you!`,
    href: "https://www.google.com/maps/contrib/104931042060488826429/reviews?hl=en",
  },
  {
    name: "Anne Marie Spiliotis",
    date: "2 weeks ago",
    body: `I walked in yesterday with a topper I purchased from somewhere else that i needed help with. It seems to be too much hair for me. the women greeted me so kindly when I walked in. She did not make me feel badly that I did not purchase from there and proceeded to put the piece on my head and rearrange my hair to show me how to better wear It. Then she suggested a bang would help and offered to cut my band slightly to help. She charged me $10 and I could not be happier. I will be going back there to purchase in the future. love this place!!!!!`,
    href: "https://www.google.com/maps/contrib/100496398906071961786/reviews?hl=en",
  },
  {
    name: "Jacqueline Kaufman",
    date: "6 years ago",
    body: `I went to Wigs By Jolie hoping to find a "topper". I had ordered a wig on line and was not entirely satisfied with it, so before I tried a different wig from an on-line seller, I wanted to go to a retail store and see if they could make my shopping easier, and get some expert advice.

At 72, my thinning hair around the crown was becoming very noticeable. I went there without an appointment, and was lucky, because I ended up with the owner helping me. She seemed to know exactly what would work for me, and found a wig that matched my dyed hair color with a human hair & synthetic hair wig with soft highlights. She trimmed it and added clips to it to make it into a topper that I could easily put on myself, and feel good again about my hair again. No one really knows, or at least they haven't asked me if I'm wearing a topper, and I am pleased about that too. I've had a few compliments on how healthy and full my hair looks.

I have owned it for about 2 months now, washed it with no problems, and am very happy overall. Was it inexpensive? No, but was it worth it? Yes! You get what you pay for in this world, and I'm very happy with my purchase. Thank you!`,
    href: "https://www.google.com/maps/contrib/112785307719145900836/reviews?hl=en-US",
  },
];

export const serviceInterests = [
  {
    id: "not-sure",
    label: "Help me choose",
    shortLabel: "Help me choose",
    title: "Help me choose",
    description:
      "Tell Jolie what you want your hair to do. She can help you choose the right next step.",
  },
  {
    id: "wigs",
    label: "Wigs and hairpieces",
    shortLabel: "Wigs",
    title: "Wigs and hairpieces",
    description:
      "Human hair, synthetic, custom wig help, and men's hairpiece options with fit, color, style, and comfort guidance.",
  },
  {
    id: "toppers",
    label: "Toppers and coverage",
    shortLabel: "Toppers",
    title: "Toppers",
    description:
      "Coverage pieces and toppers for added fullness, part coverage, volume, or a more finished look.",
  },
  {
    id: "extensions",
    label: "Extensions and added volume",
    shortLabel: "Extensions",
    title: "Extensions",
    description:
      "Extensions for more length, volume, shape, or movement with personal styling help.",
  },
  {
    id: "care",
    label: "Styling, maintenance, and care",
    shortLabel: "Care",
    title: "Care",
    description:
      "Styling, washing, storage, refreshes, and long-term wig care.",
  },
] as const;

export const services = serviceInterests.slice(1);

export const consultationSteps = [
  {
    eyebrow: "01",
    title: "Start With a Private Consultation",
    body: "Meet privately with Jolie or one of her experienced wig specialists. Bring inspiration photos, share your concerns, or simply describe the look you want. Ask about lifestyle, preferences, comfort needs, budget, and current consultation details without pressure.",
    image: "/images/steps/step-01-consultation.png",
    alt: "Illustration of a private wig consultation in a boutique setting",
  },
  {
    eyebrow: "02",
    title: "Explore Options Selected for You",
    body: "You will not have to sort through every option alone. We will guide you toward the colors, lengths, textures, cap constructions, and materials that best complement your appearance, lifestyle, and personal preferences.",
    image: "/images/steps/step-02-options.png",
    alt: "Illustration of a wig specialist showing selected wig options",
  },
  {
    eyebrow: "03",
    title: "Perfect the Fit and Finish",
    body: "Your selection will be professionally fitted, adjusted, and styled to achieve the right balance of comfort, security, color, movement, and a natural appearance.",
    image: "/images/steps/step-03-fit-finish.png",
    alt: "Illustration of a wig fitting and styling appointment",
  },
  {
    eyebrow: "04",
    title: "Ask About Follow-Up Support",
    body: "Before you leave the boutique, ask what follow-up help is available for fit, styling, care, or minor adjustments so you know how to keep your new look comfortable and beautiful.",
    image: "/images/steps/step-04-follow-up.png",
    alt: "Illustration of follow-up support after a wig consultation",
  },
  {
    eyebrow: "05",
    title: "Leave Confident and Prepared",
    body: "Leave with a look that feels like you and the knowledge to care for it properly. We will walk you through wearing, styling, storage, and maintenance so you feel comfortable and confident from day one.",
    image: "/images/steps/step-05-confident.png",
    alt: "Illustration of clients leaving a boutique feeling confident",
  },
];

export const faqs = [
  {
    question: "Do I need to know what to ask for?",
    answer:
      "No. You can ask for help choosing between a wig, topper, extensions, or care.",
  },
  {
    question: "Is the consultation private?",
    answer:
      "Wigs by Jolie centers the experience around intimate, professional guidance in a boutique studio.",
  },
  {
    question: "Is my request a booked appointment?",
    answer:
      "Use the consultation request path, call, or email Jolie directly. A request is not a confirmed appointment until Wigs by Jolie responds.",
  },
  {
    question: "Are prices or hours listed?",
    answer:
      "Call or email Jolie directly for current details on hours, appointment timing, pricing, consultation fees, and policies.",
  },
  {
    question: "Do you work with insurance?",
    answer:
      "Insurance details have not been confirmed for this website. Call Jolie directly before visiting if insurance, reimbursement, or documentation matters for your situation.",
  },
];

export const imagePlaceholders = [
  "WBJ-hero-consultation",
  "WBJ-consultation-portrait",
  "WBJ-studio-detail",
  "WBJ-services-wigs",
  "WBJ-services-toppers",
  "WBJ-services-extensions",
  "WBJ-services-care",
  "WBJ-about-jolie",
  "WBJ-gallery-01",
  "WBJ-gallery-02",
  "WBJ-gallery-03",
  "WBJ-gallery-04",
  "WBJ-gallery-05",
  "WBJ-gallery-06",
] as const;

export type ServiceInterestId = (typeof serviceInterests)[number]["id"];
