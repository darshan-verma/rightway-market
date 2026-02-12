import React, { useState, useRef } from "react";

export default function Hero() {
	const [panel, setPanel] = useState("default"); // default | marketing | better | bigger
	const gunVideoRef = useRef(null);
	const chaiVideoRef = useRef(null);

	const containerClass = `hero-landing panel-${panel}`;

	const handleVideoHover = (videoRef) => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.play();
		}
	};

	const handleVideoLeave = (videoRef) => {
		if (videoRef.current) {
			videoRef.current.pause();
		}
	};

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

			<div className="site-container hero-inner">
				<div className="hero-content-row">
					{/* Left video — Gun */}
					<div
						className="hero-video-wrap hero-video-left"
						onMouseEnter={() => handleVideoHover(gunVideoRef)}
						onMouseLeave={() => handleVideoLeave(gunVideoRef)}
					>
						<video
							ref={gunVideoRef}
							src="/hero/hero-gun.mp4"
							muted
							playsInline
							loop
							preload="metadata"
							className="hero-video"
						/>
					</div>

					{/* Center text */}
					<div className="hero-text-center">
						<h1 className="hero-text">
							<span className="hero-title">We Are </span>
							<span
								className="hero-title interactive-word"
								onMouseEnter={() => setPanel("marketing")}
								onMouseLeave={() => setPanel("default")}
								onBlur={() => setPanel("default")}
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
								onMouseLeave={() => setPanel("default")}
								onBlur={() => setPanel("default")}
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
								onMouseLeave={() => setPanel("default")}
								onBlur={() => setPanel("default")}
								tabIndex={0}
								aria-controls="bigger-panel"
								style={{ cursor: "pointer" }}
							>
								<strong>bigger!</strong>
							</span>
						</h1>
					</div>

					{/* Right video — Chai */}
					<div
						className="hero-video-wrap hero-video-right"
						onMouseEnter={() => handleVideoHover(chaiVideoRef)}
						onMouseLeave={() => handleVideoLeave(chaiVideoRef)}
					>
						<video
							ref={chaiVideoRef}
							src="/hero/hero-chai.mp4"
							muted
							playsInline
							loop
							preload="metadata"
							className="hero-video"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
