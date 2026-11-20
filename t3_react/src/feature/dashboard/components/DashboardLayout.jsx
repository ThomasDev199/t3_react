
import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children, title }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#F7F6FB",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Header title={title} />

        <Box
          component="main"
          sx={{
            p: { xs: 2, md: 4 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
