"use client"
import { ACTIVE_PLAYERS_WITH_HEADSHOTS } from "@/lib/data/players"
import React, { useState, useMemo, useRef } from "react"
import TinderCard from "react-tinder-card"
import { Button } from "./ui/Button"
import Image from "next/image"

const db = ACTIVE_PLAYERS_WITH_HEADSHOTS

export function PlayerWheel() {
	const [currentIndex, setCurrentIndex] = useState(db.length - 1)
	const [lastDirection, setLastDirection] = useState()
	// used for outOfFrame closure
	const currentIndexRef = useRef(currentIndex)

	const childRefs = useMemo(
		() =>
			Array(db.length)
				.fill(0)
				.map((i) => React.createRef()),
		[]
	)

	const updateCurrentIndex = (val) => {
		setCurrentIndex(val)
		currentIndexRef.current = val
	}

	const canGoBack = currentIndex < db.length - 1

	const canSwipe = currentIndex >= 0

	// set last direction and decrease current index
	const swiped = (direction, nameToDelete, index) => {
		setLastDirection(direction)
		updateCurrentIndex(index - 1)
	}

	const outOfFrame = (name, idx) => {
		console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
		// handle the case in which go back is pressed before card goes outOfFrame
		currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
		// TODO: when quickly swipe and restore multiple times the same card,
		// it happens multiple outOfFrame events are queued and the card disappear
		// during latest swipes. Only the last outOfFrame event should be considered valid
	}

	const swipe = async (dir) => {
		if (canSwipe && currentIndex < db.length) {
			await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
		}
	}

	// increase current index and show card
	const goBack = async () => {
		if (!canGoBack) return
		const newIndex = currentIndex + 1
		updateCurrentIndex(newIndex)
		await childRefs[newIndex].current.restoreCard()
	}

	return (
		<div>
			<link
				href="https://fonts.googleapis.com/css?family=Damion&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
				rel="stylesheet"
			/>
			<h1>React Tinder Card</h1>
			<div className="cardContainer">
				{db.map((character, index) => (
					<TinderCard
						ref={childRefs[index]}
						className="swipe"
						key={character.display_name}
						onSwipe={(dir) => swiped(dir, character.display_name, index)}
						onCardLeftScreen={() => outOfFrame(character.display_name, index)}
					>
						{/* <div
							style={{
								backgroundImage: "url(" + character.headshot + ")",
							}}
							className="card"
						> */}
						<Image
							src={character.headshot}
							alt={character.display_name}
							height={300}
							width={300}
						/>
						<h3>{character.display_name}</h3>
						{/* </div> */}
					</TinderCard>
				))}
			</div>
			<div className="Buttons">
				<Button onClick={() => swipe("left")}>Swipe left!</Button>
				<Button onClick={() => goBack()}>Undo swipe!</Button>
				<Button onClick={() => swipe("right")}>Swipe right!</Button>
			</div>
			{lastDirection ? (
				<h2 key={lastDirection} className="infoText">
					You swiped {lastDirection}
				</h2>
			) : (
				<h2 className="infoText">
					Swipe a card or press a Button to get Restore Card Button visible!
				</h2>
			)}
		</div>
	)
}
