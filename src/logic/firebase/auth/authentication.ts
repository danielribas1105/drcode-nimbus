import {
	Auth,
	getAuth,
	GoogleAuthProvider,
	onIdTokenChanged,
	signInWithPopup,
	signOut,
	User,
} from "firebase/auth"
import { app } from "../config/app"
import UserNimbus from "@/logic/core/user/UserNimbus"

export type MonitoringUser = (userNimbus: UserNimbus | null) => void
export type CancelMonitoringUser = () => void

export default class Authentication {
	private _auth: Auth

	constructor() {
		this._auth = getAuth(app)
	}

	async loginGoogle(): Promise<UserNimbus | null> {
		const response = await signInWithPopup(this._auth, new GoogleAuthProvider())
		return this.converterToUser(response.user)
	}

	logout(): Promise<void> {
		return signOut(this._auth)
	}

	monitoring(notification: MonitoringUser): CancelMonitoringUser {
		return onIdTokenChanged(this._auth, async (userFirebase) => {
			const user = this.converterToUser(userFirebase)
			notification(user)
		})
	}

	private converterToUser(userFirebase: User | null): UserNimbus | null {
		if (!userFirebase?.email) return null
		const alterName = userFirebase.email!.split("@")[0]

		return {
			id: userFirebase.uid,
			nome: userFirebase.displayName ?? alterName,
			email: userFirebase.email,
			imageUrl: userFirebase.photoURL,
		}
	}
}
