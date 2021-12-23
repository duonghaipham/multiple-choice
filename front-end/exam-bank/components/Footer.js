function Footer() {
	return (
		<footer className="bg-gray-800 px-32 py-5">
			<div className="mb-4 flex">
				<img
					className="w-8 h-8 mx-1 cursor-pointer"
					src="/img/icon_facebook.png"
					alt="icon_facebook"
				/>
				<a
					href="https://github.com/phduong2001/multiple-choice"
					target="_blank"
					and
					rel="noopener noreferrer"
				>
					<img
						className="w-8 h-8 mx-1 cursor-pointer"
						src="/img/icon_github.png"
						alt="icon_github"
					/>
				</a>
				<img
					className="w-8 h-8 mx-1 cursor-pointer"
					src="/img/icon_mail.png"
					alt="icon_mail"
				/>
			</div>
			<div>
				<span className="block text-gray-400">Copyright© 2021</span>
				<span className="block text-gray-400">Developed by DKG team</span>
			</div>
		</footer>
	);
}

export default Footer;
