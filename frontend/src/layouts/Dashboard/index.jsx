import React from "react";
import { Button } from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from "@ant-design/icons";
import { useCollapseStore } from "../../store";
import styles from "./Dashboard.module.css";
import SideBar from "../../components/Sidebar";
import Table from "../../components/UserList";
import AddUser from "../AddUser";
import UpdateUser from "../UpdateUser";
import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {

	const State = {
		Collapse: {
			isCollapsed: useCollapseStore((State) => State.collapseSidebar),
		},
	};

	const Update = {
		Collapse: {
			Handler: useCollapseStore((State) => State.collapseHandler),
		},
	};
	return (
		<div className={styles.Dashboard}>
			<SideBar />
			<div className={styles.MainPanel}>
				<Button
					type="primary"
					onClick={Update.Collapse.Handler}
					style={{
						marginBottom: 16,
					}}
				>
					{State.Collapse.isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</Button>
				<Routes>
					<Route path="/" exact element={<Table />} />
					<Route path="/add-user" element={<AddUser/>} />
					<Route path="/edit-user" element={<UpdateUser/>} />
				</Routes>
				
			</div>
		</div>
	);
};

export default Dashboard;
