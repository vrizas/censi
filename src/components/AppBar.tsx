import * as React from "react";
import { PaletteMode, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { default as MUIAppBar } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import Logo from '/logo.svg';
import LogoWhite from '/logo-white.svg';

const logoStyle = {
    width: "80px",
    height: "auto",
    cursor: "pointer",
    paddingLeft: "8px",
};

interface Props {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

function AppBar({ mode, toggleColorMode }: Props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <MUIAppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: "transparent",
                    backgroundImage: "none",
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            borderRadius: "999px",
                            bgcolor:
                                theme.palette.mode === "light"
                                    ? "rgba(255, 255, 255, 0.4)"
                                    : "rgba(0, 0, 0, 0.4)",
                            backdropFilter: "blur(24px)",
                            maxHeight: 40,
                            border: "1px solid",
                            borderColor: "divider",
                            boxShadow:
                                theme.palette.mode === "light"
                                    ? `0 0 1px rgba(0, 0, 0, 0.1), 1px 1.5px 2px -1px rgba(0, 0, 0, 0.15), 4px 4px 12px -2.5px rgba(0, 0, 0, 0.15)`
                                    : "0 0 1px rgba(86, 201, 162, 0.7), 1px 1.5px 2px -1px rgba(86, 201, 162, 0.65), 4px 4px 12px -2.5px rgba(86, 201, 162, 0.65)",
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                ml: "-18px",
                                px: 0,
                            }}
                        >
                            <img
                                src={
                                    theme.palette.mode === "light" ? Logo : LogoWhite
                                }
                                style={logoStyle}
                                alt="logo of censi"
                            />
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 0.5,
                                alignItems: "center",
                            }}
                        >
                            <ToggleColorMode
                                mode={mode}
                                toggleColorMode={toggleColorMode}
                            />
                        </Box>
                        <Box sx={{ display: { sm: "", md: "none" } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: "30px", p: "4px" }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer
                                anchor="right"
                                open={open}
                                onClose={toggleDrawer(false)}
                            >
                                <Box
                                    sx={{
                                        minWidth: "60dvw",
                                        p: 2,
                                        backgroundColor: "background.paper",
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "end",
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ToggleColorMode
                                            mode={mode}
                                            toggleColorMode={toggleColorMode}
                                        />
                                    </Box>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MUIAppBar>
        </div>
    );
}

export default AppBar;
