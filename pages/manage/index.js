import { Header, Layout, Modal, Navbar, Pagination, Table } from "@/components";

function Manage() {
	return (
		<Layout>
			<Navbar />
			<Header />
			<Table />
			<Pagination />
			<Modal />
		</Layout>
	);
}

export default Manage;