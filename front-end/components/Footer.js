function Footer({ disable }) {
	return (
		<footer className="flex flex-col items-center md:items-start bg-gray-800 px-3 md:px-32 py-5 text-sm md:text-lg z-10 relative">
			{disable && (
				<span className="absolute left-0 top-0 w-full h-full z-20"></span>
			)}
			<div className="mb-4 flex">
				<img
					className="w-8 h-8 mx-1 cursor-pointer"
					src="/img/icon_facebook.png"
					alt="icon_facebook"
				/>
				<a
					href="https://github.com/phduong2001/multiple-choice"
					target="_blank"
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
