'use client';
import useSWR from 'swr';
import { subtitle, title } from "@/components/primitives";
import { Code } from "@nextui-org/code";
import { Textarea } from "@nextui-org/input";
import { useSession } from "next-auth/react";

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/service/protected`;

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

export default function PrivatePage() {
        const { data: session, status } = useSession();
        const { data, error, isLoading } = useSWR(apiUrl, 
            url => fetcher(url, {headers: {Authorization: `Bearer ${session?.tokens.access as string}`}}), 
            {refreshInterval: 100});
    
        if (isLoading) return <div className="skeleton" />;

        return (
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title({ color: "blue" })}>You are consuming a private API!</h1>
				</div>
				<div className="inline-block max-w-fit text-center justify-center">
					<Textarea
						isReadOnly
						variant="flat"
						color="secondary"
						label="JSON"
						labelPlacement="outside"
						defaultValue={JSON.stringify(data, null, 2)}
					/>
				</div>
			</section>
		);
}
