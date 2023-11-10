import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
function App() {
	return (
		<>
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={false}
				style={{ height: "100vh", width: "100vw" }}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{/* "lat": "43.7159395",
    "lon": "10.4018624", */}
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
						<img src="/vite.svg" alt="Vite vite" />
						<h1>Dat popup</h1>
					</Popup>
				</Marker>
				<Marker position={[43.7159395, 10.4018624]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
						<img src="/vite.svg" alt="Vite vite" />
						<h1>Dat popup</h1>
					</Popup>
				</Marker>
			</MapContainer>
		</>
	)
}

export default App
