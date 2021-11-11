import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import CreateExamForm from "../components/CreateExamForm";
import EditExamForm from "../components/EditExamForm";

// Done form: question-answer-rightAnswer - 14-10-2021

export default function CreateExam() {
	const router = useRouter();

	return (
		<div className="p-5 w-auto">
			<Head>
				<title>Exam</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{router.query.type == "create" ? <CreateExamForm /> : <EditExamForm />}
		</div>
	);
}
