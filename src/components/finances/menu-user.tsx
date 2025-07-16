"use client"
import user from "@/data/constants/UserTeste"
import { Avatar, Button, MantineProvider, Menu } from "@mantine/core"
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react"
import Link from "next/link"

export default function MenuUser() {
	function logout() {
		alert("Logout")
	}

	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="flex flex-col">
						<span className="text-sm text-logo-black font-title font-bold">{user[0].name}</span>
						<span className="text-xs text-logo-black/70">{user[0].email}</span>
					</div>
					<Avatar size={40} radius="xl" src={user[0]?.imageUrl ?? ""} />
				</div>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Usuário</Menu.Label>
				<Link href="/finances">
					<Menu.Item leftSection={<IconArrowsRightLeft size={16} />}>Finanças</Menu.Item>
				</Link>
				<Link href="/user">
					<Menu.Item leftSection={<IconUser size={16} />}>Usuário</Menu.Item>
				</Link>
				<Menu.Divider />
				<Menu.Item leftSection={<IconLogout size={16} color="#ff0000" />} onClick={logout}>
					<span className="text-red-700">Sair</span>
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
