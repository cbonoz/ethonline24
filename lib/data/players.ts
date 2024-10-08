import { Player } from "../types"
import { OFFENSE_PLAYERS } from "./data"

// group players by position
export const GROUPED_PLAYERS: Map<
	String,
	Array<Player>
> = OFFENSE_PLAYERS.reduce((acc: any, player) => {
	if (!acc[player.position]) {
		acc[player.position] = []
	}
	acc[player.position].push(player)
	return acc
}, {})

export const REDUCED_PLAYERS = [
	{
		status: "RET",
		display_name: "'Omar Ellison",
		first_name: "'Omar",
		last_name: "Ellison",
		esb_id: "ELL711319",
		gsis_id: "00-0004866",
		birth_date: "1971-10-08",
		college_name: "",
		position_group: "WR",
		position: "WR",
		jersey_number: 84,
		height: 73,
		weight: 200,
		years_of_experience: 2,
		team_abbr: "LAC",
		team_seq: "",
		current_team_id: 4400,
		football_name: "",
		entry_year: "",
		rookie_year: "",
		draft_club: "",
		draft_number: "",
		college_conference: "",
		status_description_abbr: "",
		status_short_description: "",
		gsis_it_id: "",
		short_name: "",
		smart_id: "3200454c-4c71-1319-728e-d49d3d236f8f",
		headshot: "",
		suffix: "",
		uniform_number: "",
		draft_round: "",
	},
	{
		status: "ACT",
		display_name: "A'Shawn Robinson",
		first_name: "A'Shawn",
		last_name: "Robinson",
		esb_id: "ROB367960",
		gsis_id: "00-0032889",
		birth_date: "1995-03-21",
		college_name: "Alabama",
		position_group: "DL",
		position: "DT",
		jersey_number: 94,
		height: 76,
		weight: 330,
		years_of_experience: 9,
		team_abbr: "CAR",
		team_seq: 1,
		current_team_id: "0750",
		football_name: "A'Shawn",
		entry_year: 2016,
		rookie_year: 2016,
		draft_club: "DET",
		draft_number: 46,
		college_conference: "Southeastern Conference",
		status_description_abbr: "A01",
		status_short_description: "Active",
		gsis_it_id: 43335,
		short_name: "A.Robinson",
		smart_id: "3200524f-4236-7960-bf20-bc060ac0f49c",
		headshot:
			"https://static.www.nfl.com/image/private/f_auto,q_auto/league/qgiwxchd1lmgszfunys8",
		suffix: "",
		uniform_number: 94,
		draft_round: "",
	},
	{
		status: "ACT",
		display_name: "A.J. Arcuri",
		first_name: "A.J.",
		last_name: "Arcuri",
		esb_id: "ARC716900",
		gsis_id: "00-0037845",
		birth_date: "1997-08-13",
		college_name: "Michigan State",
		position_group: "OL",
		position: "T",
		jersey_number: 61,
		height: 79,
		weight: 320,
		years_of_experience: 2,
		team_abbr: "LA",
		team_seq: "",
		current_team_id: 2510,
		football_name: "A.J.",
		entry_year: 2022,
		rookie_year: 2022,
		draft_club: "LA",
		draft_number: 261,
		college_conference: "Big Ten Conference",
		status_description_abbr: "A01",
		status_short_description: "Active",
		gsis_it_id: 54726,
		short_name: "A.Arcuri",
		smart_id: "32004152-4371-6900-5185-8cdd66b2ad11",
		headshot: "",
		suffix: "",
		uniform_number: 61,
		draft_round: "",
	},
	{
		status: "ACT",
		display_name: "A.J. Barner",
		first_name: "A.J.",
		last_name: "Barner",
		esb_id: "BAR235889",
		gsis_id: "00-0039793",
		birth_date: "2002-05-03",
		college_name: "Michigan",
		position_group: "TE",
		position: "TE",
		jersey_number: 88,
		height: 78,
		weight: 251,
		years_of_experience: 0,
		team_abbr: "SEA",
		team_seq: "",
		current_team_id: 4600,
		football_name: "A.J.",
		entry_year: 2024,
		rookie_year: 2024,
		draft_club: "SEA",
		draft_number: 121,
		college_conference: "Big Ten Conference",
		status_description_abbr: "A01",
		status_short_description: "Active",
		gsis_it_id: 57242,
		short_name: "A.Barner",
		smart_id: "32004241-5223-5889-95d9-0ba3aeeb36ed",
		headshot: "",
		suffix: "",
		uniform_number: 88,
		draft_round: "",
	},
	{
		status: "RES",
		display_name: "A.J. Bouye",
		first_name: "Arlandus",
		last_name: "Bouye",
		esb_id: "BOU651714",
		gsis_id: "00-0030228",
		birth_date: "1991-08-16",
		college_name: "Central Florida",
		position_group: "DB",
		position: "CB",
		jersey_number: 24,
		height: 72,
		weight: 191,
		years_of_experience: 8,
		team_abbr: "CAR",
		team_seq: 1,
		current_team_id: "0750",
		football_name: "A.J.",
		entry_year: 2013,
		rookie_year: 2013,
		draft_club: "",
		draft_number: "",
		college_conference: "American Athletic Conference",
		status_description_abbr: "R01",
		status_short_description: "R/Injured",
		gsis_it_id: 40688,
		short_name: "A.Bouye",
		smart_id: "3200424f-5565-1714-cb38-07c822111a12",
		headshot:
			"https://static.www.nfl.com/image/private/f_auto,q_auto/league/cpgi2hbhnmvs1oczkzas",
		suffix: "",
		uniform_number: 24,
		draft_round: "",
	},
	{
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
	},
	{
		status: "ACT",
		display_name: "A.J. Cann",
		first_name: "Aaron",
		last_name: "Cann",
		esb_id: "CAN364949",
		gsis_id: "00-0032255",
		birth_date: "1991-10-03",
		college_name: "South Carolina",
		position_group: "OL",
		position: "G",
		jersey_number: 60,
		height: 75,
		weight: 325,
		years_of_experience: 6,
		team_abbr: "HOU",
		team_seq: 1,
		current_team_id: 2120,
		football_name: "A.J.",
		entry_year: 2015,
		rookie_year: 2015,
		draft_club: "JAX",
		draft_number: 67,
		college_conference: "Southeastern Conference",
		status_description_abbr: "A01",
		status_short_description: "Active",
		gsis_it_id: 42410,
		short_name: "A.Cann",
		smart_id: "32004341-4e36-4949-5f30-831832b20b7c",
		headshot:
			"https://static.www.nfl.com/image/private/f_auto,q_auto/league/wnsy7wpssmnecbo46sxn",
		suffix: "",
		uniform_number: 60,
		draft_round: "",
	},
	{
		status: "ACT",
		display_name: "A.J. Cole",
		first_name: "A.J.",
		last_name: "Cole",
		esb_id: "COL214396",
		gsis_id: "00-0035190",
		birth_date: "1995-11-27",
		college_name: "North Carolina State",
		position_group: "SPEC",
		position: "P",
		jersey_number: 6,
		height: 76,
		weight: 220,
		years_of_experience: 6,
		team_abbr: "LV",
		team_seq: 1,
		current_team_id: 2520,
		football_name: "A.J.",
		entry_year: 2019,
		rookie_year: 2019,
		draft_club: "",
		draft_number: "",
		college_conference: "Atlantic Coast Conference",
		status_description_abbr: "A01",
		status_short_description: "Active",
		gsis_it_id: 48335,
		short_name: "A.Cole",
		smart_id: "3200434f-4c21-4396-afbe-6ef134e5f11e",
		headshot:
			"https://static.www.nfl.com/image/private/f_auto,q_auto/league/f3vqfrvezpqrnujohxos",
		suffix: "III",
		uniform_number: 6,
		draft_round: "",
	},
	{
		status: "RET",
		display_name: "A.J. Cruz",
		first_name: "A.J.",
		last_name: "Cruz",
		esb_id: "CRU779150",
		gsis_id: "00-0032270",
		birth_date: "",
		college_name: "",
		position_group: "WR",
		position: "WR",
		jersey_number: 81,
		height: 69,
		weight: 190,
		years_of_experience: 1,
		team_abbr: "MIA",
		team_seq: "",
		current_team_id: 2700,
		football_name: "",
		entry_year: "",
		rookie_year: "",
		draft_club: "",
		draft_number: "",
		college_conference: "",
		status_description_abbr: "",
		status_short_description: "",
		gsis_it_id: "",
		short_name: "",
		smart_id: "32004352-5577-9150-c110-b6e2fd104c4b",
		headshot: "",
		suffix: "",
		uniform_number: "",
		draft_round: "",
	},
]

export const ACTIVE_PLAYERS_WITH_HEADSHOTS = REDUCED_PLAYERS.filter(
	(player) => player.status === "ACT" && player.headshot !== ""
)
