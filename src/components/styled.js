import { styled } from "@material-ui/core/styles"
import {
  AppBar,
  Container,
  Card,
  Paper,
  Typography,
  Button,
  Divider,
} from "@material-ui/core"

export const RoundedAppBar = styled(AppBar)({
  borderRadius: "30px",
  background: "rgba(255, 255, 255, 0.06)",
})

export const StyledContainer = styled(Container)({
  paddingTop: "16px",
  maxWidth: ({ maxWidth }) => (maxWidth ? maxWidth : "90vw"),
})

export const StyledPaper = styled(Paper)({
  height: "90px",
  padding: "20px 0 0 20px",

  background: ({ row }) =>
    row === "even" ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.09)",
})

export const StyledButton = styled(Button)({
  borderRadius: ({ borderRadius }) =>
    borderRadius ? `${borderRadius} !important` : "30px",
  border: "0 !important",
  width: ({ width }) => width,
  color: ({ color }) => color,
})

export const StyledCard = styled(Card)({
  backgroundColor: "transparent",
  position: "relative",
})

export const StyledCardContent = styled(Card)({
  padding: "20px 0 20px 16px !important",
  background: ({ row }) =>
    row === "even" ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.09)",
})

export const StyledDay = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  lineHeight: "1.17",
  marginBottom: "18px",
  color: "#e6e6e6",
  boxSizing: "border-box",
})

export const StyledNote = styled(Typography)({
  color: "#666666",
  fontSize: "10px",
  fontWeight: 300,
  margin: 0,
  boxSizing: "border-box",
  position: "absolute",
  left: "16px",
  bottom: "16px",
})

export const StyledDivider = styled(Divider)({
  height: "50px",
  width: "3px",
  borderRadius: "2px",
  background: "#0f6ebe",
  position: "absolute",
  left: "8px",
  top: "50%",
  transform: "translateY(-50%)",
})
