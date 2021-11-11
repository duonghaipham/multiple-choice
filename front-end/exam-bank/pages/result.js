import Head from "next/head";
import ViewExam from "../components/ViewExam";

// Done form: question-answer-rightAnswer - 14-10-2021

export default function Home() {
	return (
		<div className="flex">
			<Head>
				<title>Result</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ViewExam />
		</div>
	);
}
