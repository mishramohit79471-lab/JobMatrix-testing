const JOBS_DATA = [
    {
        id: 1,
        title: "Senior Frontend Engineer",
        company: "Google",
        location: "Mountain View, CA",
        type: "Full-time",
        salary: "$160k - $220k",
        logo: "G"
    },
    {
        id: 2,
        title: "Software Engineer II",
        company: "Amazon",
        location: "Seattle, WA",
        type: "Remote",
        salary: "$140k - $190k",
        logo: "A"
    },
    {
        id: 3,
        title: "Product Designer",
        company: "Meta",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130k - $180k",
        logo: "M"
    },
    {
        id: 4,
        title: "Backend Developer",
        company: "Netflix",
        location: "Los Gatos, CA",
        type: "Hybrid",
        salary: "$200k - $300k",
        logo: "N"
    }
];

const COMPANIES_DATA = [
    {
        name: "Google",
        rounds: 5,
        pattern: "Online Test -> 3 Technical Rounds -> 1 Googliness (HR)",
        syllabus: "DSA, System Design, Scalability, Culture Fit",
        eligibility: "GPA 7.5+, CS Background preferred"
    },
    {
        name: "Amazon",
        rounds: 4,
        pattern: "OA (2 Problems) -> 3 Onsite Rounds",
        syllabus: "Leadership Principles, DSA, Low Level Design",
        eligibility: "Open to all branches"
    },
    {
        name: "Microsoft",
        rounds: 4,
        pattern: "OA -> 2 Technical -> 1 AA (Asappropriate Round)",
        syllabus: "OS, DBMS, Linked Lists, Binary Trees",
        eligibility: "GPA 8.0+"
    }
];

const DSA_DATA = [
    {
        topic: "Arrays",
        problems: [
            { name: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
            { name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
            { name: "3Sum", link: "https://leetcode.com/problems/3sum/", difficulty: "Medium" }
        ]
    },
    {
        topic: "LinkedList",
        problems: [
            { name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
            { name: "Detect Cycle in Linked List", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" }
        ]
    },
    {
        topic: "Trees",
        problems: [
            { name: "Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
            { name: "Validate BST", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" }
        ]
    }
];
