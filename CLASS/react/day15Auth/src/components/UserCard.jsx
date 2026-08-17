import React from "react"

const UserCard = ({user}) => {
	return (
		<div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
			{/* Header */}
			<div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-8 text-center">
				<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold uppercase text-indigo-600 shadow-md">
					{user.name.firstname.charAt(0)}
					{user.name.lastname.charAt(0)}
				</div>

				<h2 className="mt-4 text-xl font-bold capitalize text-white">
					{user.name.firstname} {user.name.lastname}
				</h2>

				<p className="text-sm text-indigo-100">@{user.username}</p>
			</div>

			{/* User Details */}
			<div className="space-y-4 p-6">
				{/* Email */}
				<div>
					<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
						Email
					</p>
					<p className="mt-1 break-all text-sm text-gray-700">{user.email}</p>
				</div>

				{/* Phone */}
				<div>
					<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
						Phone
					</p>
					<p className="mt-1 text-sm text-gray-700">{user.phone}</p>
				</div>

				{/* Address */}
				<div>
					<p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
						Address
					</p>

					<p className="mt-1 text-sm capitalize text-gray-700">
						{user.address.number} {user.address.street}, {user.address.city}
					</p>

					<p className="text-sm text-gray-500">{user.address.zipcode}</p>
				</div>

				{/* User ID */}
				<div className="flex items-center justify-between border-t border-gray-100 pt-4">
					<span className="text-sm text-gray-500">User ID</span>

					<span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
						#{user.id}
					</span>
				</div>
			</div>
		</div>
	)
}

export default UserCard
