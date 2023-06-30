import { useState } from "react";

export default function Accordion() {
	const [show, setShow] = useState(false);

	return (
		<main className="fixed inset-0 flex items-center justify-center bg-white/20">
			<section className="w-full px-3">
				<div className="mx-auto max-w-xl w-full">
					<div className="p-3 border-2 rounded-md border-white/30">
						<button onClick={() => setShow(!show)} className={`flex justify-between items-center w-full`}>
							<b className="text-white/70">
								This is my accordion
							</b>
							<div className="">
								<div
									className="flex flex-col gap-3 relative z-20 p-2"
								>
									<div className="h-0.5 w-5 bg-white/70 rounded-full" />
									<div
										className={`absolute h-0.5 w-5 bg-white/70 rounded-full transition-all duration-300 ${
											show ? "rotate-90" : "rotate-0"
										}`}
									/>
								</div>
							</div>
						</button>
						<div
							className={`overflow-hidden font-bold transition-all duration-300 text-neutral-400 ${
								show ? "h-24 opacity-100 mt-3" : "h-0 opacity-0"
							}`}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolor reiciendis pariatur facilis eius
							quisquam nulla, corporis, voluptas rem assumenda
							odio, veniam cupiditate fuga! Mollitia expedita non,
							numquam reprehenderit dolores totam.
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}