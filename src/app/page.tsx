"use client"
import Loading from "@/components/templates/loading"
import AuthenticationContext from "@/data/contexts/authentication-context"
import { useContext } from "react"
import Finances from "./(auth)/finances/page"
import Home from "./landing/page"

export default function MainPage() {
	const { user, loading } = useContext(AuthenticationContext)

	if (loading) return <Loading />

	return user ? <Finances /> : <Home />
}
