<script lang="ts" setup></script>

<template>
	<header>
		<nav>
			<ul>
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/events">Events</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/events/profile">Profile</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/events/profile/1">My Profile</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
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
