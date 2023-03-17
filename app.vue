<template>
	<div>
		<NuxtLayout>
			<header>
				<nav>
					<ul>
						<li>
							<nuxt-link to="/">Home</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/events">Events</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/events/profile">Profile</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/events/profile/1"
								>My Profile</nuxt-link
							>
						</li>
					</ul>
				</nav>
			</header>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style scoped lang="scss">
header {
	background-color: #252525;
	nav {
		ul {
			display: flex;
			padding: 1rem;
			li {
				list-style: none;
				margin-right: 1rem;
				a {
					color: #fff;
					text-decoration: none;

					&:hover {
						text-decoration: underline;
						color: #f00;
					}
				}
			}
		}
	}
}
</style>
