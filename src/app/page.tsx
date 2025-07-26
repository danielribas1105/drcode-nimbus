"use client"
import AuthenticationContext from "@/data/contexts/authentication-context"
import { useContext } from "react"
import Finances from "./(auth)/finances/page"
import Home from "./landing/page"

export default function MainPage() {
	const { user } = useContext(AuthenticationContext)

	return user ? <Finances /> : <Home />
}
