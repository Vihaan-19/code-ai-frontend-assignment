import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import GitHubIcon from "@mui/icons-material/GitHub";
import BitbucketIcon from "@mui/icons-material/AccountTree";
import AzureIcon from "@mui/icons-material/Cloud";
import GitLabIcon from "@mui/icons-material/Group";

export const Signin = () => {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f6f6f6",
          padding: 3,
        }}
      >
        <Card
          sx={{
            width: 300,
            textAlign: "center",
            boxShadow: 2,
            borderRadius: 2,
            mb: 2,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <AutoFixHighIcon sx={{ fontSize: 32, mr: 1 }} />
              <Typography variant="h6" gutterBottom>
                AI to Detect & Autofix Bad Code
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Box>
                <Typography variant="h6">30+</Typography>
                <Typography variant="caption">Language Support</Typography>
              </Box>
              <Box>
                <Typography variant="h6">10K+</Typography>
                <Typography variant="caption">Developers</Typography>
              </Box>
              <Box>
                <Typography variant="h6">100K+</Typography>
                <Typography variant="caption">Hours Saved</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 250,
            textAlign: "center",
            boxShadow: 2,
            borderRadius: 2,
            position: "relative",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#eaeaea",
                  width: 32,
                  height: 32,
                }}
              >
                📊
              </Avatar>
              <Typography variant="caption" sx={{ color: "green" }}>
                ↑ 14% This week
              </Typography>
            </Box>
            <Typography variant="body1">Issues Fixed</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              500K+
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Right Section */}
      <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 4,
      }}
      >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 4,
          margin:7,
          background: "#ffffff",
          borderLeft: "1px solid #e0e0e0",
          borderRadius: "0 8px 8px 0",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Upper Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Heading and Tabs */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Welcome to CodeAnt AI
          </Typography>

          {/* Tabs */}
          <Tabs
            value={tabValue}
            indicatorColor="primary"
            textColor="primary"
            centered
            sx={{
              backgroundColor: "#f6f6f6",
              borderRadius: 2,
              mt: 2,
              mb: 3,
              width: "60%",
            }}
            onChange={handleTabChange}
          >
            <Tab
              label="SAAS"
              sx={{ fontWeight: "bold", color: "#555" }}
            />
            <Tab
              label="Self Hosted"
              sx={{ fontWeight: "bold", color: "#555" }}
            />
          </Tabs>

          <Divider sx={{ width: "100%", my: 3 }} />

          {/* Sign-in Buttons */}
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            {tabValue === 0 ? (
              <>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  fullWidth
                  sx={{
                    mb: 2,
                    backgroundColor: "#24292e",
                    color: "white",
                    "&:hover": { backgroundColor: "#1d2227" },
                  }}
                  onClick={handleSignIn}
                >
                  Sign in with GitHub
                </Button>
                <Button
                  variant="contained"
                  startIcon={<BitbucketIcon />}
                  fullWidth
                  sx={{
                    mb: 2,
                    backgroundColor: "#2684FF",
                    color: "white",
                    "&:hover": { backgroundColor: "#1e6fe1" },
                  }}
                  onClick={handleSignIn}
                >
                  Sign in with Bitbucket
                </Button>
                <Button
                  variant="contained"
                  startIcon={<AzureIcon />}
                  fullWidth
                  sx={{
                    mb: 2,
                    backgroundColor: "#0078D4",
                    color: "white",
                    "&:hover": { backgroundColor: "#005a9e" },
                  }}
                  onClick={handleSignIn}
                >
                  Sign in with Azure DevOps
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GitLabIcon />}
                  fullWidth
                  sx={{
                    mb: 2,
                    backgroundColor: "#FC6D26",
                    color: "white",
                    "&:hover": { backgroundColor: "#e3591c" },
                  }}
                  onClick={handleSignIn}
                >
                  Sign in with GitLab
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  startIcon={<GitLabIcon />}
                  fullWidth
                  sx={{
                    mb: 2,
                    backgroundColor: "#FC6D26",
                    color: "white",
                    "&:hover": { backgroundColor: "#e3591c" },
                  }}
                  onClick={handleSignIn}
                >
                  Sign in with GitLab
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GitLabIcon />}
                  fullWidth
                  sx={{
                    mb: 2,
                    backgroundColor: "#6C757D",
                    color: "white",
                    "&:hover": { backgroundColor: "#5a6268" },
                  }}
                  onClick={handleSignIn}
                >
                  Sign in with SSO
                </Button>
              </>
            )}
          </Box>
        </Box>

      </Box>
        {/* Bottom Section */}
        <Typography
          variant="caption"
          sx={{
            textAlign: "center",
            // m: 3,
            color: "#777",
          }}
        >
          By signing up you agree to the <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </Box>
  );
};
