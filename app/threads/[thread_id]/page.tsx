// Copyright Rob Gage 2025

import Dashboard from "@/components/dashboard";
import DashboardPage from "@/components/dashboard_page";

export default function Page() {
    return <Dashboard>
        <div className="h-full flex flex-col">
            <DashboardPage header={
                <h1>New Thread</h1>
            }>
                <p>test</p>
            </DashboardPage>
        </div>
    </Dashboard>;
}