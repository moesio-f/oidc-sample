import { authOptions } from "@/utils/authOptions";
import { subtitle, title } from "@/components/primitives";
import { Code } from "@nextui-org/code";
import { Textarea } from "@nextui-org/input";
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
					<h2 className={subtitle()}>User ID:</h2>
					<p><Code color="secondary">{session.user.id}</Code></p>
					<h2 className={subtitle()}>Name:</h2>
					<p><Code color="secondary">{session.user?.name}</Code></p>
					<h2 className={subtitle()}>E-mail:</h2>
					<p><Code color="secondary">{session.user?.email}</Code></p>
					<h2 className={subtitle()}>Tokens:</h2>
					<Textarea
						isReadOnly
						variant="flat"
						color="secondary"
						label="Access"
						labelPlacement="outside"
						defaultValue={session.tokens.access}
					/>
					<Textarea
						isReadOnly
						variant="flat"
						color="secondary"
						label="ID"
						labelPlacement="outside"
						defaultValue={session.tokens.id}
					/>
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
