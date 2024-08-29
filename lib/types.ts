export interface RequestData {
    recipientName: string
    recipientAddress: string
    balance: number
    name: string
    description: string
    files: string[]
}

export interface ContractMetadata {
    owner: string
    createdAt: number
    name: string
    description: string
    balance: number
    recipientName: string
    recipientAddress: string
    cid?: string // optional cid pointer to attachment/s
    validatedAt: number
    attestationId: string
    network: string
}

export interface SchemaItem {
    name: string
    type: string
}

export interface SchemaEntry {
    name: string
    request: string
    timestamp: string
    signature: string
}
/*
status: "ACT",
		display_name: "A.J. Brown",
		first_name: "Arthur",
		last_name: "Brown",
		esb_id: "BRO413223",
		gsis_id: "00-0035676",
		birth_date: "1997-06-30",
		college_name: "Mississippi",
		position_group: "WR",
		position: "WR",
		jersey_number: 11,
		height: 72,
		weight: 226,
		years_of_experience: 6,
		team_abbr: "PHI",
		team_seq: 1,
		current_team_id: 3700,
		football_name: "A.J.",
		entry_year: 2019,
		rookie_year: 2019,
		draft_club: "TEN",
		draft_number: 51,
		college_conference: "Southeastern Conference",
		status_description_abbr: "A01",
		status_short_description: "Active",
		gsis_it_id: 47834,
		short_name: "A.Brown",
		smart_id: "32004252-4f41-3223-e4c5-1e30dffa87f8",
		headshot:
			"https://static.www.nfl.com/image/private/f_auto,q_auto/league/a014sgzctarbvhwb35lw",
		suffix: "",
		uniform_number: 11,
		draft_round: "",
        */

export interface Player {
    status: string
    display_name: string
    first_name: string
    last_name: string
    esb_id: string
    gsis_id: string
    birth_date: string
    college_name: string
    position_group: string
    position: string
    jersey_number: number
    height: number
    weight: number
    years_of_experience: number
    team_abbr: string
    team_seq: number
    current_team_id: number
    football_name: string
    entry_year: number
    rookie_year: number
    draft_club: string
    draft_number: number
    college_conference: string
    status_description_abbr: string
    status_short_description: string
    gsis_it_id: number
    short_name: string
    smart_id: string
    headshot: string
    suffix: string
    uniform_number: number
    draft_round: string
}
