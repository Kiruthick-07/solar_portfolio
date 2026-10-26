import { useState } from "react";
import {
	ArrowRight,
	Factory,
	Settings2,
	Sun,
	X,
	Zap,
} from "lucide-react";

const FONT = "'Poppins', system-ui, sans-serif";
const GREEN = "#0fa64b";
const INK = "#102b35";
const PRODUCTS = [
	{
		id: 1,
		category: "Electrical & Automation",
		name: "Industrial Control Panel",
		description: "Custom configurations available for industrial and commercial applications.",
		image: "/app-industrial.png",
		icon: Settings2,
		details: "Designed and assembled for dependable industrial control, monitoring, and automation workflows.",
	},
	{
		id: 2,
		category: "Solar Energy",
		name: "Solar Panels & Inverters",
		description: "Multiple capacities and brands to suit your energy needs.",
		image: "/solar-panel.png",
		icon: Sun,
		details: "High-efficiency solar generation and conversion equipment for residential, commercial, and industrial sites.",
	},
	{
		id: 3,
		category: "Industrial Equipment",
		name: "Drives & Motors",
		description: "Reliable and efficient solutions for various industrial applications.",
		image: "/solar-inverter.png",
		icon: Factory,
		details: "Efficient motor control equipment selected for reliable operation across demanding industrial environments.",
	},
	{
		id: 4,
		category: "Power Backup",
		name: "UPS & Backup Systems",
		description: "Solutions for continuous and uninterrupted operation.",
		image: "/solar-battery.png",
		icon: Zap,
		details: "Power continuity and storage solutions for critical equipment, offices, and production facilities.",
	},
];

function ProductModal({ product, mode, onClose }) {
	const [submitted, setSubmitted] = useState(false);

	if (!product) return null;

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<div
			role="presentation"
			onMouseDown={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 200,
				display: "grid",
				placeItems: "center",
				padding: "20px",
				background: "rgba(8, 29, 22, 0.48)",
				backdropFilter: "blur(5px)",
			}}
		>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="product-dialog-title"
				style={{
					position: "relative",
					width: "min(100%, 520px)",
					maxHeight: "90vh",
					overflowY: "auto",
					borderRadius: "18px",
					background: "#ffffff",
					padding: "28px",
					boxSizing: "border-box",
					boxShadow: "0 24px 70px rgba(8, 29, 22, 0.25)",
					fontFamily: FONT,
				}}
			>
				<button
					type="button"
					aria-label="Close dialog"
					onClick={onClose}
					style={{
						position: "absolute",
						top: "16px",
						right: "16px",
						width: "34px",
						height: "34px",
						display: "grid",
						placeItems: "center",
						border: "1px solid #dfe8e4",
						borderRadius: "50%",
						background: "#ffffff",
						color: INK,
						cursor: "pointer",
					}}
				>
					<X size={17} />
				</button>

				{mode === "details" ? (
					<>
						<img
							src={product.image}
							alt={product.name}
							style={{ width: "100%", height: "190px", objectFit: "cover", borderRadius: "12px", marginBottom: "22px" }}
						/>
						<p style={{ margin: "0 0 8px", color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
							{product.category}
						</p>
						<h2 id="product-dialog-title" style={{ margin: "0 0 12px", color: INK, fontSize: "28px", lineHeight: 1.15 }}>
							{product.name}
						</h2>
						<p style={{ margin: 0, color: "#5c6e75", fontSize: "15px", lineHeight: 1.65 }}>{product.details}</p>
						<button
							type="button"
							onClick={() => onClose("enquire")}
							style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "9px", border: 0, borderRadius: "8px", padding: "12px 18px", background: GREEN, color: "#fff", fontFamily: FONT, fontWeight: 600, cursor: "pointer" }}
						>
							Enquire for Price <ArrowRight size={16} />
						</button>
					</>
				) : (
					<>
						<p style={{ margin: "0 0 8px", color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
							Enquire for Price
						</p>
						<h2 id="product-dialog-title" style={{ margin: "0 0 10px", color: INK, fontSize: "28px", lineHeight: 1.15 }}>{product.name}</h2>
						{submitted ? (
							<p style={{ margin: "22px 0 4px", color: "#287348", fontSize: "15px", lineHeight: 1.6 }}>
								Thanks. Your enquiry has been received and our team will contact you shortly.
							</p>
						) : (
							<form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px", marginTop: "22px" }}>
								<input required name="name" placeholder="Your name" aria-label="Your name" style={inputStyle} />
								<input required type="email" name="email" placeholder="Email address" aria-label="Email address" style={inputStyle} />
								<input required name="phone" placeholder="Phone number" aria-label="Phone number" style={inputStyle} />
								<textarea name="message" placeholder={`Tell us about your ${product.name.toLowerCase()} requirement`} aria-label="Message" rows="4" style={{ ...inputStyle, resize: "vertical" }} />
								<button type="submit" style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "9px", border: 0, borderRadius: "8px", padding: "13px 18px", background: GREEN, color: "#fff", fontFamily: FONT, fontWeight: 600, cursor: "pointer" }}>
									Send Enquiry <ArrowRight size={16} />
								</button>
							</form>
						)}
					</>
				)}
			</div>
		</div>
	);
}

const inputStyle = {
	width: "100%",
	boxSizing: "border-box",
	border: "1px solid #dce8e2",
	borderRadius: "8px",
	padding: "12px 13px",
	color: INK,
	background: "#fbfdfc",
	fontFamily: FONT,
	fontSize: "13px",
	outlineColor: GREEN,
};

export default function ProductsList() {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [modalMode, setModalMode] = useState("details");

	const openModal = (product, mode) => {
		setSelectedProduct(product);
		setModalMode(mode);
	};

	const closeModal = (nextMode) => {
		if (nextMode === "enquire" && selectedProduct) {
			setModalMode("enquire");
			return;
		}
		setSelectedProduct(null);
	};

	return (
		<section id="products-list" style={{ padding: "28px 3% 70px", background: "#ffffff", fontFamily: FONT, color: INK }}>
			<div style={{ maxWidth: "1480px", margin: "0 auto" }}>
				<div className="product-list-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
					{PRODUCTS.map((product) => {
							const Icon = product.icon;
							return (
								<article key={product.id} style={{ minWidth: 0, border: "1px solid #dce5e2", borderRadius: "12px", padding: "12px 12px 10px", background: "#ffffff", boxShadow: "0 3px 12px rgba(12, 49, 31, 0.04)" }}>
									<img src={product.image} alt={product.name} style={{ width: "100%", height: "196px", display: "block", objectFit: "cover", borderRadius: "10px", marginBottom: "16px" }} />
									<div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#64757b", fontSize: "10px", fontWeight: 700, letterSpacing: "1.4px", textTransform: "uppercase" }}>
										<Icon size={20} color={GREEN} strokeWidth={2.2} />
										{product.category}
									</div>
									<h2 style={{ margin: "10px 0 6px", color: INK, fontSize: "20px", lineHeight: 1.2, letterSpacing: "-0.4px" }}>{product.name}</h2>
									<p style={{ minHeight: "48px", margin: 0, color: "#60737b", fontSize: "14px", lineHeight: 1.45 }}>{product.description}</p>
									<div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "14px" }}>
										<button type="button" onClick={() => openModal(product, "details")} style={{ display: "inline-flex", alignItems: "center", gap: "9px", border: 0, borderRadius: "8px", padding: "12px 20px", background: GREEN, color: "#fff", fontFamily: FONT, fontSize: "13px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
											View Details <ArrowRight size={16} />
										</button>
										<span aria-hidden="true" style={{ width: "1px", height: "24px", background: "#d8e2de" }} />
										<button type="button" onClick={() => openModal(product, "enquire")} style={{ border: 0, padding: 0, background: "transparent", color: GREEN, fontFamily: FONT, fontSize: "13px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
											Enquire for Price
										</button>
									</div>
								</article>
							);
					})}
				</div>
			</div>

			{selectedProduct && <ProductModal product={selectedProduct} mode={modalMode} onClose={closeModal} />}

			<style>{`
				@media (max-width: 1150px) {
					.product-list-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
				}
				@media (max-width: 560px) {
					.product-list-grid { grid-template-columns: 1fr !important; }
				}
			`}</style>
		</section>
	);
}
