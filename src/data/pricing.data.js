export const pricingHeaderData = {
  title: "Simple, Transparent Pricing",
  subtitle: "Choose the plan that fits your research needs. All plans include a 14-day free trial.",
};

export const pricingPlansData = [
  {
    id: "personal",
    name: "Personal",
    price: "$9",
    period: "/month",
    description: "Perfect for individual researchers and students",
    features: [
      "5 active experiments",
      "Basic analytics",
      "1GB cloud storage",
      "Email support",
      "Export to PDF",
      "Community access",
    ],
    cta: {
      label: "Start Free Trial",
      href: "/download",
    },
    popular: false,
  },
  {
    id: "business",
    name: "Business",
    price: "$29",
    period: "/month",
    description: "Ideal for labs and research teams",
    features: [
      "Unlimited experiments",
      "Advanced analytics",
      "50GB cloud storage",
      "Priority support",
      "Export to all formats",
      "Team collaboration (up to 10)",
      "API access",
      "Custom templates",
    ],
    cta: {
      label: "Start Free Trial",
      href: "/download",
    },
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large institutions and organizations",
    features: [
      "Everything in Business",
      "Unlimited team members",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantee",
      "Training & onboarding",
    ],
    cta: {
      label: "Contact Sales",
      href: "mailto:sales@virtuallab.io",
    },
    popular: false,
  },
];

export const pricingFaqData = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
  },
];
