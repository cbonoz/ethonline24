"use client"

import { PlayerWheel } from "@/components/player-wheel"
import { RouteButtons } from "@/components/route-buttons"
import { ACTIVE_PLAYERS_WITH_HEADSHOTS } from "@/lib/data/players"
import { config } from "@/util/site-config"
import Image from "next/image"
import { useState } from "react"
import TinderCard from "react-tinder-card"

export default function Home() {
	const onSwipe = (direction: string) => {
		if (direction === "right") {
			console.log("swiped right")
		} else {
			console.log("swiped left")
		}
		setPlayerIndex(playerIndex + 1)
	}

	const [playerIndex, setPlayerIndex] = useState(0)
	const activePlayer = ACTIVE_PLAYERS_WITH_HEADSHOTS[playerIndex]
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			{/* <h1 className="text-4xl font-bold">Welcome to chaindraft</h1> */}
			<div>
				<img src="/logo.png" alt="chaindraft" className="my-4" />
				<p className="text-lg pt-8">{config.description}.</p>
			</div>

			<div>
				<PlayerWheel />
			</div>
		</main>
	)
}
