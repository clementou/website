export const site = {
	name: "Clement Ou",
	title: "Clement Ou — Agent Engineer",
	description:
		"Agent Engineer at Sierra. AI Agents for F50 financial services and insurance. San Francisco.",
	url: "https://www.clementou.com",
	email: "clement.h.ou@gmail.com",
	pronunciation: "/ˈklɛmənt ˈoʊ/",
	chineseName: "欧华 (Ōu Huá)",
	pronouns: "he/him",
	location: "San Francisco",
};

export const links = [
	{
		label: "GitHub",
		href: "https://github.com/clementou",
		event: "social-click-github",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/clementou",
		event: "social-click-linkedin",
	},
	{
		label: "X",
		href: "https://twitter.com/clementou",
		event: "social-click-twitter",
	},
	{
		label: "Email",
		href: `mailto:${site.email}`,
		event: "social-click-email",
	},
];

export const experience = [
	{
		org: "Sierra",
		href: "https://sierra.ai",
		role: "Software Engineer, Agent",
		note: "AI Agents for F50 financial services and insurance enterprises.",
	},
	{
		org: "Roe",
		href: "https://roe-ai.com",
		role: "Founding Engineer",
		note: "3rd hire. Core agent orchestration infrastructure, interactive browser agents, Merchant-risk agents, and Python SDK.",
	},
	{
		org: "Quantifind",
		href: "https://quantifind.com",
		role: "Data Science Intern ×2",
		note: "Machine translation for risk screening; sanctions data engineering.",
	},
	{
		org: "Carnegie Mellon University",
		role: "BS, Statistics & Machine Learning",
		note: "",
		more: [
			{
				title: "Poker AI Competition",
				href: "https://poker.cmudsc.com/",
				event: "project-click-cmu-ai-poker",
				note: "Founded and led; $100k prize pool, 500+ users, 10k+ daily matches.",
			},
			{
				title: "AI Agents Hackathon",
				note: "Founded; $20k budget, 500 attendees, speakers from Google DeepMind, Perplexity, Exa, Capital One.",
			},
			{
				title: "Romantic Dining",
				note: "Co-founder and CTO; restaurant discovery app, backed by a CMU venture fund grant.",
			},
			{
				title: "Projects",
				note: "GPT-2 distributed training pipeline; Twitter PageRank in Spark over 1M+ vertices and 500M+ edges; speech-to-text transformer from scratch.",
			},
			{
				title: "Teaching & Clubs",
				note: "TA for 17-214 Software Engineering; Competitions & Outreach Director, Data Science Club; Data Project Chair, Students Using Data for Social Good.",
			},
		],
	},
];
