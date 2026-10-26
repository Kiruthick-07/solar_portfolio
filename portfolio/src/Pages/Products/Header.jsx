import Navbar from "../Landing/Navbar";

const FONT = "'Poppins', system-ui, sans-serif";

export default function ProductsHeader() {
	return (
		<>
			<Navbar />
			<header
				style={{
					position: "relative",
					minHeight: "450px",
					overflow: "hidden",
					backgroundColor: "#f6fbf8",
					backgroundImage: "url('/ProductsHeaderIMG.png')",
					backgroundPosition: "center right",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					fontFamily: FONT,
				}}
			>

			<div
				aria-hidden="true"
				style={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 34%, rgba(255,255,255,0.72) 51%, rgba(255,255,255,0.08) 76%, transparent 100%)",
					pointerEvents: "none",
				}}
			/>

			<div
				style={{
					position: "relative",
					zIndex: 1,
					width: "90%",
					maxWidth: "1200px",
					minHeight: "300px",
					margin: "0 auto",
					padding: "112px 0 42px",
					boxSizing: "border-box",
				}}
			>
				<nav
					aria-label="Breadcrumb"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "12px",
						marginBottom: "28px",
						color: "#65747b",
						fontSize: "12px",
						fontWeight: 500,
					}}
				>
					  <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
						Home
					</a>
					<span aria-hidden="true">/</span>
					<span style={{ color: "#159447", fontWeight: 600 }}>Products</span>
				</nav>

				<h1
					style={{
						maxWidth: "520px",
						margin: 0,
						color: "#09232b",
						fontSize: "clamp(44px, 4vw, 48px)",
						fontWeight: 700,
						lineHeight: 1.15,
						letterSpacing: "-1.6px",
					}}
				>
					Explore Our Products &amp;
					<span style={{ display: "block", color: "#159447" }}>Solutions</span>
				</h1>

				<p
					style={{
						maxWidth: "470px",
						margin: "12px 0 0",
						color: "#65747b",
						fontSize: "16px",
						lineHeight: 1.45,
					}}
				>
					Reliable products and engineering solutions for homes, businesses and
					industries.
				</p>
			</div>

			<style>{`
				@media (max-width: 700px) {
					.products-header-content {
						width: 90%;
					}
				}
			`}</style>
			</header>
		</>
	);
}
