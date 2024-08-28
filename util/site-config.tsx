export const config = {
    title: 'Chaindraft',
    description:
        'A blockchain-powered fantasy football platform with community-driven player salaries and decentralized management.',
    isLocal: process.env.NEXT_PUBLIC_ENV === 'development',
    about: [
        {
            title: 'What is Chaindraft?',
            description:
                'Chaindraft is a decentralized fantasy football app that uses blockchain technology to provide a transparent and secure fantasy sports experience, featuring community-driven decisions on player salaries.',
        },
        {
            title: 'How does it work?',
            description:
                'Chaindraft allows users to vote on player salaries, with all votes securely recorded on the blockchain. Smart contracts manage and automate these salary decisions, ensuring fairness and transparency.',
        },
        {
            title: 'Why should I use Chaindraft?',
            description:
                'Chaindraft empowers users by allowing them to have a direct say in player salaries through community voting. This decentralized approach ensures that all financial transactions and game rules are transparent, secure, and verifiable.',
        },
        {
            title: 'Disclaimer',
            description:
                'Chaindraft is currently in the early stages of development and is provided as-is without any guarantees. Use at your own risk, and stay tuned for future updates and improvements.',
        },
    ],
    steps: [
        {
            title: 'Create Your Account',
            description:
                'Sign up and connect your digital wallet to participate. Secure your account and verify your identity using decentralized identity protocols.',
        },
        {
            title: 'Vote on Salaries',
            description:
                'Participate in the community by voting on player salaries. Each vote is recorded on a smart contract, ensuring transparency and accountability.',
        },
        {
            title: 'Manage Your Team',
            description:
                'Build and manage your fantasy football team based on the community-determined salaries. Make strategic decisions to optimize your team’s performance throughout the season.',
        },
    ],
}
