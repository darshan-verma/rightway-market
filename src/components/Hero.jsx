import React, { useState } from "react";

export default function Hero() {
	const [panel, setPanel] = useState("default"); // default | marketing | better | bigger

	const containerClass = `hero-landing panel-${panel}`;

	return (
		<section
			className={containerClass}
			role="region"
			aria-label="Hero"
			onMouseLeave={() => setPanel("default")}
		>
			{/* Background layers — images can be replaced later in CSS or with inline style */}
			<div className="hero-bg bg-default" aria-hidden="true" />
			<div className="hero-bg bg-marketing" aria-hidden="true" />
			<div className="hero-bg bg-better" aria-hidden="true" />
			<div className="hero-bg bg-bigger" aria-hidden="true" />

			<div className="site-container hero-inner text-center">
				<div>
					<h1 className="hero-text">
						<span className="hero-title">We Are </span>
						<span
							className="hero-title interactive-word"
							onMouseEnter={() => setPanel("marketing")}
							onFocus={() => setPanel("marketing")}
							tabIndex={0}
							aria-controls="marketing-panel"
							style={{ cursor: "pointer" }}
						>
							<strong style={{ fontWeight: 900 }}>Marketing Mafias</strong>
						</span>
						<br />
						<span className="hero-sub">Skilled enough to know </span>
						<span
							className="hero-sub interactive-word"
							onMouseEnter={() => setPanel("better")}
							onFocus={() => setPanel("better")}
							tabIndex={0}
							aria-controls="better-panel"
							style={{ cursor: "pointer" }}
						>
							<strong>better</strong>
						</span>
						<br />
						<span className="hero-sub2">Wild enough to think </span>
						<span
							className="hero-sub2 interactive-word"
							onMouseEnter={() => setPanel("bigger")}
							onFocus={() => setPanel("bigger")}
							tabIndex={0}
							aria-controls="bigger-panel"
							style={{ cursor: "pointer" }}
						>
							<strong>bigger!</strong>
						</span>
					</h1>
				</div>
			</div>
		</section>
	);
}
