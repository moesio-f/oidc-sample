import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { subtitle, title } from "@/components/primitives";
import { Code } from "@nextui-org/code";
import { getServerSession } from "next-auth/next";


export default async function LoggedPage() {
	const session = await getServerSession(authOptions);

	if (session) {
		return (
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title({ color: "blue" })}>You are logged in!</h1>
				</div>
				<div className="inline-block max-w-lg text-center justify-center">
					<h2 className={subtitle()}>Name:</h2>
					<p><Code color="secondary">{session.user?.name}</Code></p>
					<h2 className={subtitle()}>E-mail:</h2>
					<p><Code color="secondary">{session.user?.email}</Code></p>
					<h2 className={subtitle()}>Access Token:</h2>
					<p className="break-all">{session.access_token}</p>
				</div>
			</section>
		);
	}

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "violet" })}>Access denied.</h1>
			</div>
		</section>
	);
}
