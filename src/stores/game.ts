import { writable } from "svelte/store";
import type { FeedEvent, Player } from "../types";

export const matchTime = writable<number>(0)
export const hasGame = writable<boolean>(false)
export const hasTarget = writable<boolean>(false)
export const hasWinner = writable<boolean>(false)
export const isMatchCreated = writable<boolean>(false)
export const isMatchInitialized = writable<boolean>(false)
export const isGoalScored = writable<boolean>(false)
export const isMatchDestroyed = writable<boolean>(false)
export const isMatchEnded = writable<boolean>(false)
export const isOT = writable<boolean>(false)
export const isPodiumStart = writable<boolean>(false)
export const target = writable<Player | string>()
export const winner = writable<string>('')
export const isFeedEventStarted = writable<boolean>(false)
export const players = writable<Player[]>()
export const latestFeedEvent = writable<FeedEvent | ''>()