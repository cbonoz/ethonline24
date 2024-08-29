import { DEFAULT_PLAYER_IMAGE } from "@/lib/constants"
import { Player } from "@/lib/types"
import Image from "next/image"
import GradientBar from "./gradient-bar"
import { isEmpty } from "@/lib/utils"

interface Props {
	player: Player
	width?: number
	position?: string
}

// display only

const PlayerCard = ({ player, width, position }: Props) => {
	const className = width ? `w-${width} h-${width}` : "w-24 h-24"
	return (
		<div className="w-64 p-4 border rounded-lg bg-yellow-100 shadow-lg flex flex-col items-center text-center">
			{!isEmpty(position) && <span>{position}</span>}
			<div className="relative w-40 h-40 mb-4">
				<Image
					src={player.headshot || DEFAULT_PLAYER_IMAGE}
					alt={player.display_name}
					layout="fill"
					objectFit="cover"
					className="rounded-full border-4 border-yellow-600"
				/>
			</div>
			<div className="text-xl font-bold mb-2 text-yellow-900">
				{player.display_name}
			</div>
			<div className="text-lg mb-1 text-yellow-800">
				Position: {player.position}
			</div>
			<div className="text-lg mb-1 text-yellow-800">
				Team: {player.team_abbr}
			</div>
			<div className="text-lg mb-1 text-yellow-800">
				Height: {player.height} inches
			</div>
			<div className="text-lg mb-1 text-yellow-800">
				Weight: {player.weight} lbs
			</div>
			<div className="text-lg mb-1 text-yellow-800">
				Experience: {player.years_of_experience} years
			</div>
		</div>
	)
}

export default PlayerCard
